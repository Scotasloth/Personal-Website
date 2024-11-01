document.addEventListener("DOMContentLoaded", () => {
    const dropDownButton = document.querySelector('.dropbtn');
    const dropDownContent = document.getElementById('dropdown-content');

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

    // Add the moving lines functionality
    const lines = document.querySelectorAll('.lines');

    lines.forEach(line => {
        const randomDuration = Math.random() * 5 + 5; // Duration between 5s to 10s
        line.style.animationDuration = `${randomDuration}s`;

        // Set initial position
        updateLinePosition(line);

        // Create a random movement effect
        setInterval(() => {
            updateLinePosition(line);
        }, randomDuration * 1000); // Update position every duration seconds
    });

    function updateLinePosition(line) {
        const randomX = Math.random() * (window.innerWidth - line.offsetWidth); // Adjust for line width
        const randomY = Math.random() * (window.innerHeight - line.offsetHeight); // Adjust for line height
        line.style.left = `${randomX}px`;
        line.style.top = `${randomY}px`;
    }
});