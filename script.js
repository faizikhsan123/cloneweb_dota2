const slider = document.querySelector('.slider');
const list = document.querySelector('.list');
const thumbnail = document.querySelector('.thumbnail');

const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

let runautoPlay;

const initSlider = (type) => {
    const sliderItems = list.querySelectorAll('.item');
    const thumbnailItems = thumbnail.querySelectorAll('.item');

    if (type === 'next') {
        // Move the first item to the end
        list.appendChild(sliderItems[0]);
        thumbnail.appendChild(thumbnailItems[0]);
        slider.classList.add('next');
    } else if (type === 'prev') {
        // Move the last item to the start
        const lastItemPosition = sliderItems.length - 1;
        list.prepend(sliderItems[lastItemPosition]);
        thumbnail.prepend(thumbnailItems[lastItemPosition]);
        slider.classList.add('prev');
    }

    // Remove the class after the animation duration
    setTimeout(() => {
        slider.classList.remove('next');
        slider.classList.remove('prev');
    }, 2000); // Adjust the timeout to match the animation duration

    // Reset the autoplay timeout
    clearTimeout(runautoPlay);
    runautoPlay = setTimeout(() => {
        next.click();
    }, 8000);
};

next.addEventListener('click', () => {
    initSlider('next');
});

prev.addEventListener('click', () => {
    initSlider('prev');
});

// Initialize autoplay
runautoPlay = setTimeout(() => {
    next.click();
}, 8000);
