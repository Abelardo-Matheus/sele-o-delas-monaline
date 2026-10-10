/**
 * Componentes de interface — funções puras: dados → HTML.
 * Não acessam o DOM nem estado global.
 */
import { html } from '../utils/html.js';
import { icon } from '../utils/icons.js';

/* ---------- Átomos ---------- */

const Picture = ({ src, fallback, alt, className, width, height, eager = false }) => html`
  <picture>
    <source srcset="${src}" type="image/webp" />
    <img class="${className}" src="${fallback}" alt="${alt}" width="${width}" height="${height}"
      ${eager ? html`fetchpriority="high"` : html`loading="lazy"`} decoding="async" />
  </picture>
`;

export const CtaButton = ({ url, label, location }) => html`
  <a class="btn" href="${url}" target="_blank" rel="noopener noreferrer" data-cta="${location}">
    ${icon('chat', { size: 22, strokeWidth: 2.2 })}
    <span>${label}</span>
  </a>
`;

/* ---------- Seções ---------- */

export const Header = ({ brand }) => html`
  <div class="container">
    ${Picture({ ...brand.logo, alt: brand.name, className: 'site-header__logo', width: 882, height: 400, eager: true })}
  </div>
`;

export const Hero = ({ hero, whatsapp, brand }) => html`
  <div class="container hero__grid">
    <div class="hero__media reveal">
      <div class="photo-frame">
        ${Picture({ ...hero.photo, className: 'photo-frame__img', width: 900, height: 1028, eager: true })}
      </div>
      <img class="hero__seal" src="${brand.seal}" alt="" width="512" height="495" loading="lazy" />
    </div>

    <div class="hero__content reveal">
      <h1 class="hero__title">${hero.title}</h1>
      <p class="hero__subtitle">${hero.subtitle}</p>
      ${CtaButton({ url: whatsapp.groupUrl, label: whatsapp.ctaLabel, location: 'hero' })}
      <p class="hero__note">${hero.note}</p>
    </div>
  </div>
`;

export const Features = (items) => html`
  <div class="container">
    <ul class="features">
      ${items.map(
        (item) => html`
          <li class="feature reveal">
            <span class="feature__icon">${icon(item.icon)}</span>
            <h2 class="feature__title">${item.title}</h2>
            <p class="feature__text">${item.description}</p>
          </li>
        `,
      )}
    </ul>
  </div>
`;

export const Footer = ({ footer }) => html`
  <div class="container"><p class="site-footer__credit">${footer.credit}</p></div>
`;
