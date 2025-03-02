// Dark Mode Toggle Button
const toggleButton = document.getElementById('darkModeToggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Smooth Scroll for Footer Links
const footerLinks = document.querySelectorAll('.footer-link');
footerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Dynamic Year in Footer (for copyright)
const year = new Date().getFullYear();
document.getElementById('footerYear').textContent = year;








const contactButton = document.getElementById('contactButton');
const contactDetails = document.getElementById('contactDetails');

contactButton.addEventListener('click', function() {
    if (contactDetails.style.display === "none") {
        contactDetails.style.display = "block";
    } else {
        contactDetails.style.display = "none";
    }
});
