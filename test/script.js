
document.querySelector('.burger').addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('.navigation').classList.toggle('open')
})

document.querySelectorAll('.navigation a').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelector('.burger').classList.remove('active');
        document.querySelector('.navigation').classList.remove('open');
    });
})

const modal1 = document.getElementById('modal1');
const openModalBtn1 = document.getElementById('openModalBtn1');
const closeModalBtn1 = document.getElementById('closeModalBtn1');
const prevBtn1 = document.getElementById('prevBtn1');
const nextBtn1 = document.getElementById('nextBtn1');
const slider1 = document.getElementById('slider1');
const slides1 = document.querySelectorAll('.slide1');

let currentIndex = 0;

openModalBtn1.addEventListener('click', () => {
    modal1.showModal();
    updateSlider();
});

closeModalBtn1.addEventListener('click', () => {
    modal1.close();
});

prevBtn1.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides1.length - 1;
    updateSlider();
});

nextBtn1.addEventListener('click', () => {
    currentIndex = (currentIndex < slides1.length - 1) ? currentIndex + 1 : 0;
    updateSlider();
});

function updateSlider() {
    const offset = -currentIndex * 100;
    slider1.style.transform = `translateX(${offset}%)`;
}

const modal2 = document.getElementById('modal2');
const openModalBtn2 = document.getElementById('openModalBtn2');
const closeModalBtn2 = document.getElementById('closeModalBtn2');
const prevBtn2 = document.getElementById('prevBtn2');
const nextBtn2 = document.getElementById('nextBtn2');
const slider2 = document.getElementById('slider2');
const slides2 = document.querySelectorAll('.slide2');

openModalBtn2.addEventListener('click', () => {
    modal2.showModal();
    updateSlider2();
});

closeModalBtn2.addEventListener('click', () => {
    modal2.close();
});

prevBtn2.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides2.length - 1;
    updateSlider2();
});

nextBtn2.addEventListener('click', () => {
    currentIndex = (currentIndex < slides2.length - 1) ? currentIndex + 1 : 0;
    updateSlider2();
});

function updateSlider2() {
    const offset = -currentIndex * 100;
    slider2.style.transform = `translateX(${offset}%)`;
}

const modal3 = document.getElementById('modal3');
const openModalBtn3 = document.getElementById('openModalBtn3');
const closeModalBtn3 = document.getElementById('closeModalBtn3');
const prevBtn3 = document.getElementById('prevBtn3');
const nextBtn3 = document.getElementById('nextBtn3');
const slider3 = document.getElementById('slider3');
const slides3 = document.querySelectorAll('.slide3');

openModalBtn3.addEventListener('click', () => {
    modal3.showModal();
    updateSlider3();
});

closeModalBtn3.addEventListener('click', () => {
    modal3.close();
});

prevBtn3.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides3.length - 1;
    updateSlider3();
});

nextBtn3.addEventListener('click', () => {
    currentIndex = (currentIndex < slides3.length - 1) ? currentIndex + 1 : 0;
    updateSlider3();
});

function updateSlider3() {
    const offset = -currentIndex * 100;
    slider3.style.transform = `translateX(${offset}%)`;
}

const modal4 = document.getElementById('modal4');
const openModalBtn4 = document.getElementById('openModalBtn4');
const closeModalBtn4 = document.getElementById('closeModalBtn4');
const prevBtn4 = document.getElementById('prevBtn4');
const nextBtn4 = document.getElementById('nextBtn4');
const slider4 = document.getElementById('slider4');
const slides4 = document.querySelectorAll('.slide4');

openModalBtn4.addEventListener('click', () => {
    modal4.showModal();
    updateSlider4();
});

closeModalBtn4.addEventListener('click', () => {
    modal4.close();
});

prevBtn4.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides4.length - 1;
    updateSlider4();
});

nextBtn4.addEventListener('click', () => {
    currentIndex = (currentIndex < slides4.length - 1) ? currentIndex + 1 : 0;
    updateSlider4();
});2

function updateSlider4() {
    const offset = -currentIndex * 100;
    slider4.style.transform = `translateX(${offset}%)`;
}