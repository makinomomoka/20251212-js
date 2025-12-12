const images = document.querySelectorAll('.gallery-item');
let currntIndex = 0;

window.addEventListener('load', () => {
    images[currntIndex].classList.add('active');
});

function chandeImage() {
    images[currntIndex].classList.remove('active');

    currntIndex = (currntIndex + 1) % images.length;

    images[currntIndex].classList.add('active');
}

setInterval( chandeImage, 4000);