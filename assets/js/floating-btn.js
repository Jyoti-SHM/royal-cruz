 // WhatsApp Button Interaction
 document.querySelector('.whatsapp-btn').addEventListener('click', function () {
    alert("Opening WhatsApp chat...");
    // window.location.href = "https://wa.me/YourNumber"; // Uncomment and add your number
});

// Email Button Interaction
document.querySelector('.email-btn').addEventListener('click', function () {
    alert("Opening email client...");
    window.location.href = "mailto:your.email@example.com"; // Replace with your email
});

// Call Button Interaction
document.querySelector('.call-btn').addEventListener('click', function () {
    alert("Dialing...");
    window.location.href = "tel:+1234567890"; // Replace with your number
});

// Booking Button Interaction
document.querySelector('.booking-btn').addEventListener('click', function () {
    alert("Redirecting to booking page...");
    // window.location.href = "your-booking-page-url"; // Uncomment and add your URL
});

// Virtual Tour Button Interaction
document.querySelector('.floating-btn').addEventListener('click', function () {
    document.getElementById('virtualTour').style.display = 'block';
});