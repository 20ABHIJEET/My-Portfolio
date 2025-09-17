// Smooth scroll helper
function scrollToSection(sel){
  const el = document.querySelector(sel);
  if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
}

// Copy email
function copyEmail(){
  navigator.clipboard.writeText('rautabhijit0739@gmail.com').then(()=>{
    alert('Email copied to clipboard');
  }).catch(()=>{ alert('Use a modern browser to copy email'); })
}

// Small entrance animations for visible elements
(function(){
  const els = document.querySelectorAll('.fade-in');
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('visible');
        // ensure the CSS animation runs (already set up)
      }
    });
  }, {threshold: 0.12});
  els.forEach(el => obs.observe(el));
})();

// little interactive skill-dot hover
const dots = document.querySelectorAll('.skill-dot');
dots.forEach((d,i)=>{
  d.addEventListener('mouseenter', ()=> d.style.transform='scale(1.35)');
  d.addEventListener('mouseleave', ()=> d.style.transform='scale(1)');
});

// Make hero logo float slightly for life
// (function(){
//   const logo = document.querySelector('.logo');
//   let t = 0;
//   function floatTick(){
//     t += 0.02;
//     if(logo) logo.style.transform = translateY(${Math.sin(t)*4}px);
//     requestAnimationFrame(floatTick);
//   }
//   floatTick();
// })();

(function () {
  const logo = document.querySelector(".logo");
  let t = 0;

  function floatTick() {
    t += 0.02;
    if (logo) logo.style.transform = `translateY(${Math.sin(t) * 4}px)`;
    requestAnimationFrame(floatTick);
  }

  floatTick();
})();
