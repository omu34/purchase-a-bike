document.addEventListener("DOMContentLoaded", function() {
    const sliders = document.querySelectorAll(".testimonial-slider");

    sliders.forEach((slider, index) => {
        let autoPlay = Number(slider.dataset.autoplay);
        if (!autoPlay || autoPlay === 0) autoPlay = false;

        const delay = index * 1000; // Stagger start by 300ms per slider

        setTimeout(() => {
            new Flickity(slider, {
                cellAlign: "left",
                contain: true,
                wrapAround: true,
                autoPlay: autoPlay,
                pageDots: false,
                fullscreen: true,
                pauseAutoPlayOnHover: false
            });
        }, delay);
    });
});



// const carousels = document.querySelectorAll(".carousel")
// let autoPlay = Number(elem.dataset.autoplay);

// const fikty = new Flickity(elem, {
//     cellAlign: "left",
//     contain: true,
//     wrapAround: true,
//     autoPlay: autoPlay,
//     pageDots: false,
//     fullscreen: true,
//     pauseAutoPlayOnHover: false
// });