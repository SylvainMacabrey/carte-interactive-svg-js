let svg = document.getElementById("svg_france");
let paths = svg.querySelectorAll("path");
let lis = document.querySelectorAll("li");

const activeArea = (id) => {
    document.querySelectorAll(".is-active").forEach(item => {
        item.classList.remove("is-active");
    });
    if(id !== undefined) {
        document.querySelector('#list-' + id).classList.add("is-active");
        document.querySelector('#FR-' + id).classList.add("is-active");
    }
}

paths.forEach((path) => {
    path.addEventListener('mouseenter', () => {
        let id = path.id.replace('FR-', '');
        activeArea(id);
    });
});

lis.forEach(li => {
    li.addEventListener('mouseenter', () => {
        let id = li.id.replace('list-', '');
        activeArea(id);
    });
});

svg.addEventListener('mouseleave', () => {
    activeArea();
})