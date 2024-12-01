
// Hamburger Menu Func
document.addEventListener("DOMContentLoaded", () => {
    const navBtn = document.getElementById('navToggle');
    const navCont = document.getElementById('navContent');
    const navBtnRm = document.getElementById('navToggleRm');
    navBtn.addEventListener('click', ()=> {
        navCont.classList.toggle("hidden");
    })
    navBtnRm.addEventListener('click', ()=> {
        navCont.classList.toggle("hidden");
    })
}) 

// download Resume/CV button Func
document.addEventListener("DOMContentLoaded", ()=> {
    const downloadBtn = document.getElementById('download').addEventListener (
        'click' , ()=> {
            const link = document.createElement('a')
            link.href = '/assets/test.txt';
            link.download = 'CV test.txt';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    )
}
)
//  Contact Message func
async function sendEmail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    try {
        const response = await fetch('http://localhost:5000/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message }),
        });
        const result = await response.json();
        alert(result.message);
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to send email.');
    }
}
// carousel func
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
const slides = document.querySelectorAll('.card-item');

let currentIndex = 0;

// Variables to track touch position
let touchStartX = 0;
let touchEndX = 0;

function showSlide(index) {
    const totalSlides = slides.length;
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    slides.forEach((slide, i) => {
        slide.classList.remove('opacity-100', 'block');
        slide.classList.add('opacity-0', 'hidden'); // Hide all slides

        if (i === currentIndex) {
            slide.classList.remove('hidden');
            slide.classList.add('opacity-100', 'block'); // Show active slide
        }
    });
}

// Event Listeners for Prev and Next Buttons
prevButton.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

// Touch event listeners for swipe functionality
const carousel = document.getElementById('trackCarousel'); // Use the correct ID for the container

carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
});

carousel.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].clientX;

    // Detect swipe direction
    if (touchStartX - touchEndX > 50) {
        // Swipe left (next slide)
        showSlide(currentIndex + 1);
    } else if (touchEndX - touchStartX > 50) {
        // Swipe right (previous slide)
        showSlide(currentIndex - 1);
    }
});

// Initialize first slide
showSlide(currentIndex);
