// Reusable slider controller function
function setupSlider(sliderSelector, dotsSelector) {
    const slides = document.querySelectorAll(`${sliderSelector} .project-slide`);
    const dots = document.querySelectorAll(`${dotsSelector} .dot`);
    let currentSlide = 0;

    function showSlide(index) {
        // Remove active class from all slides in this slider
        slides.forEach(function(slide) {
            slide.classList.remove("active");
        });

        // Remove active class from all dots in this slider
        dots.forEach(function(dot) {
            dot.classList.remove("active");
        });

        // Add active class to current slide and dot
        if (slides[index]) slides[index].classList.add("active");
        if (dots[index]) dots[index].classList.add("active");
    }

    function nextSlide() {
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    }

    // Change slide every 3 seconds
    setInterval(nextSlide, 3000);
}

// Initialize Left Slider (Projects 1-3)
setupSlider('.left-slider', '.left-dots');

// Initialize Right Slider (Projects 4-6)
setupSlider('.right-slider', '.right-dots');

// Hover Animation for Achievement Cards
document.addEventListener("DOMContentLoaded", function () {
    const achieveCards = document.querySelectorAll('.achievement-card');
    
    achieveCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            const icon = this.querySelector('.achieve-icon i');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(10deg)';
                icon.style.transition = '0.3s ease';
            }
        });

        card.addEventListener('mouseleave', function () {
            const icon = this.querySelector('.achieve-icon i');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
});