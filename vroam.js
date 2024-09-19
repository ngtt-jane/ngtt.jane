document.addEventListener('DOMContentLoaded', function () {
    
    // List of images
    const images = [
        'assets/final-homepage.svg',
        'assets/final-map.svg',
        'assets/final-rio.svg',
        'assets/final-homepage2.svg',
        'assets/final-profile.svg',
        'assets/final-settings.svg'
    ];

    // Track the current image index
    let currentIndex = 0;

    // Select elements
    const finalImage = document.querySelector('.final-image');
    const rightButton = document.querySelector('.right');
    const leftButton = document.querySelector('.left');

    // Function to update the image source with a smooth transition
    function updateImage(index) {
        finalImage.classList.add('hidden'); // Fade out the current image

        setTimeout(() => {
            finalImage.src = images[index]; // Change the image source
            finalImage.classList.remove('hidden'); // Fade in the new image
        }, 200); // Delay matches the CSS transition duration
    }

    // Right button click event
    rightButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage(currentIndex);
    });

    // Left button click event
    leftButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage(currentIndex);
    });


});

