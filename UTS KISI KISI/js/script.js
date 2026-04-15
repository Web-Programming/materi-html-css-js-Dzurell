document.addEventListener('DOMContentLoaded', () => {
    const mainNav = document.getElementById('mainNav');
    const counters = document.querySelectorAll('.counter');
    const contactForm = document.getElementById('contactForm');

    // 1. Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            mainNav.classList.add('scrolled', 'shadow-lg');
            mainNav.classList.remove('shadow-sm');
        } else {
            mainNav.classList.remove('scrolled', 'shadow-lg');
            mainNav.classList.add('shadow-sm');
        }
    });

    // 2. Counter Animation
    const observerOptions = {
        threshold: 0.5
    };

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-target');
                const speed = 200; // lower is slower

                const updateCount = () => {
                    const count = +counter.innerText;
                    const inc = target / speed;

                    if (count < target) {
                        counter.innerText = Math.ceil(count + inc);
                        setTimeout(updateCount, 1);
                    } else {
                        counter.innerText = target + (target === 50 ? '+' : target === 100 ? '%' : 'thn');
                    }
                };

                updateCount();
                observer.unobserve(counter);
            }
        });
    }, observerOptions);

    counters.forEach(counter => counterObserver.observe(counter));

    // 3. Smooth Scroll for Nav Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. Form Submission Mockup
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Basic UI Feedback
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            
            btn.disabled = true;
            btn.innerText = 'Mengirim...';
            
            setTimeout(() => {
                alert('Pesan Anda telah terkirim! Terima kasih telah menghubungi Nyawit Raharja.');
                contactForm.reset();
                btn.disabled = false;
                btn.innerText = originalText;
            }, 1500);
        });
    }
});
