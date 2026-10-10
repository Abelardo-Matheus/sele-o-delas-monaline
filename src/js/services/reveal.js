/**
 * Animação de entrada dos elementos `.reveal` (melhoria progressiva:
 * sem JS ou com "reduzir movimento" ativado, tudo aparece normalmente).
 */
export const initScrollReveal = () => {
  const elements = document.querySelectorAll('.reveal');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion || !('IntersectionObserver' in window)) {
    elements.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }),
    { threshold: 0.12 },
  );

  elements.forEach((el) => observer.observe(el));
};
