const previousBtn = document.querySelector('.prev-image');
const NextBtn = document.querySelector('.next-image');
const carouselItem = document.querySelector('.carousel-item');
const carouselPauseBtn = document.querySelector('.carousel-pause-btn');

let currentItemPosition = 0;
let carousel;

const goToNextSlide = () => {
    if(currentItemPosition + 1 >= carouselItem.length) {
        
        const lastItem = `.item-${currentItemPosition}`;

        currentItemPosition = 0;
        const currentItem = `.item-${currentItemPosition}`;

        setNodeAttributes(lastItem, currentItem);
    } else {
        currentItemPosition += 1;
        const lastItem = `.item-${currentItemPosition - 1}`;
        const currentItem = `.item-${currentItemPosition}`;
        setNodeAttributes(lastItem, currentItem);
    }
}

const goToPreviousSlide = () => {
    if(currentItemPosition - 1 >= 0){
        currentItemPosition -= 1;
        const currentItem = `.item-${currentItemPosition}`;
        const lastItem = `.item-${currentItemPosition + 1}`;

        setNodeAttributes(lastItem, currentItem);
    } else {
        const lastItem = `.item-${currentItemPosition}`;
        
        currentItemPosition = 2;
        const currentItem = `.item-${currentItemPosition}`;

        setNodeAttributes(lastItem, currentItem);
    }
}

const setNodeAttributes = (lastItem, currentItem) => {
    lastItem.css('display', 'none');
    currentItem.css('display', 'block');
    lastItem.attr('aria-hidden', 'true');
    currentItem.attr('aria-hidden', 'false');
}

// Events
previousBtn.addEventListener("click", function() {
    goToPreviousSlide();
});

NextBtn.addEventListener("click", function() {
    goToNextSlide();
});

document.addEventListener("keydown", (event) => {
    const keyCode = event.key;

    if(keyCode === 39) {
        goToNextSlide();
    } else if (keyCode === 37){
        goToPreviousSlide();
    }
});

carouselPauseBtn.addEventListener('click', function(){
    clearInterval(carouselInterval);
});

document.addEventListener("DOMContentLoaded", function(){
    carouselInterval = setInterval(() => goToNextSlide(), 5000);
});


