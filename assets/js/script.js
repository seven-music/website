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
    // Stop scroll button before footer
    const footer = document.querySelector('.material-footer');
    if (footer) {
        const footerTop = footer.getBoundingClientRect().top + scrollTop;
        const windowHeight = window.innerHeight;
        const scrollButtonHeight = 56; // FAB height
        const bottomMargin = 30; // Original bottom margin
        
        if (scrollTop + windowHeight > footerTop) {
            // Calculate how much to move up
            const overlap = (scrollTop + windowHeight) - footerTop;
            scrollToTopBtn.style.bottom = `${bottomMargin + overlap}px`;
        } else {
            scrollToTopBtn.style.bottom = '30px';
        }
    }
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
    './assets/brand/Logo.svg',
    './assets/brand/Record.svg',
    './assets/brand/Text.svg'
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

// ===================================
// Instagram Feed DSGVO Consent
// ===================================

const loadInstagramBtn = document.getElementById('loadInstagramFeed');
const instagramSection = document.getElementById('instagram');

if (loadInstagramBtn && instagramSection) {
    loadInstagramBtn.addEventListener('click', () => {
        // Add class to hide preview and show feed
        instagramSection.classList.add('instagram-feed-loaded');
        
        // Store consent in localStorage
        localStorage.setItem('instagramFeedConsent', 'true');
        
        // Optional: Track consent for analytics
        console.log('Instagram Feed consent given');
        
        // Show success message briefly
        const feedContainer = document.getElementById('instagramFeedContainer');
        if (feedContainer) {
            feedContainer.style.display = 'block';
            
            // Smooth scroll to feed
            setTimeout(() => {
                feedContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 300);
        }
    });
    
    // Check if user already gave consent
    if (localStorage.getItem('instagramFeedConsent') === 'true') {
        instagramSection.classList.add('instagram-feed-loaded');
        const feedContainer = document.getElementById('instagramFeedContainer');
        if (feedContainer) {
            feedContainer.style.display = 'block';

// ===================================
// Lightbox2 Configuration
// ===================================

// Configure Lightbox2 options
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'albumLabel': 'Bild %1 von %2',
    'fadeDuration': 300,
    'imageFadeDuration': 300,
    'disableScrolling': true
});

// Custom styling for Lightbox2 to match SEVEN music theme
const lightboxStyle = document.createElement('style');
lightboxStyle.textContent = `
    .lightbox .lb-image {
        border-radius: 8px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
    }
    
    .lightbox .lb-dataContainer {
        background: linear-gradient(135deg, #1a1a1a 0%, #333333 100%);
        border-radius: 0 0 8px 8px;
    }
    
    .lightbox .lb-data .lb-caption {
        color: #EDAC00;
        font-family: 'Roboto', sans-serif;
        font-weight: 600;
        font-size: 1.1rem;
    }
    
    .lightbox .lb-data .lb-number {
        color: #FFFFFF;
    }
    
    .lightbox .lb-nav a.lb-prev,
    .lightbox .lb-nav a.lb-next {
        opacity: 1;
    }
    
    .lightbox .lb-nav a.lb-prev:hover,
    .lightbox .lb-nav a.lb-next:hover {
        opacity: 1;
        filter: brightness(1.2);
    }
    
    .lb-cancel {
        background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBmaWxsPSIjRURBQzAwIiBkPSJNMTYgMEMxMiAwIDggMiA0IDZDMCAxMCAwIDE0IDAgMTZjMCAyIDAgNiA0IDEwYzQgNCA4IDYgMTIgNnM4LTIgMTItNmM0LTQgNC04IDQtMTBzMC02LTQtMTBjLTQtNC04LTYtMTItNnptNiAyMGwtMiAyLTQtNC00IDQtMi0yIDQtNC00LTQgMi0yIDQgNCA0LTQgMiAyLTQgNCA0IDR6Ii8+PC9zdmc+) no-repeat;
    }
`;
document.head.appendChild(lightboxStyle);
        }
    }
}
console.log('%cInterested in our music? Check out our latest album!', 'font-size: 12px; color: #999;');
// ===================================
// Next Gig Loader
// ===================================

/**
 * Load and display the next upcoming public gig from Dropbox JSON
 */
async function loadNextGig() {
    const GIGS_URL = 'assets/data/gigs.json';
    
    try {
        const response = await fetch(GIGS_URL);
        if (!response.ok) {
            throw new Error('Failed to load gigs');
        }
        
        const data = await response.json();
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Reset time to start of day
        
        // Filter: only public gigs, only future dates
        const upcomingGigs = data.gigs
            .filter(gig => {
                if (gig.type !== 'public') return false;
                const gigDate = new Date(gig.date);
                return gigDate >= today;
            })
            .sort((a, b) => new Date(a.date) - new Date(b.date));
        
        // If no upcoming gigs, hide section
        if (upcomingGigs.length === 0) {
            document.getElementById('next-gig').style.display = 'none';
            return;
        }
        
        // Display the next gig (first in sorted array)
        const nextGig = upcomingGigs[0];
        displayNextGig(nextGig);
        
    } catch (error) {
        console.error('Error loading gigs:', error);
        // Hide section on error
        document.getElementById('next-gig').style.display = 'none';
    }
}

/**
 * Display gig information in the DOM
 */
function displayNextGig(gig) {
    // Format date in German
    const gigDate = new Date(gig.date);
    const dateOptions = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const formattedDate = gigDate.toLocaleDateString('de-DE', dateOptions);
    
    // Update DOM elements
    document.getElementById('gig-date').textContent = formattedDate;
    document.getElementById('gig-time').textContent = gig.time ? `${gig.time} Uhr` : '';
    document.getElementById('gig-venue').textContent = gig.venue || '';
    document.getElementById('gig-location').textContent = gig.location || '';
    document.getElementById('gig-description').textContent = gig.description || '';
    
    // Handle optional links
    const actionsDiv = document.getElementById('gig-actions');
    const ticketLink = document.getElementById('gig-ticket-link');
    const infoLink = document.getElementById('gig-info-link');
    
    let hasActions = false;
    
    if (gig.ticketUrl && gig.ticketUrl.trim() !== '') {
        ticketLink.href = gig.ticketUrl;
        ticketLink.style.display = 'inline-flex';
        hasActions = true;
    } else {
        ticketLink.style.display = 'none';
    }
    
    if (gig.infoUrl && gig.infoUrl.trim() !== '') {
        infoLink.href = gig.infoUrl;
        infoLink.style.display = 'inline-flex';
        hasActions = true;
    } else {
        infoLink.style.display = 'none';
    }
    
    actionsDiv.style.display = hasActions ? 'flex' : 'none';
    
    // Show the section
    document.getElementById('next-gig').style.display = 'block';
}

// Load gigs when DOM is ready
document.addEventListener('DOMContentLoaded', loadNextGig);
