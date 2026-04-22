// Smooth scrolling is optional: safely initialize only when Lenis is available.
if (typeof Lenis !== 'undefined') {
  const lenis = new Lenis({
    lerp: 0.09,
    smoothWheel: true
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}

const nav = document.querySelector('.navbar');
const animatedItems = document.querySelectorAll('[data-animate], .reveal');
const heroCard = document.querySelector('.hero-card');
const parallaxTargets = heroCard ? heroCard.querySelectorAll('[data-parallax]') : [];

function updateNavbarState() {
  if (!nav) {
    return;
  }
  nav.classList.toggle('scrolled', window.scrollY > 40);
}

function setStaggeredDelays() {
  animatedItems.forEach((item, index) => {
    const customDelay = Number(item.getAttribute('data-animate-delay'));
    const delayStep = Number.isFinite(customDelay) ? customDelay : index % 6;
    item.style.transitionDelay = `${delayStep * 70}ms`;
  });
}

function setupRevealObserver() {
  if (!animatedItems.length) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries, activeObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add('in-view', 'active');
        activeObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -8% 0px'
    }
  );

  animatedItems.forEach((item) => observer.observe(item));
}

function setupHeroParallax() {
  if (!heroCard || !parallaxTargets.length || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  heroCard.addEventListener('mousemove', (event) => {
    const rect = heroCard.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    parallaxTargets.forEach((target) => {
      const strength = Number(target.getAttribute('data-parallax')) || 14;
      const moveX = x * strength;
      const moveY = y * (strength * 0.65);
      target.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    });
  });

  heroCard.addEventListener('mouseleave', () => {
    parallaxTargets.forEach((target) => {
      target.style.transform = 'translate3d(0, 0, 0)';
    });
  });
}

window.addEventListener('scroll', updateNavbarState, { passive: true });

setStaggeredDelays();
setupRevealObserver();
setupHeroParallax();
updateNavbarState();


