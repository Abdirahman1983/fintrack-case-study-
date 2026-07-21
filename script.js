
// Hero stat count-up
(function () {
  const el = document.querySelector('[data-count]');
  if (!el) return;
  const target = parseInt(el.getAttribute('data-count'), 10);
  const suffix = el.getAttribute('data-suffix') || '';
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const animate = () => {
    if (prefersReduced) {
      el.textContent = target + suffix;
      return;
    }
    const duration = 1100;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animate();
        observer.disconnect();
      }
    });
  }, { threshold: 0.5 });
  observer.observe(el);
})();

// Before / after onboarding flow toggle
(function () {
  const buttons = document.querySelectorAll('.toggle-btn');
  const before = document.getElementById('flow-before');
  const after = document.getElementById('flow-after');
  if (!buttons.length || !before || !after) return;

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach((b) => {
        b.classList.remove('is-active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');

      const target = btn.getAttribute('data-target');
      if (target === 'before') {
        before.hidden = false;
        after.hidden = true;
      } else {
        before.hidden = true;
        after.hidden = false;
      }
    });
  });
})();
