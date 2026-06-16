/* ============================================================
   HomeApply — Main Script
   ============================================================ */

// ── Navbar scroll shadow ───────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

// ── Hamburger menu ─────────────────────────────────────────
const hamBtn     = document.getElementById('hamBtn');
const mobileMenu = document.getElementById('mobileMenu');

hamBtn.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamBtn.classList.toggle('open', isOpen);
  hamBtn.setAttribute('aria-expanded', isOpen);
});

// Close mobile menu when a link is clicked
mobileMenu.querySelectorAll('.mob-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamBtn.classList.remove('open');
    hamBtn.setAttribute('aria-expanded', false);
  });
});

// ── Slider ─────────────────────────────────────────────────
const track     = document.getElementById('sliderTrack');
const dotsWrap  = document.getElementById('sliderDots');
const prevBtn   = document.getElementById('arrowPrev');
const nextBtn   = document.getElementById('arrowNext');
const slides    = document.querySelectorAll('.slide');
const total     = slides.length;
let   current   = 0;
let   autoTimer = null;
let   isAnimating = false;

// Build dots
slides.forEach((_, i) => {
  const btn = document.createElement('button');
  btn.className = 'dot' + (i === 0 ? ' active' : '');
  btn.setAttribute('role', 'tab');
  btn.setAttribute('aria-label', `Slide ${i + 1}`);
  btn.setAttribute('aria-selected', i === 0);
  btn.addEventListener('click', () => goTo(i));
  dotsWrap.appendChild(btn);
});

function updateDots() {
  dotsWrap.querySelectorAll('.dot').forEach((d, i) => {
    d.classList.toggle('active', i === current);
    d.setAttribute('aria-selected', i === current);
  });
}

function goTo(index) {
  if (isAnimating || index === current) return;
  isAnimating = true;
  current = (index + total) % total;
  track.style.transform = `translateX(-${(100 / total) * current}%)`;
  updateDots();
  resetAuto();
  setTimeout(() => { isAnimating = false; }, 680);
}

function resetAuto() {
  clearInterval(autoTimer);
  autoTimer = setInterval(() => goTo(current + 1), 4500);
}

prevBtn.addEventListener('click', () => goTo(current - 1));
nextBtn.addEventListener('click', () => goTo(current + 1));

// Touch/swipe support
let touchStartX = 0;
const sliderEl = document.querySelector('.slider-section');

sliderEl.addEventListener('touchstart', e => {
  touchStartX = e.touches[0].clientX;
}, { passive: true });

sliderEl.addEventListener('touchend', e => {
  const diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1);
}, { passive: true });

// Keyboard support
sliderEl.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft')  goTo(current - 1);
  if (e.key === 'ArrowRight') goTo(current + 1);
});

// Pause on hover
sliderEl.addEventListener('mouseenter', () => clearInterval(autoTimer));
sliderEl.addEventListener('mouseleave', resetAuto);

// Start autoplay
resetAuto();

// ── Scroll reveal for product cards ───────────────────────
const revealEls = document.querySelectorAll('.product-card, .section-header');
revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger delay based on position in NodeList
      const delay = Array.from(revealEls).indexOf(entry.target) % 3 * 80;
      setTimeout(() => entry.target.classList.add('visible'), delay);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => observer.observe(el));

// ── Active nav link on scroll ──────────────────────────────
const sections   = document.querySelectorAll('section[id]');
const navLinks   = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle(
          'active',
          link.getAttribute('href') === '#' + entry.target.id
        );
      });
    }
  });
}, { rootMargin: '-50% 0px -50% 0px' });

sections.forEach(sec => sectionObserver.observe(sec));
// service slider

(function(){
    const slider = document.querySelector(".gen1-slider");
    const wrapper = slider.querySelector(".slider-wrapper");
    const cards = slider.querySelectorAll(".slide-card");
    const dotsBox = slider.querySelector(".dots-container");
    const prevBtn = slider.querySelector(".prev");
    const nextBtn = slider.querySelector(".next");

    let index = 0;
    let autoSlide;

    function perView(){
        if(window.innerWidth <= 768) return 1;
        if(window.innerWidth <= 1024) return 2;
        return 3;
    }

    function totalSlides(){
        return cards.length - perView() + 1;
    }

    function update(){
        const gap = window.innerWidth <= 768 ? 15 : 20;
        const cardWidth = cards[0].offsetWidth + gap;
        wrapper.style.transform = `translateX(-${index * cardWidth}px)`;

        dotsBox.querySelectorAll(".dot").forEach((dot,i)=>{
            dot.classList.toggle("active", i === index);
        });
    }

    function move(dir){
        index += dir;
        if(index < 0) index = totalSlides() - 1;
        if(index >= totalSlides()) index = 0;
        update();
        resetAuto();
    }

    function createDots(){
        dotsBox.innerHTML = "";
        for(let i=0;i<totalSlides();i++){
            const dot = document.createElement("div");
            dot.className = "dot" + (i===0?" active":"");
            dot.onclick = ()=>{ index=i; update(); resetAuto(); };
            dotsBox.appendChild(dot);
        }
    }

    function startAuto(){
        autoSlide = setInterval(()=>move(1),3000);
    }

    function resetAuto(){
        clearInterval(autoSlide);
        startAuto();
    }

    prevBtn.onclick = ()=>move(-1);
    nextBtn.onclick = ()=>move(1);

    wrapper.addEventListener("mouseenter",()=>clearInterval(autoSlide));
    wrapper.addEventListener("mouseleave",startAuto);

    window.addEventListener("resize",()=>{
        createDots();
        if(index >= totalSlides()) index = totalSlides()-1;
        update();
    });

    createDots();
    update();
    startAuto();
})();






