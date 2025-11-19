
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Merci ! Votre message a été envoyé.");
    this.reset();
});
