document.addEventListener("DOMContentLoaded", function() {
    const sliders = document.querySelectorAll(".testimonial-slider");

    sliders.forEach((slider) => {
        let autoPlay = Number(slider.dataset.autoplay);
        if (autoPlay === 0) autoPlay = false;

        new Flickity(slider, {
            cellAlign: "left",
            contain: true,
            wrapAround: true,
            autoPlay: autoPlay,
            pageDots: false,
            fullscreen: true,
            pauseAutoPlayOnHover: false
        });
    });
});