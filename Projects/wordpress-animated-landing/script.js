// Animate cards on scroll (simple Intersection Observer)
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.card');
  const observer = new window.IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.2 });
  cards.forEach(card => observer.observe(card));
});
