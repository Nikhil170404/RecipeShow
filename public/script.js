document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Check if the user has a dark mode preference in localStorage
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        body.classList.add('dark-mode');
    }

    darkModeToggle.addEventListener('click', function() {
        // Toggle dark mode by toggling the 'dark-mode' class on the body
        body.classList.toggle('dark-mode');

        // Update the button text based on the mode
        const isDarkMode = body.classList.contains('dark-mode');
        darkModeToggle.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';

        // Store the user's preference in localStorage
        localStorage.setItem('darkMode', isDarkMode);
    });
});
