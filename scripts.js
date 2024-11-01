document.addEventListener("DOMContentLoaded", () => {
    // Check for the dropdown button and its content
    const dropDownButton = document.querySelector('.dropbtn');
    const dropDownContent = document.getElementById('dropdown-content');

    // Set up dropdown functionality if the elements exist
    if (dropDownButton && dropDownContent) {
        dropDownButton.addEventListener('click', () => {
            dropDownContent.classList.toggle('show'); // Toggle dropdown visibility
        });

        // Close dropdown when clicking outside of it
        window.onclick = function(event) {
            if (!event.target.matches('.dropbtn')) {
                if (dropDownContent.classList.contains('show')) {
                    dropDownContent.classList.remove('show'); // Hide dropdown
                }
            }
        };
    }

    // Select all lines and initialize their movement
    const lines = document.querySelectorAll('.lines');
    lines.forEach(line => {
        updateLinePosition(line); // Set an initial random position
        moveLine(line); // Start continuous movement
    });

    // Function to update line's position to a random location
    function updateLinePosition(line) {
        const randomX = Math.random() * (window.innerWidth - line.offsetWidth);
        const randomY = Math.random() * (window.innerHeight - line.offsetHeight);
        
        line.style.left = `${randomX}px`; // Set initial X position
        line.style.top = `${randomY}px`; // Set initial Y position
        
        // Generate a new random target position for the line
        line.dataset.targetX = Math.random() * (window.innerWidth - line.offsetWidth);
        line.dataset.targetY = Math.random() * (window.innerHeight - line.offsetHeight);
    }

    // Function to move the line towards its target position
    function moveLine(line) {
        const speed = 0.001; // Adjust this value for slower movement
        const targetX = parseFloat(line.dataset.targetX);
        const targetY = parseFloat(line.dataset.targetY);

        // Get the current position of the line
        const currentX = parseFloat(line.style.left) || 0;
        const currentY = parseFloat(line.style.top) || 0;

        // Move towards the target position
        const newX = currentX + (targetX - currentX) * speed;
        const newY = currentY + (targetY - currentY) * speed;

        // Update the line's position
        line.style.left = `${newX}px`;
        line.style.top = `${newY}px`;

        // Check if the line is close enough to the target position
        if (Math.abs(newX - targetX) < 1 && Math.abs(newY - targetY) < 1) {
            updateLinePosition(line); // Set a new random target position
        }

        // Request the next animation frame to continue moving the line
        requestAnimationFrame(() => moveLine(line));
    }
});