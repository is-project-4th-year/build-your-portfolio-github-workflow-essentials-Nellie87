// Custom Cursor
const cursor = document.querySelector('.cursor');
const trails = [];

for (let i = 0; i < 10; i++) {
  const trail = document.createElement('div');
  trail.className = 'cursor-trail';
  document.body.appendChild(trail);
  trails.push(trail);
}

let mouseX = 0, mouseY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
  
  trails.forEach((trail, index) => {
    setTimeout(() => {
      trail.style.left = mouseX + 'px';
      trail.style.top = mouseY + 'px';
    }, index * 20);
  });
});

// Smooth scrolling
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

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.container').forEach(container => {
  observer.observe(container);
});

// Header scroll effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 100) {
    header.style.background = 'rgba(10, 10, 10, 0.95)';
  } else {
    header.style.background = 'rgba(10, 10, 10, 0.8)';
  }
});

// Project interaction
document.querySelectorAll('.project').forEach(project => {
  project.addEventListener('mouseenter', () => {
    project.style.transform = 'translateY(-10px) scale(1.02)';
  });
  
  project.addEventListener('mouseleave', () => {
    project.style.transform = 'translateY(0) scale(1)';
  });
});

// Form interactions
document.querySelectorAll('input, textarea').forEach(field => {
  field.addEventListener('focus', () => {
    field.style.transform = 'translateY(-2px)';
  });
  
  field.addEventListener('blur', () => {
    field.style.transform = 'translateY(0)';
  });
});