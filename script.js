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

function encodeFormData(formData) {
  return Array.from(formData.entries())
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
}

function attachContactFormHandler() {
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (!contactForm || !formStatus) {
    return;
  }

  const setStatus = (message, type) => {
    formStatus.textContent = message;
    formStatus.className = `form-status ${type}`;
  };

  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    contactForm.classList.add('was-validated');

    if (!contactForm.checkValidity()) {
      setStatus('Please fix the highlighted fields and try again.', 'error');
      return;
    }

    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton ? submitButton.textContent : '';

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Sending...';
    }

    try {
      const formData = new FormData(contactForm);

      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: encodeFormData(formData)
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      contactForm.reset();
      contactForm.classList.remove('was-validated');
      setStatus('Thank you. Your message has been sent successfully.', 'success');
    } catch (error) {
      setStatus('There was a problem sending your message. Please try again in a moment.', 'error');
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
      }
    }
  });
}

attachContactFormHandler();


