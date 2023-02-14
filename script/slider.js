// переменные слайдера
let btn_right = document.querySelector("#right_arrow");
let btn_left = document.querySelector("#left_arrow");
let slides = document.querySelectorAll(".slider_item");
let slide = document.querySelector(".slider_item");
let slider = document.querySelector(".slider");
let slider_styles = window.getComputedStyle(slider);
let slider_wth = slider_styles.width;
let wth = parseInt(slider_wth);
let wrapper = document.querySelector('.slider_wrapper');
// определяем ширину слайда
for (const slide of slides) {
    slide.style.width = slider_wth
}

let position = 0;
// переменные пагинации
let vol = document.getElementById('vol');
let nth = document.getElementById('nth');
let pag_dot = document.querySelector('.pag_dot');
vol.innerHTML = slides.length;
nth.innerHTML = 1;
// функции слайдера
function turnNext() {
    position -= wth;
    if (Math.abs(position) !== wth * slides.length) {
        wrapper.style.left = position + "px"; 
    }
    if (Math.abs(position) == wth * slides.length) {
        position = 0;
        wrapper.style.left = position + "px";
    }
    pagNum();
}
function turnPrev() { 
    if (position < 0) {
        position += wth;
        wrapper.style.left = position + "px";
    }
    if (position >= 0) {
        wrapper.style.left = 0 + "px";
    }
    pagNum();
}
// функции пагинации
function pagNum() {
    nth.innerHTML = Math.abs(position / wth) + 1;
}

/* function pagDot() {
    for (let i = 0; i < slides.length; i++) {
        let li = document.createElement('li');
        pag_dot.appendChild(li);
    }
} */
// обработчики слайдера
btn_right.addEventListener('click', turnNext);
btn_left.addEventListener('click', turnPrev);