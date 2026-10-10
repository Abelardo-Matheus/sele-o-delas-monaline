/**
 * ============================================================
 *  CONFIGURAÇÃO DO SITE — edite APENAS este arquivo
 * ============================================================
 *  Textos, link do grupo, imagens e cards vêm daqui.
 *  Ícones disponíveis para os cards: ticket, shield, heart, bag, bolt
 * ============================================================
 */

export const siteConfig = Object.freeze({
  brand: {
    name: 'Seleção Delas',
    logo: { src: 'assets/img/logo-selecao-delas.webp', fallback: 'assets/img/logo-selecao-delas.png' },
    seal: 'assets/img/selo.png',
  },

  whatsapp: {
    groupUrl: 'https://chat.whatsapp.com/GjM3WvQadL87nfe4Cb3Uww?mode=gi_t',
    ctaLabel: 'QUERO ENTRAR AGORA',
  },

  hero: {
    photo: {
      src: 'assets/img/foto.webp',
      fallback: 'assets/img/foto.jpg',
      alt: 'Foto da curadora do grupo Seleção Delas',
    },
    title: 'Amiga, eu garimpo as melhores promoções ocultas da internet de moda e beleza 💖',
    subtitle:
      'Entre no meu Grupo VIP e receba todos os dias promoções reais, cupons que funcionam e achadinhos para você pagar pouco sem perder tempo procurando.',
    note: 'Grupo gratuito • silencioso • sem spam',
  },

  features: [
    {
      icon: 'ticket',
      title: 'Cupons que funcionam',
      description:
        'Cupons exclusivos, testados e atualizados para você economizar de verdade na finalização da compra.',
    },
    {
      icon: 'shield',
      title: 'Links verificados',
      description: 'Segurança total. Apenas lojas oficiais e confiáveis.',
    },
  ],

  footer: {
    credit: 'Curadoria por Seleção Delas 💖',
  },
});
