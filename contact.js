// Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    // Form submission handler
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            service: document.getElementById('service').value,
            message: document.getElementById('message').value
        };

        // Validate form
        if (!validateForm(formData)) {
            showMessage('Please fill in all required fields correctly.', 'error');
            return;
        }

        // Create email body
        const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Service Needed: ${formData.service}

Message:
${formData.message}
        `.trim();

        // Create mailto link
        const mailtoLink = `mailto:chengeseth25@gmail.com?subject=Service Request: ${encodeURIComponent(formData.service)}&body=${encodeURIComponent(emailBody)}`;

        // Show success message
        showMessage('Redirecting to your email client...', 'success');

        // Redirect to mailto link after a short delay
        setTimeout(() => {
            window.location.href = mailtoLink;
            
            // Reset form after sending
            setTimeout(() => {
                contactForm.reset();
                showMessage('Thank you! Your message has been prepared. Please send the email from your email client.', 'success');
            }, 1000);
        }, 500);
    });

    // Form validation
    function validateForm(data) {
        // Check required fields
        if (!data.name || !data.email || !data.service || !data.message) {
            return false;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showMessage('Please enter a valid email address.', 'error');
            return false;
        }

        // Validate phone if provided
        if (data.phone && data.phone.trim() !== '') {
            const phoneRegex = /^[\d\s\+\-\(\)]+$/;
            if (!phoneRegex.test(data.phone)) {
                showMessage('Please enter a valid phone number.', 'error');
                return false;
            }
        }

        return true;
    }

    // Show form message
    function showMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';

        // Auto-hide success messages after 5 seconds
        if (type === 'success') {
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }
    }

    // Real-time validation for email field
    const emailInput = document.getElementById('email');
    emailInput.addEventListener('blur', function() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (this.value && !emailRegex.test(this.value)) {
            this.style.borderColor = '#dc3545';
        } else {
            this.style.borderColor = '#e0e0e0';
        }
    });

    // Real-time validation for phone field
    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', function() {
        // Allow only numbers, spaces, +, -, (, )
        this.value = this.value.replace(/[^\d\s\+\-\(\)]/g, '');
    });

    // Animate form elements on focus
    const formInputs = document.querySelectorAll('.form-control, .form-select');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
            this.parentElement.style.transition = 'transform 0.3s ease';
        });

        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    });

    // Add click event to social icons
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
                showMessage('Social media links will be updated soon!', 'error');
            }
        });
    });

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add animation to contact items on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe contact items
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        observer.observe(item);
    });

    // Observe form groups
    const formGroups = document.querySelectorAll('.form-floating');
    formGroups.forEach((group, index) => {
        setTimeout(() => {
            observer.observe(group);
        }, index * 50);
    });

    // Phone call click tracking
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log('Phone call initiated to:', this.getAttribute('href'));
        });
    });

    // Email click tracking
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log('Email initiated to:', this.getAttribute('href'));
        });
    });

    // Add hover effect to service select
    const serviceSelect = document.getElementById('service');
    serviceSelect.addEventListener('change', function() {
        if (this.value) {
            this.style.borderColor = 'var(--primary-color)';
            setTimeout(() => {
                this.style.borderColor = '#e0e0e0';
            }, 1000);
        }
    });

    // Character counter for message textarea
    const messageTextarea = document.getElementById('message');
    const maxLength = 1000;
    
    // Create character counter element
    const counterDiv = document.createElement('div');
    counterDiv.className = 'character-counter';
    counterDiv.style.cssText = 'text-align: right; margin-top: 5px; font-size: 14px; color: #6c757d;';
    messageTextarea.parentElement.parentElement.appendChild(counterDiv);
    
    messageTextarea.addEventListener('input', function() {
        const remaining = maxLength - this.value.length;
        counterDiv.textContent = `${this.value.length} / ${maxLength} characters`;
        
        if (remaining < 100) {
            counterDiv.style.color = '#dc3545';
        } else if (remaining < 200) {
            counterDiv.style.color = '#ffc107';
        } else {
            counterDiv.style.color = '#6c757d';
        }
        
        if (this.value.length > maxLength) {
            this.value = this.value.substring(0, maxLength);
        }
    });

    // Trigger initial character count
    messageTextarea.dispatchEvent(new Event('input'));

    // Add loading state to submit button
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    
    contactForm.addEventListener('submit', function() {
        submitButton.disabled = true;
        submitButton.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Processing...';
        
        setTimeout(() => {
            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonText;
        }, 2000);
    });

    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.5);
                left: ${x}px;
                top: ${y}px;
                pointer-events: none;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    console.log('Contact page initialized successfully!');
});
// Buy Me a Coffee - Copy Email Functionality
document.addEventListener('DOMContentLoaded', function() {
    const copyButtons = document.querySelectorAll('.copy-btn');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const emailContainer = document.getElementById(targetId);
            const email = emailContainer.getAttribute('data-email');
            
            // Copy to clipboard
            navigator.clipboard.writeText(email).then(() => {
                // Visual feedback
                const originalIcon = this.innerHTML;
                this.innerHTML = '<span class="material-icons">check</span>';
                this.classList.add('copied');
                
                // Create toast notification
                showToast('Email copied to clipboard!');
                
                // Reset button after 2 seconds
                setTimeout(() => {
                    this.innerHTML = originalIcon;
                    this.classList.remove('copied');
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy:', err);
                showToast('Failed to copy email', 'error');
            });
        });
    });
    
    // Toast notification function
    function showToast(message, type = 'success') {
        // Remove existing toast if any
        const existingToast = document.querySelector('.copy-toast');
        if (existingToast) {
            existingToast.remove();
        }
        
        // Create toast element
        const toast = document.createElement('div');
        toast.className = `copy-toast ${type}`;
        toast.textContent = message;
        document.body.appendChild(toast);
        
        // Trigger animation
        setTimeout(() => toast.classList.add('show'), 10);
        
        // Remove toast after 3 seconds
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
});