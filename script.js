// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Show success message (in a real app, you would send this data to a server)
        alert('Thank you for your interest! We will contact you soon.');
        this.reset();
    });
}

// Add scroll-based animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.feature-card, .step, .pricing-card').forEach(el => {
    observer.observe(el);
});

// Add mobile menu functionality
const createMobileMenu = () => {
    const nav = document.querySelector('nav .container');
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.classList.add('mobile-menu-button');
    mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
    
    const mobileMenu = document.createElement('div');
    mobileMenu.classList.add('mobile-menu');
    mobileMenu.innerHTML = document.querySelector('.nav-links').innerHTML;
    
    nav.appendChild(mobileMenuButton);
    document.body.appendChild(mobileMenu);
    
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        mobileMenuButton.classList.toggle('active');
    });
};

// Initialize mobile menu on smaller screens
if (window.innerWidth <= 768) {
    createMobileMenu();
}

// Add CSS for mobile menu
const style = document.createElement('style');
style.textContent = `
    .mobile-menu-button {
        display: none;
        background: none;
        border: none;
        font-size: 1.5rem;
        color: var(--text-color);
        cursor: pointer;
    }
    
    .mobile-menu {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: var(--background);
        padding: 2rem;
        z-index: 1000;
    }
    
    .mobile-menu.active {
        display: block;
    }
    
    .mobile-menu ul {
        list-style: none;
        padding: 0;
    }
    
    .mobile-menu li {
        margin: 1rem 0;
    }
    
    .mobile-menu a {
        font-size: 1.25rem;
        color: var(--text-color);
        text-decoration: none;
    }
    
    @media (max-width: 768px) {
        .mobile-menu-button {
            display: block;
        }
    }
`;

document.head.appendChild(style); 