const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
});

const form = document.querySelector('.contact-form');
const thankYouMessage = document.getElementById('thank-you');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from reloading the page

    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            form.style.display = 'none'; // Hides the form
            thankYouMessage.style.display = 'block'; // Shows the thank you message
            
            // Set a timer to show the form again after 10 seconds
            setTimeout(() => {
                thankYouMessage.style.display = 'none'; // Hides the thank you message
                form.style.display = 'block'; // Shows the form again
            }, 10000); // 10 seconds in milliseconds
        } else {
            alert("There was an error submitting your message. Please try again.");
        }
    }).catch(error => {
        alert("There was an error submitting your message. Please try again.");
    });
});


document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    console.log("Form Submitted:", { name, email, subject, message });
});

document.addEventListener("DOMContentLoaded", function () {
    const overlayContainer = document.querySelector(".overlay-container");

    // Listen for the end of the animation
    overlayContainer.addEventListener("animationend", function () {
        overlayContainer.style.display = "none"; // Hide the overlay
    });
});
