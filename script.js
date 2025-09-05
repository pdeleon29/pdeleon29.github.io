
document.addEventListener('DOMContentLoaded', function(){
  // Mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  navToggle.addEventListener('click', function(){ navLinks.classList.toggle('open'); });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth', block:'start'}); navLinks.classList.remove('open'); }
    });
  });

  // Intersection Observer for reveal animations
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
        // once revealed, unobserve for perf
        io.unobserve(entry.target);
      }
    });
  },{threshold:0.12});

  reveals.forEach(r => io.observe(r));

  // Optionally handle Netlify form success (client-side)
  const query = new URLSearchParams(window.location.search);
  if(query.get('success') === 'true'){
    alert('Thanks — message received. I will reply soon.');
  }
});
