document.addEventListener('DOMContentLoaded', () => {
    loadContent('home'); // Load home content by default
    window.onscroll = scrollFunction;
});

/** Load Page Content Dynamically **/
function loadContent(page) {
    fetch(`/${page}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Page not found: ${page}`);
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('main-content').innerHTML = html;
            if (page === 'contact') {
                attachFormValidation();
            }
        })
        .catch(error => {
            console.error('Error loading content:', error);
            document.getElementById('main-content').innerHTML = "<p class='text-danger'>Error loading page. Please try again later.</p>";
        });
}

/** Scroll-to-Top Button Visibility **/
function scrollFunction() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    scrollToTopBtn.style.display = (document.documentElement.scrollTop > 20) ? "block" : "none";
}

/** Smooth Scroll to Top **/
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/** Attach Form Validation for Contact Page **/
function attachFormValidation() {
    const form = document.querySelector('form');
    
    if (!form) return; // Prevent errors if form doesn't exist
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !message) {
            alert('Please fill out all fields.');
            return;
        }

        // Simple Email Validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        alert('Form submitted successfully!');
        form.reset();
    });
}
