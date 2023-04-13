let offset = 612; //смещение от левого края
const sliderLine = document.querySelector('.slider');

document.querySelector('.slider-next').addEventListener('click', function(){
    offset = offset + 306; //offset += 256;
    if (offset > 612) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function(){
    offset = offset - 306; //offset -= 256;
    if (offset < 0) {
        offset = 612;
    }
    sliderLine.style.left = -offset + 'px';
});