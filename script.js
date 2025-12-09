// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger);

// ===== LOADING SEQUENCE (FAST & SMOOTH) =====
window.addEventListener('load', () => {
    const tl = gsap.timeline();

    tl.to('.loader-bar::after', {
        duration: 0.5,
        width: '100%'
    })
    .to('.loader-wrapper', {
        y: '-100%',
        duration: 0.5,
        ease: 'power4.inOut'
    })
    .from('.hero-content > *', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
    }, "-=0.3")
    .from('.hero-visual', {
        x: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, "-=0.6");
});

// ===== BACKGROUND NEURON ANIMATION =====
const canvas = document.getElementById('neuron-canvas');
const ctx = canvas.getContext('2d');

let width, height;
let particles = [];

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}

class Particle {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
    }

    draw() {
        ctx.fillStyle = 'rgba(0, 243, 255, 0.5)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    particles = [];
    const particleCount = window.innerWidth < 768 ? 40 : 80;
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, width, height);
    
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(0, 243, 255, ${0.1 - distance/1500})`;
                ctx.lineWidth = 1;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
    requestAnimationFrame(animateParticles);
}

window.addEventListener('resize', () => { resize(); initParticles(); });
resize(); initParticles(); animateParticles();

// ===== SIDEBAR LOGIC =====
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebarClose = document.getElementById('sidebarClose');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');

function openSidebar() {
    sidebar.classList.add('active');
    sidebarOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSidebar() {
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

if (sidebarToggle) sidebarToggle.addEventListener('click', openSidebar);
if (sidebarClose) sidebarClose.addEventListener('click', closeSidebar);
if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeSidebar);


// ===== NEW: BEAUTIFUL SCROLL ANIMATIONS =====

// 1. Parallax Effect for Hero Image
// Makes the image move slower than the scroll, creating depth
gsap.to(".hero-visual", {
    yPercent: 20,
    ease: "none",
    scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true
    },
});

// 2. Floating Card Parallax (Moves opposite to image)
gsap.to(".floating-card", {
    yPercent: -30,
    ease: "none",
    scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true
    },
});

// 3. Navbar Glass Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(5, 5, 5, 0.95)';
        navbar.style.padding = '0.5rem 0';
    } else {
        navbar.style.background = 'rgba(5, 5, 5, 0.8)';
        navbar.style.padding = '1rem 0';
    }
});

// 4. Smart Section Title Reveals
// Automatically finds all section titles and fades them up
const headings = document.querySelectorAll('.section-title, .section-subtitle, h2');
headings.forEach(heading => {
    gsap.from(heading, {
        scrollTrigger: {
            trigger: heading,
            start: 'top 85%', // Trigger when top of element hits 85% of viewport height
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
});

// 5. Service Cards Staggered Entry
gsap.from('.service-card', {
    scrollTrigger: {
        trigger: '#services-preview',
        start: 'top 80%',
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2, // 0.2s delay between each card
    ease: 'back.out(1.7)' // Slight bounce effect
});

// 6. Tech Banner Reveal
gsap.from('.tech-banner .glass-card', {
    scrollTrigger: {
        trigger: '.tech-banner',
        start: 'top 85%',
    },
    scale: 0.9,
    opacity: 0,
    duration: 1,
    ease: 'power2.out'
});

// 7. Animated Number Counters
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    
    ScrollTrigger.create({
        trigger: counter,
        start: 'top 85%',
        once: true,
        onEnter: () => {
            gsap.to(counter, {
                innerText: target,
                duration: 1.5,
                snap: { innerText: 1 },
                ease: 'power1.inOut',
                onUpdate: function() {
                    counter.innerText = Math.ceil(this.targets()[0].innerText) + "+";
                }
            });
        }
    });
});