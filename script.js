// Typed Text
document.addEventListener('DOMContentLoaded', () => {
    const typed = new Typed('.typing-text', {
        strings: ['Web Manager', 'Security Enthusiast', 'Computer Systems Engineer'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true,
    });
});

// About Section Observer
document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector(".about");
    if (aboutSection) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("fade-in");
                    }
                });
            },
            { threshold: 0.5 }
        );
        observer.observe(aboutSection);
    }
});

// button functionality
const EMAIL = "asadullah.kashif01@gmail.com";
const WHATSAPP = "+923042507588";

// Hire Me >> email
document.getElementById("hireMeBtn").addEventListener("click", function (e) {
    e.preventDefault();
    window.open(`https://mail.google.com/mail/?view=cm&to=${EMAIL}&su=Hire Me`, "_blank");
});


// Contact Me >> whatsapp
document.getElementById("contactMeBtn").addEventListener("click", function (e) {
    e.preventDefault();
    const number = WHATSAPP.replace(/\D/g, "");
    window.open(`https://wa.me/${number}`, "_blank");
});

// Email Me >> email
document.getElementById("emailMeBtn").addEventListener("click", function () {
    window.open(`https://mail.google.com/mail/?view=cm&to=${EMAIL}&su=Contact`, "_blank");
});

// WhatsApp Me >> whatsapp
document.getElementById("whatsappMeBtn").addEventListener("click", function () {
    const number = WHATSAPP.replace(/\D/g, "");
    window.open(`https://wa.me/${number}`, "_blank");
});










