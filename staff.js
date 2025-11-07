// Staff Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scroll to sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    document.querySelectorAll('.team-card, .value-card, .milestone-card').forEach(el => {
        observer.observe(el);
    });

    // Add animation class
    const style = document.createElement('style');
    style.textContent = `
        .team-card, .value-card, .milestone-card {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // Counter animation for stats
    const animateCounter = (element, target, duration = 2000) => {
        let current = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + (element.dataset.suffix || '');
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + (element.dataset.suffix || '');
            }
        }, 16);
    };

    // Animate counters when visible
    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                const target = parseInt(entry.target.textContent);
                entry.target.classList.add('counted');
                animateCounter(entry.target, target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-number').forEach(stat => {
        // Store suffix if exists
        const text = stat.textContent;
        if (text.includes('+')) {
            stat.dataset.suffix = '+';
            stat.textContent = text.replace('+', '');
        }
        statObserver.observe(stat);
    });

    // Badge hover effect
    document.querySelectorAll('.badge').forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        badge.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Team card interaction
    document.querySelectorAll('.team-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.borderTop = '4px solid #1e90ff';
        });
        card.addEventListener('mouseleave', function() {
            this.style.borderTop = '';
        });
    });

    // Milestone card stagger animation
    const milestoneCards = document.querySelectorAll('.milestone-card');
    milestoneCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });

    // Add parallax effect to CEO image
    const ceoImage = document.querySelector('.ceo-image');
    if (ceoImage) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const ceoSection = document.querySelector('.ceo-section');
            if (ceoSection) {
                const sectionTop = ceoSection.offsetTop;
                const sectionHeight = ceoSection.offsetHeight;
                if (scrolled > sectionTop - window.innerHeight && scrolled < sectionTop + sectionHeight) {
                    const parallax = (scrolled - sectionTop) * 0.05;
                    ceoImage.style.transform = `translateY(${parallax}px)`;
                }
            }
        });
    }

    // Tooltip for verified badges
    document.querySelectorAll('.verified-badge, .verified-icon').forEach(badge => {
        badge.title = 'Verified Professional';
        badge.style.cursor = 'help';
    });

    // Add ripple effect to buttons and cards
    function createRipple(event) {
        const button = event.currentTarget;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    // Add ripple CSS
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        .value-card, .team-card {
            position: relative;
            overflow: hidden;
        }
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(30, 144, 255, 0.3);
            transform: scale(0);
            animation: ripple-animation 0.6s ease-out;
            pointer-events: none;
        }
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);

    document.querySelectorAll('.value-card, .team-card').forEach(card => {
        card.addEventListener('click', createRipple);
    });

    // Add loading animation
    document.body.classList.add('page-loaded');
    const loadStyle = document.createElement('style');
    loadStyle.textContent = `
        body:not(.page-loaded) .page-header,
        body:not(.page-loaded) .ceo-section,
        body:not(.page-loaded) .team-section {
            opacity: 0;
        }
        .page-loaded .page-header,
        .page-loaded .ceo-section,
        .page-loaded .team-section {
            animation: fadeIn 0.8s ease-out forwards;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(loadStyle);

    // Dynamic year in footer if needed
    const currentYear = new Date().getFullYear();
    document.querySelectorAll('.footer').forEach(footer => {
        const yearText = footer.textContent;
        if (yearText.includes('2025') && currentYear !== 2025) {
            footer.innerHTML = footer.innerHTML.replace('2025', currentYear);
        }
    });

    // Add print functionality
    const printButton = document.createElement('button');
    printButton.innerHTML = '<span class="material-icons">print</span>';
    printButton.className = 'btn btn-primary position-fixed';
    printButton.style.cssText = 'bottom: 20px; right: 20px; z-index: 1000; border-radius: 50%; width: 56px; height: 56px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);';
    printButton.title = 'Print Team Page';
    printButton.onclick = () => window.print();
    document.body.appendChild(printButton);

    // Hide print button on mobile
    if (window.innerWidth < 768) {
        printButton.style.display = 'none';
    }

    // Scroll to top functionality
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '<span class="material-icons">arrow_upward</span>';
    scrollTopBtn.className = 'btn btn-secondary position-fixed';
    scrollTopBtn.style.cssText = 'bottom: 90px; right: 20px; z-index: 1000; border-radius: 50%; width: 56px; height: 56px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); display: none;';
    scrollTopBtn.title = 'Scroll to Top';
    scrollTopBtn.onclick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    document.body.appendChild(scrollTopBtn);

    // Show/hide scroll to top button
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });

    console.log('Staff page loaded successfully!');
});