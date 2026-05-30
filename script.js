document.addEventListener('DOMContentLoaded', function() {

    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            navLinks.classList.toggle('active');
        });
    }

    document.addEventListener('click', function(event) {
        if (mobileMenuBtn && !mobileMenuBtn.contains(event.target) && 
            navLinks && !navLinks.contains(event.target)) {
            navLinks.classList.remove('active');
            if (mobileMenuBtn) {
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            }
        }
    });

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navItems = document.querySelectorAll('.nav-links a');
    
    navItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href === currentPage) {
            item.classList.add('active');
        } else if (currentPage === 'index.html' && href === 'index.html') {
            item.classList.add('active');
        }
    });
});

console.log('%c🚀 Welcome to Yeoh Huey Ting\'s Portfolio!', 'color: #FF8BA7; font-size: 16px; font-weight: bold;');

document.addEventListener('DOMContentLoaded', function() {
    function initGallery(hobbyIndex) {
        const slides = document.querySelectorAll(`.gallery-slider[data-hobby="${hobbyIndex}"] .gallery-slide`);
        const dots = document.querySelectorAll(`.gallery-dots[data-hobby="${hobbyIndex}"] .gallery-dot`);
        const prevBtn = document.querySelector(`.gallery-prev[data-hobby="${hobbyIndex}"]`);
        const nextBtn = document.querySelector(`.gallery-next[data-hobby="${hobbyIndex}"]`);
        let currentSlide = 0;

        function showSlide(index) {
            if (index < 0) index = slides.length - 1;
            if (index >= slides.length) index = 0;
            
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            slides[index].classList.add('active');
            dots[index].classList.add('active');
            currentSlide = index;
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        function prevSlide() {
            showSlide(currentSlide - 1);
        }

        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', prevSlide);
            nextBtn.addEventListener('click', nextSlide);
        }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => showSlide(index));
        });
    }

    for (let i = 0; i <= 2; i++) {
        initGallery(i);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !message) {
                formMessage.textContent = '❌ Please fill in all fields';
                formMessage.className = 'form-message error';
                return;
            }
            
            if (!email.includes('@') || !email.includes('.')) {
                formMessage.textContent = '❌ Please enter a valid email address';
                formMessage.className = 'form-message error';
                return;
            }
            
            const subject = `Portfolio Message from ${name}`;
            const body = `Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${encodeURIComponent(message)}`;
            
            window.location.href = `mailto:yeohbell@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
            
            formMessage.textContent = '✨ Opening your email app... Thank you for reaching out!';
            formMessage.className = 'form-message success';
            contactForm.reset();
            
            setTimeout(() => {
                formMessage.textContent = '';
                formMessage.className = 'form-message';
            }, 4000);
        });
    }
});
