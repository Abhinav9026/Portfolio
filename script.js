function resetAnimation(element) {
    element.style.animation = 'none';
    element.offsetHeight; /* Trigger reflow */
    element.style.animation = null;
}

// Add event listeners for scroll or navigation clicks
window.addEventListener('scroll', () => {
    const heroSection = document.querySelector('.hero');
    const heroTop = heroSection.getBoundingClientRect().top;

    // Trigger the animation reset when hero section is near the top of the viewport
    if (heroTop <= window.innerHeight && heroTop >= 0) {
        resetAnimation(heroSection);
        document.querySelectorAll('.hero .content, .hero h2, .hero h1, .hero p, .download-cv, .social-links, .profile-pic').forEach(resetAnimation);
    }
});

// Optional: If using navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Scroll to target element and reset animation
        targetElement.scrollIntoView({ behavior: 'smooth' });
        resetAnimation(targetElement);

        // Reset animation for hero section specifically if it's being targeted
        if (targetId === '#home') {
            document.querySelectorAll('.hero .content, .hero h2, .hero h1, .hero p, .download-cv, .social-links, .profile-pic').forEach(resetAnimation);
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const h2Element = document.querySelector('.hero h2');
    const texts = ["Aspiring Data Analyst", "Aspiring Software Engineer"];
    let index = 0;

    function changeText() {
        h2Element.textContent = texts[index];
        index = (index + 1) % texts.length;
    }

    setInterval(changeText, 3000); // Change text every 2 seconds
});

function toggleDetails(element) {
    element.classList.toggle("active");
}

