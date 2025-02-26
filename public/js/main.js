document.addEventListener('DOMContentLoaded', () => {
      loadContent('home'); // Load home content by default
      window.onscroll = function() { scrollFunction() };
  });
  
  function loadContent(page) {
      fetch(`/${page}`)
          .then(response => response.text())
          .then(html => {
              document.getElementById('main-content').innerHTML = html;
              if (page === 'contact') {
                  attachFormValidation();
              }
          })
          .catch(error => console.error('Error loading content:', error));
  }
  
  function scrollFunction() {
      const scrollToTopBtn = document.getElementById('scrollToTopBtn');
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          scrollToTopBtn.style.display = "block";
      } else {
          scrollToTopBtn.style.display = "none";
      }
  }
  
  function scrollToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  }
  
  function attachFormValidation() {
      const form = document.querySelector('form');
      form.addEventListener('submit', function(event) {
          event.preventDefault();
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const message = document.getElementById('message').value;
          if (name && email && message) {
              alert('Form submitted successfully!');
              form.reset();
          } else {
              alert('Please fill out all fields.');
          }
      });
  }
  