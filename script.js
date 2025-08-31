// Mobile menu
const burger = document.getElementById('burger');
const mobile = document.getElementById('mobileMenu');
burger.addEventListener('click', ()=>{
  mobile.style.display = mobile.style.display === 'flex' ? 'none' : 'flex';
});

// Typed.js hero title
new Typed('#typed', {
  strings: [
    'Full Stack Developer',
    'Python & Java Programmer',
    'Backend & Cloud Enthusiast',
    'AI/ML Foundations'
  ],
  typeSpeed: 45,
  backSpeed: 24,
  backDelay: 1200,
  loop: true,
  smartBackspace: true
});

// Swiper (certifications)
const swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 18,
  loop: true,
  autoplay: { delay: 2500, disableOnInteraction: false },
  pagination: { el: '.swiper-pagination', clickable: true },
  navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
  breakpoints: {
    0:   { slidesPerView: 1 },
    700: { slidesPerView: 2 },
    1024:{ slidesPerView: 3 }
  }
});

// AOS init
AOS.init({ duration: 700, offset: 80, once: true });

// Smooth close mobile menu on navigation
document.querySelectorAll('.mobile a').forEach(a=>{
  a.addEventListener('click', ()=> mobile.style.display='none');
});
