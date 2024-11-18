// Переменные
const modal1 = document.getElementById('modal1');
const openModalBtn1 = document.getElementById('openModalBtn1');
const closeModalBtn1 = document.getElementById('closeModalBtn1');
const prevBtn1 = document.getElementById('prevBtn1');
const nextBtn1 = document.getElementById('nextBtn1');
const slider1 = document.getElementById('slider1');
const slides1 = document.querySelectorAll('.slide1');

let currentIndex = 0;

// Открытие модального окна
openModalBtn1.addEventListener('click', () => {
    modal1.showModal();
    updateSlider();
});

// Закрытие модального окна
closeModalBtn1.addEventListener('click', () => {
    modal1.close();
});

// Обработчики кнопок
prevBtn1.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides1.length - 1;
    updateSlider();
});

nextBtn1.addEventListener('click', () => {
    currentIndex = (currentIndex < slides1.length - 1) ? currentIndex + 1 : 0;
    updateSlider();
});

// Функция для обновления отображаемого слайда
function updateSlider() {
    const offset = -currentIndex * 100;
    slider1.style.transform = `translateX(${offset}%)`;
}


// Переменные
const modal2 = document.getElementById('modal2');
const openModalBtn2 = document.getElementById('openModalBtn2');
const closeModalBtn2 = document.getElementById('closeModalBtn2');
const prevBtn2 = document.getElementById('prevBtn2');
const nextBtn2 = document.getElementById('nextBtn2');
const slider2 = document.getElementById('slider2');
const slides2 = document.querySelectorAll('.slide2');

// Открытие модального окна
openModalBtn2.addEventListener('click', () => {
    modal2.showModal();
    updateSlider2();
});

// Закрытие модального окна
closeModalBtn2.addEventListener('click', () => {
    modal2.close();
});

// Обработчики кнопок
prevBtn2.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides2.length - 1;
    updateSlider2();
});

nextBtn2.addEventListener('click', () => {
    currentIndex = (currentIndex < slides2.length - 1) ? currentIndex + 1 : 0;
    updateSlider2();
});

// Функция для обновления отображаемого слайда
function updateSlider2() {
    const offset = -currentIndex * 100;
    slider2.style.transform = `translateX(${offset}%)`;
}


// Переменные
const modal3 = document.getElementById('modal3');
const openModalBtn3 = document.getElementById('openModalBtn3');
const closeModalBtn3 = document.getElementById('closeModalBtn3');
const prevBtn3 = document.getElementById('prevBtn3');
const nextBtn3 = document.getElementById('nextBtn3');
const slider3 = document.getElementById('slider3');
const slides3 = document.querySelectorAll('.slide3');

// Открытие модального окна
openModalBtn3.addEventListener('click', () => {
    modal3.showModal();
    updateSlider3();
});

// Закрытие модального окна
closeModalBtn3.addEventListener('click', () => {
    modal3.close();
});

// Обработчики кнопок
prevBtn3.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides3.length - 1;
    updateSlider3();
});

nextBtn3.addEventListener('click', () => {
    currentIndex = (currentIndex < slides3.length - 1) ? currentIndex + 1 : 0;
    updateSlider3();
});

// Функция для обновления отображаемого слайда
function updateSlider3() {
    const offset = -currentIndex * 100;
    slider3.style.transform = `translateX(${offset}%)`;
}


// Переменные
const modal4 = document.getElementById('modal4');
const openModalBtn4 = document.getElementById('openModalBtn4');
const closeModalBtn4 = document.getElementById('closeModalBtn4');
const prevBtn4 = document.getElementById('prevBtn4');
const nextBtn4 = document.getElementById('nextBtn4');
const slider4 = document.getElementById('slider4');
const slides4 = document.querySelectorAll('.slide4');

// Открытие модального окна
openModalBtn4.addEventListener('click', () => {
    modal4.showModal();
    updateSlider4();
});

// Закрытие модального окна
closeModalBtn4.addEventListener('click', () => {
    modal4.close();
});

// Обработчики кнопок
prevBtn4.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides4.length - 1;
    updateSlider4();
});

nextBtn4.addEventListener('click', () => {
    currentIndex = (currentIndex < slides4.length - 1) ? currentIndex + 1 : 0;
    updateSlider4();
});2
// Функция для обновления отображаемого слайда
function updateSlider4() {
    const offset = -currentIndex * 100;
    slider4.style.transform = `translateX(${offset}%)`;
}
