// Handle the contact form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Display a thank-you message
    const message = document.getElementById('formMessage');
    message.classList.remove('hidden');
    setTimeout(() => {
        message.classList.add('hidden');
    }, 3000); // Hide the message after 3 seconds
});

[ ]