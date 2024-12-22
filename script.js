// Get the menu toggle button and the nav-links container
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

// Add click event listener to toggle the 'active' class
menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active'); // Toggle the visibility of navbar links
});

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
});

// EmailJS integration for contact form
(function(){
    emailjs.init("YOUR_USER_ID"); // Initialize EmailJS with your User ID
})();

function sendEmail(event) {
    event.preventDefault(); // Prevent the default form submission

    // Send the form data using EmailJS
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', event.target)
        .then(function() {
            // Show success message on form submission
            document.getElementById('success-message').style.display = 'block';
            event.target.reset(); // Reset the form after successful submission
        }, function(error) {
            alert('Failed to send the message, please try again.'); // Show error message on failure
        });
}

// Add event listener to the contact form for submission
document.getElementById('contact-form').addEventListener('submit', sendEmail);
