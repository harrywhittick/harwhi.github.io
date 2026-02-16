const tabs = document.querySelectorAll('.tab-btn');
const panels = document.querySelectorAll('.tab-panel');
const headerText = document.querySelector('.parallax h1');

// typing header
const typeText = "harwhi";
let index = 0;
headerText.textContent = "";
function typeHeader() {
    if(index < typeText.length){
        headerText.textContent += typeText.charAt(index);
        index++;
        setTimeout(typeHeader, 100);
    }
}
typeHeader();

// tab switching
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        if(tab.classList.contains('active')) return;
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        panels.forEach(panel => panel.classList.remove('active'));
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});

// scroll reveal for non-active panels
function revealOnScroll() {
    const panels = document.querySelectorAll('.tab-panel');
    panels.forEach(panel => {
        if(panel.classList.contains('active')) return;
        const top = panel.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if(top < windowHeight - 50){
            panel.style.opacity = 1;
            panel.style.transform = "translateY(0)";
        } else {
            panel.style.opacity = 0;
            panel.style.transform = "translateY(20px)";
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
