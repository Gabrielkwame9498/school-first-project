document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Functionality ---
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('nav-open');
        });
    }

    // --- Search Functionality ---
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const mainContent = document.getElementById('main-content');
    
    // Store the original content to revert back to
    const originalContent = mainContent.innerHTML;

    const performSearch = (event) => {
        event.preventDefault(); // Prevent page from reloading
        const query = searchInput.value.trim().toLowerCase();

        // First, clear any previous highlights by restoring original content
        mainContent.innerHTML = originalContent;

        if (query === '') {
            return; // If search is empty, do nothing
        }

        // Create a regular expression to find all instances of the query
        const regex = new RegExp(query, 'gi'); // 'g' for global, 'i' for case-insensitive

        // Get the current HTML of the main content area
        let newContent = mainContent.innerHTML;

        // Replace every match with a highlighted version
        newContent = newContent.replace(regex, (match) => `<mark class="highlight">${match}</mark>`);
        
        // Update the content on the page
        mainContent.innerHTML = newContent;
    };

    if (searchForm) {
        searchForm.addEventListener('submit', performSearch);
    }
});