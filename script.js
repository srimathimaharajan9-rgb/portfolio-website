// Scroll animation for fadeInUp elements using custom classes
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
}

function animateOnScroll() {
  document.querySelectorAll('.animate-fadeInUp').forEach(el => {
    if (isInViewport(el)) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Smooth scroll for nav links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Contact form validation and simulated submission
const contactForm = document.getElementById('contactForm');
const responseEl = document.getElementById('formResponse');

contactForm.addEventListener('submit', e => {
  e.preventDefault();

  if (!contactForm.checkValidity()) {
    responseEl.textContent = "Please fill out all required fields correctly.";
    responseEl.classList.remove('hidden', 'text-green-600');
    responseEl.classList.add('text-red-600');
    return;
  }

  responseEl.textContent = "Thank you for your message! We'll get back to you soon.";
  responseEl.classList.remove('hidden', 'text-red-600');
  responseEl.classList.add('text-green-600');
  contactForm.reset();
});
