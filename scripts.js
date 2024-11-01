document.addEventListener("DOMContentLoaded", () => {
    // Check for the dropdown button
    const dropDownButton = document.querySelector('.dropbtn');
    const dropDownContent = document.getElementById('dropdown-content');

    if (dropDownButton && dropDownContent) {
        dropDownButton.addEventListener('click', () => {
            dropDownContent.classList.toggle('show');
        });

        window.onclick = function(event) {
            if (!event.target.matches('.dropbtn')) {
                if (dropDownContent.classList.contains('show')) {
                    dropDownContent.classList.remove('show');
                }
            }
        };
    }

    // Add the moving lines functionality
    const lines = document.querySelectorAll('.lines');

    lines.forEach(line => {
        // Set initial position
        updateLinePosition(line);

        // Create a random movement effect
        setInterval(() => {
            updateLinePosition(line);
        }, 2000); // Update position every 2 seconds
    });

    function updateLinePosition(line) {
        const randomX = Math.random() * (window.innerWidth - line.offsetWidth);
        const randomY = Math.random() * (window.innerHeight - line.offsetHeight);
        line.style.left = `${randomX}px`;
        line.style.top = `${randomY}px`;
    }
});