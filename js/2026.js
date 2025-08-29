document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('serviceSearch');
    const suggestionsDiv = document.getElementById('suggestions');
    const suggestionItems = suggestionsDiv.querySelectorAll('.suggestion-item');
    const moreServicesBtn = document.getElementById('moreServicesBtn');
    const hiddenServices = document.querySelectorAll('.hidden-services');

    // Auto typing texts
    const typingTexts = [
        'CCTV Camera Installation',
        'Security Camera Repair',
        'DVR Setup Service',
        'IP Camera Installation',
        'Surveillance System',
        'Home Security Setup',
        'Office CCTV Installation',
        'Wi-Fi Cameras Setup'
    ];

    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    let typingTimeout;

    function typeAnimation() {
        const currentText = typingTexts[currentTextIndex];

        if (isDeleting) {
            searchInput.placeholder = currentText.substring(0, currentCharIndex - 1);
            currentCharIndex--;
            typingSpeed = 50;
        } else {
            searchInput.placeholder = currentText.substring(0, currentCharIndex + 1);
            currentCharIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && currentCharIndex === currentText.length) {
            isDeleting = true;
            typingSpeed = 1500;
        } else if (isDeleting && currentCharIndex === 0) {
            isDeleting = false;
            currentTextIndex = (currentTextIndex + 1) % typingTexts.length;
            typingSpeed = 500;
        }

        typingTimeout = setTimeout(typeAnimation, typingSpeed);
    }

    setTimeout(typeAnimation, 1000);

    searchInput.addEventListener('focus', function () {
        clearTimeout(typingTimeout);
        if (this.placeholder && this.value === '') {
            this.placeholder = 'Search CCTV services...';
        }
    });

    searchInput.addEventListener('blur', function () {
        if (this.value === '') {
            setTimeout(typeAnimation, 2000);
        }
    });

    // More Services toggle
    let servicesExpanded = false;

    moreServicesBtn.addEventListener('click', function (e) {
        e.preventDefault();

        if (!servicesExpanded) {
            hiddenServices.forEach((service, index) => {
                setTimeout(() => {
                    service.classList.add('show');
                    service.style.display = 'block';
                    service.offsetHeight;
                    setTimeout(() => {
                        service.style.opacity = '1';
                        service.style.transform = 'translateY(0)';
                    }, 50);
                }, index * 100);
            });

            setTimeout(() => {
                this.innerHTML = 'SHOW LESS SERVICES <i class="fas fa-minus"></i>';
                this.style.background = 'linear-gradient(135deg, #dc3545, #c82333)';
            }, 600);

            servicesExpanded = true;
        } else {
            hiddenServices.forEach((service) => {
                service.style.opacity = '0';
                service.style.transform = 'translateY(-20px)';

                setTimeout(() => {
                    service.style.display = 'none';
                    service.classList.remove('show');
                }, 300);
            });

            this.innerHTML = 'VIEW MORE SERVICES <i class="fas fa-plus"></i>';
            this.style.background = 'linear-gradient(135deg, #28a745, #20c997)';
            servicesExpanded = false;

            document.querySelector('.services-grid').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });

    // Suggestions
    searchInput.addEventListener('focus', function () {
        if (this.value.length > 0) {
            suggestionsDiv.style.display = 'block';
        }
    });

    searchInput.addEventListener('input', function () {
        const query = this.value.toLowerCase();
        let hasVisibleSuggestions = false;

        suggestionItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            if (text.includes(query)) {
                item.style.display = 'block';
                hasVisibleSuggestions = true;
            } else {
                item.style.display = 'none';
            }
        });

        suggestionsDiv.style.display = hasVisibleSuggestions && query.length > 0 ? 'block' : 'none';

        filterServices(query);
    });

    suggestionItems.forEach(item => {
        item.addEventListener('click', function () {
            searchInput.value = this.textContent;
            suggestionsDiv.style.display = 'none';
            filterServices(this.textContent);
        });
    });

    document.addEventListener('click', function (event) {
        if (!event.target.closest('.search-container')) {
            suggestionsDiv.style.display = 'none';
        }
    });

    // ✅ Enhanced filter function
    function filterServices(searchTerm) {
        const cards = Array.from(document.querySelectorAll('.service-card')); // Convert to array
        const servicesGrid = document.querySelector('.services-grid');
        let term = searchTerm.toLowerCase().trim();

        // normalize wifi
        if (term.includes("wi-fi") || term.includes("wireless")) {
            term = "wifi";
        }

        // Separate matched and unmatched cards
        const matchedCards = [];
        const unmatchedCards = [];

        cards.forEach(card => {
            const title = card.querySelector('.card-title').textContent.toLowerCase();
            const description = card.querySelector('.card-description').textContent.toLowerCase();

            if (term === '' || title.includes(term) || description.includes(term)) {
                card.style.display = 'block';
                card.classList.add('show');
                matchedCards.push(card);
            } else {
                card.style.display = 'none';
                card.classList.remove('show');
                unmatchedCards.push(card);
            }
        });

        // Clear the grid
        servicesGrid.innerHTML = '';

        // Append matched cards first
        matchedCards.forEach(card => {
            servicesGrid.appendChild(card);
        });

        // Append unmatched cards after
        unmatchedCards.forEach(card => {
            servicesGrid.appendChild(card);
        });

        // Toggle "View More" button
        if (searchTerm.trim() !== '') {
            moreServicesBtn.style.display = 'none';
        } else {
            moreServicesBtn.style.display = 'block';
            if (!servicesExpanded) {
                hiddenServices.forEach(service => {
                    service.style.display = 'none';
                    service.classList.remove('show');
                });
            }
        }
    }

    // Call buttons
    document.querySelectorAll('.call-btn').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const serviceTitle = this.closest('.service-card').querySelector('.card-title').textContent;
            // alert(`Booking for ${serviceTitle}...\n\nPhone: +91-8384859801`);

            // Set the href attribute to tel:
            this.setAttribute('href', 'tel:+91-8384859801');

            // Programmatically trigger the click
            window.location.href = 'tel:+91-8384859801';
        });
    });

    // Smooth scroll
    document.documentElement.style.scrollBehavior = 'smooth';
});























// slider js
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
}

function changeSlide(direction) {
    slideIndex += direction;
    if (slideIndex >= totalSlides) slideIndex = 0;
    if (slideIndex < 0) slideIndex = totalSlides - 1;
    showSlide(slideIndex);
}

function currentSlide(index) {
    slideIndex = index - 1;
    showSlide(slideIndex);
}

function autoSlide() {
    slideIndex++;
    if (slideIndex >= totalSlides) slideIndex = 0;
    showSlide(slideIndex);
}

let autoSlideInterval = setInterval(autoSlide, 4000);

const heroSlider = document.querySelector('.hero-slider');
heroSlider.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
heroSlider.addEventListener('mouseleave', () => autoSlideInterval = setInterval(autoSlide, 4000));













// about us and star section

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            
            // Animate feature items
            if (entry.target.classList.contains('hero-text')) {
                const features = entry.target.querySelectorAll('.feature-item');
                features.forEach((feature, index) => {
                    setTimeout(() => {
                        feature.style.opacity = '1';
                        feature.style.transform = 'translateY(0)';
                        feature.style.transition = 'all 0.5s ease';
                    }, index * 100);
                });
            }
        }
    });
}, observerOptions);

// Stats counter animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statItems = entry.target.querySelectorAll('.stat-item');
            
            statItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                    item.style.transition = 'all 0.6s ease';
                    
                    // Counter animation
                    const numberElement = item.querySelector('.stat-number');
                    const target = parseInt(numberElement.getAttribute('data-target'));
                    let current = 0;
                    const increment = target / 50;
                    
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            current = target;
                            clearInterval(timer);
                        }
                        numberElement.textContent = Math.floor(current) + '+';
                    }, 40);
                    
                }, index * 200);
            });
        }
    });
}, observerOptions);

// Initialize all observers when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Observe elements
    const heroText = document.querySelector('.hero-text');
    const statsSection = document.querySelector('.stats-section');
    
    if (heroText) observer.observe(heroText);
    if (statsSection) statsObserver.observe(statsSection);
    
    // Smooth scroll for CTA button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', (e) => {
            e.preventDefault();
            const expertSection = document.querySelector('.expert-section');
            if (expertSection) {
                expertSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // Add hover effects to hero images
    const heroImages = document.querySelectorAll('.hero-image');
    heroImages.forEach(image => {
        image.addEventListener('mouseenter', () => {
            image.style.transform = 'scale(1.05) rotate(2deg)';
        });
        
        image.addEventListener('mouseleave', () => {
            image.style.transform = 'scale(1) rotate(0deg)';
        });
    });
});

// Parallax effect on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating');
    
    parallaxElements.forEach(element => {
        const speed = 0.1;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Utility function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Optional: Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Optional: Add smooth scrolling to all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

















// silder 

        document.addEventListener('DOMContentLoaded', function() {
            const sliderWrapper = document.querySelector('.cctv-slider-wrapper');
            const slides = document.querySelectorAll('.cctv-slide');
            const indicators = document.querySelectorAll('.cctv-indicator');
            
            let currentSlide = 0;
            const slideCount = slides.length;
            let autoSlideInterval;
            
            function updateSlider() {
                sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
                indicators.forEach((indicator, index) => {
                    indicator.classList.toggle('cctv-active', index === currentSlide);
                });
            }
            
            function nextSlide() {
                currentSlide = (currentSlide + 1) % slideCount;
                updateSlider();
            }
            
            function startAutoSlide() {
                autoSlideInterval = setInterval(nextSlide, 5000);
            }
            
            function stopAutoSlide() {
                clearInterval(autoSlideInterval);
            }
            
            indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => {
                    currentSlide = index;
                    updateSlider();
                    stopAutoSlide();
                    startAutoSlide();
                });
            });
            
            const sliderContainer = document.querySelector('.cctv-slider-container');
            sliderContainer.addEventListener('mouseenter', stopAutoSlide);
            sliderContainer.addEventListener('mouseleave', startAutoSlide);
            
            startAutoSlide();
            
            let touchStartX = 0;
            let touchEndX = 0;
            
            sliderContainer.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
            });
            
            sliderContainer.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
            });
            
            function handleSwipe() {
                if (touchEndX < touchStartX - 50) {
                    nextSlide();
                    stopAutoSlide();
                    startAutoSlide();
                }
                if (touchEndX > touchStartX + 50) {
                    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
                    updateSlider();
                    stopAutoSlide();
                    startAutoSlide();
                }
            }
        });
