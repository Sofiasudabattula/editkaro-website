document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    const emailInput = document.getElementById('email');
    const successMessage = document.getElementById('successMessage');

    // You can add the logic to send the email to Google Sheets here.
    // For now, we will just show a success message.

    // Clear any previous success messages
    successMessage.textContent = '';

    // Display the success message
    successMessage.textContent = `Thank you for subscribing, ${emailInput.value}!`;
    emailInput.value = ''; // Clear the input field
});

// JavaScript for animated counters
const counters = document.querySelectorAll('.count');
const speed = 200; // Speed of the counting animation

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 10);
        } else {
            counter.innerText = target; // Ensure it doesn't exceed the target
        }
    };

    // Trigger counting when the element is in view
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                updateCount(); // Start counting when element is in view
                observer.unobserve(counter); // Stop observing after counting
            }
        });
    });

    observer.observe(counter); // Observe each counter
});


// Contact Form Handling
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("contact-email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    fetch("https://script.google.com/macros/s/YOUR_GOOGLE_SCRIPT_ID/exec", {
        method: "POST",
        body: JSON.stringify({ name, email, phone, message })
    })
    .then(response => response.text())
    .then(result => {
        alert("Message sent successfully!");
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
