document.addEventListener('DOMContentLoaded', () => {
    // 1. Reveal Animations on Scroll
    const observerOptions = {
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // 2. Typewriter Effect
    const typewriterElement = document.querySelector('.about');
    const textToType = "I am a Front End Developer";
    let index = 0;

    function typeWriter() {
        if (index < textToType.length) {
            typewriterElement.innerHTML = textToType.substring(0, index + 1) + '<span class="typewriter-cursor"></span>';
            index++;
            setTimeout(typeWriter, 100);
        } else {
            typewriterElement.innerHTML = textToType; // Remove cursor at end
        }
    }

    // Start typewriter after a small delay
    setTimeout(typeWriter, 1000);

    // 3. Navbar Scroll Effect
    const nav = document.querySelector('.navBar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // 4. Active Link Highlighting
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navBarLinks');

    window.addEventListener('scroll', () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // 5. Smooth Scroll for Nav Links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
