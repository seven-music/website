/**
 * SEVEN music Website
 * Dynamic Header and Scroll Effects
 */

// ===================================
// Dynamic Header on Scroll
// ===================================

const dynamicHeader = document.getElementById('dynamicHeader');
const scrollToTopBtn = document.getElementById('scrollToTop');
let lastScrollTop = 0;
const scrollThreshold = 200; // Pixel threshold to show header

// Handle scroll events
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Show/hide dynamic header based on scroll position
    if (scrollTop > scrollThreshold) {
        dynamicHeader.classList.add('scrolled');
    } else {
        dynamicHeader.classList.remove('scrolled');
    }
    
    // Show/hide scroll to top button
    if (scrollTop > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
    
    // Hide scroll indicator when scrolling
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        if (scrollTop > 100) {
            scrollIndicator.classList.add('hidden');
        } else {
            scrollIndicator.classList.remove('hidden');
        }
    }
    
    lastScrollTop = scrollTop;
});

// ===================================
// Scroll to Top Button
// ===================================

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===================================
// Smooth Scroll for Navigation Links
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerOffset = 80; // Offset for fixed header
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        }
    });
});

// ===================================
// Intersection Observer for Animations
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards for fade-in animation
document.querySelectorAll('.material-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// ===================================
// Active Navigation Link Highlighting
// ===================================

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===================================
// Hero Logo Animation on Load
// ===================================

window.addEventListener('load', () => {
    const heroLogo = document.getElementById('heroLogo');
    if (heroLogo) {
        heroLogo.style.opacity = '0';
        heroLogo.style.transform = 'scale(0.8)';
        
        setTimeout(() => {
            heroLogo.style.transition = 'opacity 1.2s ease, transform 1.2s ease';
            heroLogo.style.opacity = '1';
            heroLogo.style.transform = 'scale(1)';
        }, 100);
    }
});

// ===================================
// Parallax Effect for Hero Section - DISABLED
// ===================================

// Parallax effect removed for smoother transition to content sections

// ===================================
// Form Validation and Submission
// ===================================

const contactForm = document.querySelector('#contact form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        
        // Here you would typically send the data to a server
        // For now, we'll just show a success message
        
        // Show success message (you can customize this)
        alert('Vielen Dank für deine Nachricht! Wir melden uns bald bei dir.');
        
        // Reset form
        contactForm.reset();
    });
}

// ===================================
// Mobile Menu Close on Outside Click
// ===================================

document.addEventListener('click', (e) => {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navbarToggler = document.querySelector('.navbar-toggler');
    
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        if (!navbarCollapse.contains(e.target) && !navbarToggler.contains(e.target)) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
        }
    }
});

// ===================================
// Preload Images
// ===================================

const imagesToPreload = [
    'Logo.svg',
    'Record.svg',
    'Text.svg'
];

imagesToPreload.forEach(src => {
    const img = new Image();
    img.src = src;
});

// ===================================
// Console Easter Egg
// ===================================

console.log('%c🎸 SEVEN music Website 🎸', 'font-size: 20px; font-weight: bold; color: #EDAC00;');
console.log('%cDeveloped with ❤️ and 🎵', 'font-size: 14px; color: #666;');
console.log('%cInterested in our music? Check out our latest album!', 'font-size: 12px; color: #999;');