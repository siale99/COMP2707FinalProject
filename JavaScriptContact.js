window.addEventListener('DOMContentLoaded', function() {
    // Get the contact form
    const form = document.getElementById('contactForm');

    // Add submit event listener
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        const formData = new FormData(form);

        // Perform form validation
        if (validateForm(formData)) {
            // Submit form data using AJAX
            const xhr = new XMLHttpRequest();
            xhr.open('POST', form.action, true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.onload = function() {
                if (xhr.status === 200) {
                    // Display success message
                    document.getElementById('statusMessage').textContent = 'Message sent successfully.';
                    // Reset form
                    form.reset();
                } else {
                    // Display error message
                    document.getElementById('statusMessage').textContent = 'Failed to send message. Please try again later.';
                }
            };
            xhr.send(new URLSearchParams(formData).toString());
        }
    });
});

function validateForm(formData) {
    // Validate form inputs
    if (!formData.get('name') || !formData.get('email') || !formData.get('message')) {
        // Display error message if any field is empty
        document.getElementById('statusMessage').textContent = 'Please fill in all fields.';
        return false;
    }
    return true;
}