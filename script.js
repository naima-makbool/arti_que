// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
if (toggle && nav) {
    toggle.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(isOpen));
    });
}

// Smooth scroll for same-page anchors
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            history.pushState(null, '', link.getAttribute('href'));
        }
    });
});

// Intersection-based subtle reveal animations
const reveal = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transform = 'translateY(0)';
            entry.target.style.opacity = '1';
            reveal.unobserve(entry.target);
        }
    });
}, { threshold: 0.08 });

document.querySelectorAll('.card, .masonry img, .contact-card').forEach(el => {
    el.style.transform = 'translateY(14px)';
    el.style.opacity = '0';
    el.style.transition = 'all .5s ease';
    reveal.observe(el);
});

// Year in footer
const year = document.getElementById('year');
if (year) {
    year.textContent = String(new Date().getFullYear());
}


