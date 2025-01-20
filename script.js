// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const icon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Contact form handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Basic form validation
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Here you would typically send the form data to a server
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Email validation helper function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Add animation to skill items when they come into view
const skillItems = document.querySelectorAll('.skill-item');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.5s ease-in forwards';
        }
    });
}, { threshold: 0.5 });

skillItems.forEach(item => observer.observe(item));

// Array of funny coding memes
const memeImages = [
    'https://pbs.twimg.com/media/GhrngCJXUAE-uCU?format=jpg&name=small',  // "Works on my machine" meme
    'https://pbs.twimg.com/media/GhnU-cLWoAAQQyE?format=jpg&name=900x900',  // "99 bugs in the code" meme
    'https://pbs.twimg.com/media/GhtAnB1WQAAeYMd?format=jpg&name=900x900'
];

// Update initial profile image
document.querySelector('.profile-img').src = memeImages[0];

// Add click handler to profile image
const profileImg = document.querySelector('.profile-img');
let currentMemeIndex = 0;

profileImg.addEventListener('click', () => {
    currentMemeIndex = (currentMemeIndex + 1) % memeImages.length;
    profileImg.style.opacity = '0';
    
    setTimeout(() => {
        profileImg.src = memeImages[currentMemeIndex];
        profileImg.style.opacity = '1';
    }, 300);
});

// Add transition style
profileImg.style.transition = 'opacity 0.3s ease';