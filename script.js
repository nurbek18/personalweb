document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const formData = new FormData(this);

  // Send form data to Formspree
  fetch('https://formspree.io/f/mqkrnjea', {
      method: 'POST',
      body: formData,
      headers: {
          'Accept': 'application/json'
      }
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json();
  })
  .then(data => {
      console.log('Form submission successful:', data);
      alert('Thank you for your message!');
  })
  .catch(error => {
      console.error('Error:', error);
      alert('An error occurred while submitting the form. Please try again later 亲 *-*:');
  });

  // Clear the form inputs
  this.reset();
});
