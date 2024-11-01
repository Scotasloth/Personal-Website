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

    const lines = document.querySelectorAll('.lines');

    lines.forEach(line => {
        // Set an initial random position
        updateLinePosition(line);
        // Start continuous movement
        moveLine(line);
    });

    function updateLinePosition(line) {
        const randomX = Math.random() * (window.innerWidth - line.offsetWidth);
        const randomY = Math.random() * (window.innerHeight - line.offsetHeight);
        
        line.style.left = `${randomX}px`; // Set initial position
        line.style.top = `${randomY}px`;
        
        // Generate a new random target position
        line.dataset.targetX = Math.random() * (window.innerWidth - line.offsetWidth);
        line.dataset.targetY = Math.random() * (window.innerHeight - line.offsetHeight);
    }

    function moveLine(line) {
        const speed = 0.001; // Adjust this value for slower movement
        const targetX = parseFloat(line.dataset.targetX);
        const targetY = parseFloat(line.dataset.targetY);

        // Get the current position
        const currentX = parseFloat(line.style.left) || 0;
        const currentY = parseFloat(line.style.top) || 0;

        // Move towards the target position
        const newX = currentX + (targetX - currentX) * speed;
        const newY = currentY + (targetY - currentY) * speed;

        // Update the line's position
        line.style.left = `${newX}px`;
        line.style.top = `${newY}px`;

        // Check if we are close enough to the target, if so, update the target position
        if (Math.abs(newX - targetX) < 1 && Math.abs(newY - targetY) < 1) {
            updateLinePosition(line); // Set a new random target position
        }

        requestAnimationFrame(() => moveLine(line)); // Keep moving the line
    }
});