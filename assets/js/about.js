/* About Page JavaScript */

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing components...');
    
    // Initialize carousel with delay to ensure DOM is fully rendered
    setTimeout(function() {
        initCarousel();
    }, 100);
    
    // Initialize particles
    initParticles();
    
    // Initialize typed.js
    initTyped();
});

// Photo carousel functionality
let currentSlideIndex = 0;
let slides = null;
let indicators = null;
let autoplayInterval = null;

function initCarousel() {
    console.log('Initializing carousel...');
    
    slides = document.querySelectorAll('.carousel-slide');
    indicators = document.querySelectorAll('.indicator');
    
    console.log('Found slides:', slides.length);
    console.log('Found indicators:', indicators.length);
    
    if (slides.length === 0) {
        console.error('No carousel slides found');
        return;
    }
    
    // Ensure first slide is active
    showSlide(0);
    
    // Start auto-play
    if (autoplayInterval) {
        clearInterval(autoplayInterval);
    }
    
    autoplayInterval = setInterval(() => {
        changeSlide(1);
    }, 4000);
    
    console.log('Carousel initialized successfully');
}

function showSlide(index) {
    if (!slides || !indicators) {
        console.error('Slides or indicators not found');
        return;
    }
    
    console.log('Showing slide:', index);
    
    // Remove active class from all slides and indicators
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Add active class to current slide and indicator
    if (slides[index]) {
        slides[index].classList.add('active');
        console.log('Added active class to slide', index);
    }
    if (indicators[index]) {
        indicators[index].classList.add('active');
        console.log('Added active class to indicator', index);
    }
}

function changeSlide(direction) {
    if (!slides || slides.length === 0) {
        console.error('No slides available');
        return;
    }
    
    console.log('Changing slide by direction:', direction);
    
    currentSlideIndex += direction;
    
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    
    showSlide(currentSlideIndex);
}

function currentSlide(index) {
    if (!slides || slides.length === 0) {
        console.error('No slides available');
        return;
    }
    
    console.log('Going to slide:', index);
    
    currentSlideIndex = index - 1;
    showSlide(currentSlideIndex);
}

// Make functions global so they can be called from HTML
window.changeSlide = changeSlide;
window.currentSlide = currentSlide;

// Typed.js initialization
function initTyped() {
    console.log('Initializing typed.js...');
    
    if (typeof Typed !== 'undefined') {
        new Typed('#motto', {
            strings: ["Exploring this world, pursuing research that's fun and meaningful."],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
            startDelay: 1000,
            showCursor: true,
            cursorChar: ''
        });
    } else {
        var script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/typed.js@2.0.12';
        script.onload = function() {
            new Typed('#motto', {
                strings: ["Exploring this world, pursuing research that's fun and meaningful."],
                typeSpeed: 50,
                backSpeed: 30,
                loop: true,
                startDelay: 1000,
                showCursor: true,
                cursorChar: ''
            });
        };
        document.head.appendChild(script);
    }
}

// Particles.js initialization
function initParticles() {
    console.log('Initializing particles...');
    
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#1772d0'
                },
                shape: {
                    type: 'circle'
                },
                opacity: {
                    value: 0.5,
                    random: false
                },
                size: {
                    value: 3,
                    random: true
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#1772d0',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                }
            },
            retina_detect: true
        });
    } else {
        // Load particles.js if not already loaded
        var script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
        script.onload = function() {
            particlesJS('particles-js', {
                particles: {
                    number: {
                        value: 80,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: '#1772d0'
                    },
                    shape: {
                        type: 'circle'
                    },
                    opacity: {
                        value: 0.5,
                        random: false
                    },
                    size: {
                        value: 3,
                        random: true
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: '#1772d0',
                        opacity: 0.4,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: 'none',
                        random: false,
                        straight: false,
                        out_mode: 'out',
                        bounce: false
                    }
                },
                interactivity: {
                    detect_on: 'canvas',
                    events: {
                        onhover: {
                            enable: true,
                            mode: 'repulse'
                        },
                        onclick: {
                            enable: true,
                            mode: 'push'
                        },
                        resize: true
                    }
                },
                retina_detect: true
            });
        };
        document.head.appendChild(script);
    }
} 