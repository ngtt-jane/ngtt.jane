//welcome
document.addEventListener("DOMContentLoaded", function () {
    var lines = [
        "hi! i'm jane nguyen!",
        "a ux/ui designer from houston :D"
    ];

    var currentLine = 0;
    var currentChar = 0;
    var speed = 35; // Speed of typing in milliseconds
    var delayBetweenLines = 500; // Delay before typing the next line

    function typeWriter() {
        if (currentLine < lines.length) {
            let lineElement = document.getElementById("line" + (currentLine + 1));
            lineElement.innerHTML += lines[currentLine][currentChar];
            currentChar++;

            if (currentChar === lines[currentLine].length) {
                currentLine++;
                currentChar = 0;
                setTimeout(typeWriter, delayBetweenLines);
            } else {
                setTimeout(typeWriter, speed);
            }
        }
    }

    typeWriter();
});

//effect
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.rubik, .museum, .matcha');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.5 // Adjust this value based on when you want the effect to trigger
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});

