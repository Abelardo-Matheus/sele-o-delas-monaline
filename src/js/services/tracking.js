/**
 * Rastreamento de cliques nos botões de CTA.
 *
 * Funciona com Meta Pixel (fbq) e Google Analytics 4 (gtag) se
 * estiverem instalados no index.html. Caso contrário, não faz nada.
 */

const sendEvent = (name, params) => {
  window.fbq?.('track', 'Lead', params);
  window.gtag?.('event', name, params);
};

export const initCtaTracking = (root = document) => {
  root.addEventListener('click', (event) => {
    const cta = event.target.closest('[data-cta]');
    if (!cta) return;
    sendEvent('join_group_click', { location: cta.dataset.cta });
  });
};
