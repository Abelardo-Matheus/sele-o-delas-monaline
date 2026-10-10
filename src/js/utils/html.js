/**
 * Template seguro para gerar HTML.
 *
 * Todo valor interpolado em `html`...`` é escapado automaticamente,
 * evitando XSS. Para inserir HTML já confiável (ex.: outro template
 * ou um ícone SVG), use `raw()` ou passe o resultado de `html`.
 */

class SafeHtml {
  constructor(value) {
    this.value = value;
  }

  toString() {
    return this.value;
  }
}

const ESCAPE_MAP = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

export const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (char) => ESCAPE_MAP[char]);

export const raw = (value) => new SafeHtml(String(value));

const serialize = (value) => {
  if (value === null || value === undefined || value === false) return '';
  if (Array.isArray(value)) return value.map(serialize).join('');
  if (value instanceof SafeHtml) return value.value;
  return escapeHtml(value);
};

export const html = (strings, ...values) =>
  raw(strings.reduce((out, str, i) => out + str + (i < values.length ? serialize(values[i]) : ''), ''));
