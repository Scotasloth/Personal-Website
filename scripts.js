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
    }
});