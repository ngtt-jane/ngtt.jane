document.addEventListener("DOMContentLoaded", function () {
    // Define the lines of text and their corresponding element IDs
    var lines = [
        { id: "line1", text: "Hi there! I'm Jane Nguyen!" },
        { id: "line2", text: "A UI/UX designer from Houston" }
    ];

    var speed = 18; // Speed of typing in milliseconds
    var delayBetweenLines = 500; // Delay before typing the next line

    function typeWriter(lineIndex) {
        var currentLine = lines[lineIndex];
        var lineElement = document.getElementById(currentLine.id);
        var text = currentLine.text;
        var currentChar = 0;

        function typeNextChar() {
            if (currentChar < text.length) {
                lineElement.innerHTML += text[currentChar];
                currentChar++;
                setTimeout(typeNextChar, speed);
            } else if (lineIndex + 1 < lines.length) {
                // Wait for the current line to fully type before moving to the next line
                setTimeout(function () {
                    // Show the next line by changing display from none to block (or inline)
                    document.getElementById(lines[lineIndex + 1].id).style.display = "inline";
                    typeWriter(lineIndex + 1);
                }, delayBetweenLines);
            }
        }

        // Clear the line element's content before starting to type
        lineElement.innerHTML = '';
        lineElement.style.display = "inline"; // Ensure the line is visible before typing
        typeNextChar();
    }

    // Hide all lines initially
    lines.forEach(function (line) {
        document.getElementById(line.id).style.display = "none";
    });

    // Start typing the first line
    typeWriter(0);
});
