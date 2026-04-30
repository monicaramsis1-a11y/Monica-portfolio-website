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

function attachWeb3FormsHandlers() {
  const forms = document.querySelectorAll('form[data-web3form]');

  if (!forms.length) {
    return;
  }

  const phonePattern = /^[0-9+()\-\s]{7,20}$/;

  forms.forEach((form) => {
    const formStatus = form.querySelector('.form-status');

    if (!formStatus) {
      return;
    }

    const setStatus = (message, type) => {
      formStatus.textContent = message;
      formStatus.className = `form-status ${type}`;
    };

    const emailField = form.querySelector('input[name="email"]');
    const replyToField = form.querySelector('input[name="replyto"]');
    const phoneField = form.querySelector('input[name="phone"]');
    const accessKeyField = form.querySelector('input[name="access_key"]');
    const preferredMethodOptions = form.querySelectorAll('input[name="preferred_contact"]');
    const firstPreferredMethod = preferredMethodOptions.length ? preferredMethodOptions[0] : null;
    const successUrl = form.getAttribute('data-success-url') || 'contact-success.html';

    const syncPreferredMethodValidity = () => {
      if (!firstPreferredMethod) {
        return;
      }

      const hasSelection = Boolean(form.querySelector('input[name="preferred_contact"]:checked'));
      firstPreferredMethod.setCustomValidity(hasSelection ? '' : 'Please choose a preferred contact method.');
    };

    preferredMethodOptions.forEach((option) => {
      option.addEventListener('change', () => {
        syncPreferredMethodValidity();
      });
    });

    if (emailField && replyToField) {
      emailField.addEventListener('input', () => {
        replyToField.value = emailField.value.trim();
      });
    }

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      syncPreferredMethodValidity();

      if (phoneField) {
        const hasValidPhone = phonePattern.test(phoneField.value.trim());
        phoneField.setCustomValidity(hasValidPhone ? '' : 'Please enter a valid phone number.');
      }

      form.classList.add('was-validated');

      if (!form.checkValidity()) {
        setStatus('Please fix the highlighted fields and try again.', 'error');
        return;
      }

      if (!accessKeyField || !accessKeyField.value || accessKeyField.value === 'YOUR_WEB3FORMS_ACCESS_KEY') {
        setStatus('Web3Forms is not configured yet. Replace YOUR_WEB3FORMS_ACCESS_KEY with your real key to receive emails.', 'error');
        return;
      }

      const submitButton = form.querySelector('button[type="submit"]');
      const originalButtonText = submitButton ? submitButton.textContent : '';

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
      }

      try {
        if (emailField && replyToField) {
          replyToField.value = emailField.value.trim();
        }

        const formData = new FormData(form);
        const projectSubject = String(formData.get('project_subject') || '').trim();
        const fallbackSubject = String(formData.get('subject') || '').trim();

        formData.set('replyto', replyToField ? replyToField.value : '');
        formData.set('subject', projectSubject ? `Portfolio inquiry: ${projectSubject}` : (fallbackSubject || 'Portfolio inquiry from website form'));

        const response = await fetch(form.action, {
          method: 'POST',
          headers: {
            Accept: 'application/json'
          },
          body: formData
        });

        const result = await response.json().catch(() => null);

        if (!response.ok || !result || !result.success) {
          throw new Error(result && result.message ? result.message : 'Request failed');
        }

        form.reset();
        form.classList.remove('was-validated');
        setStatus('Thank you. Your message has been sent successfully.', 'success');
        window.setTimeout(() => {
          window.location.href = successUrl;
        }, 600);
      } catch (error) {
        setStatus('There was a problem sending your message. Please try again in a moment.', 'error');
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = originalButtonText;
        }
      }
    });
  });
}

attachWeb3FormsHandlers();


