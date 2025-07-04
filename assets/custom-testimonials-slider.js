// // Wait for the page content to be fully loaded
// document.addEventListener('DOMContentLoaded', function() {
//     // Select the carousel element by its correct class name
//     const sliderElement = document.querySelector('.testimonial-slider');

//     // Check if the slider element actually exists on the page
//     if (sliderElement) {
//         // Initialize Flickity with all the correct options
//         const flkty = new Flickity(sliderElement, {
//             // ✅ Aligns the first slide to the left edge of the carousel
//             cellAlign: 'left',

//             // ✅ Enables infinite looping
//             wrapAround: true,

//             // ✅ Enables autoplay (e.g., every 5 seconds). Set to false to disable.
//             autoPlay: 5000, // 5000 milliseconds = 5 seconds

//             // ✅ Ensures slides stay within the viewport, useful with cellAlign
//             contain: true,

//             // --- Other useful options ---
//             // Hides the navigation dots at the bottom
//             pageDots: false,

//             // Hides the previous/next arrows
//             prevNextButtons: false,

//             // Prevents autoplay from pausing when the user hovers over the carousel
//             pauseAutoPlayOnHover: false,

//             // Enables fullscreen button
//             fullscreen: true
//         });
//     }
// });







document.addEventListener('DOMContentLoaded', function() {
    // Select the correct slider element
    const sliderElement = document.querySelector('.testimonial-slider');

    if (sliderElement) {
        // Initialize Flickity with the specified configurations
        const flkty = new Flickity(sliderElement, {
            // Navigation dots should be disabled
            pageDots: false,
            // Autoplay enabled with a 5-second interval (5000 milliseconds)
            autoPlay: 5000,
            // Infinite loop
            wrapAround: true,
            // The slides or cells should be aligned to the left side on initialization.
            cellAlign: 'left',
            // Pause autoplay on hover (only relevant if autoPlay is enabled)
            pauseAutoPlayOnHover: false,
            // Group cells together if you want to show multiple at once
            // groupCells: true,
            // Free scroll for more fluid movement
            // freeScroll: true
        });
    }
});