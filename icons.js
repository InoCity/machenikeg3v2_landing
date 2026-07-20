/* ============================================================
   ÍCONES SVG EMBUTIDOS
   Substituem a fonte "Material Symbols" (que causava o flash de
   texto cru tipo "sports_esports" a cada troca de página, pois
   dependia de baixar/aplicar uma fonte externa a cada load).
   Como são SVG inline, não existe carregamento nenhum: aparecem
   já prontos, sempre, mesmo offline.
   ============================================================ */

const ICONS = {
  home: '<path d="M4 11L12 4l8 7"/><path d="M6 10v9h5v-5h2v5h5v-9"/>',

  description: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/>',

  sports_esports: '<rect x="2" y="8" width="20" height="9" rx="4.5"/><path d="M6 12.5h4M8 10.5v4"/><circle cx="15.5" cy="11" r="1"/><circle cx="18" cy="13.5" r="1"/>',

  gamepad: '<rect x="2" y="8" width="20" height="9" rx="4.5"/><path d="M6 12.5h4M8 10.5v4"/><circle cx="15.5" cy="11" r="1"/><circle cx="18" cy="13.5" r="1"/>',

  system_update: '<rect x="4" y="2" width="16" height="14" rx="2"/><path d="M12 6v6m0 0l-2.5-2.5M12 12l2.5-2.5"/><path d="M8 20h8"/>',

  chevron_right: '<path d="M9 6l6 6-6 6"/>',

  bolt: '<path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"/>',

  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><circle cx="12" cy="8" r="0.6" fill="currentColor" stroke="none"/>',

  wifi: '<path d="M2 8.5a15 15 0 0 1 20 0"/><path d="M5.5 12.5a10 10 0 0 1 13 0"/><path d="M9 16.5a4.5 4.5 0 0 1 6 0"/><circle cx="12" cy="20" r="1" fill="currentColor" stroke="none"/>',

  tune: '<path d="M6 4v6M6 14v6M12 4v12M12 20v0M18 4v2M18 10v10"/><circle cx="6" cy="12" r="2"/><circle cx="12" cy="17" r="2"/><circle cx="18" cy="8" r="2"/>',

  battery_full: '<rect x="2" y="7" width="18" height="10" rx="2"/><rect x="20.5" y="10" width="1.5" height="4" rx="0.7" fill="currentColor" stroke="none"/><rect x="4" y="9" width="14" height="6" rx="1" fill="currentColor" stroke="none" opacity="0.55"/>',

  apps: '<circle cx="6" cy="6" r="1.6"/><circle cx="12" cy="6" r="1.6"/><circle cx="18" cy="6" r="1.6"/><circle cx="6" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="18" cy="12" r="1.6"/><circle cx="6" cy="18" r="1.6"/><circle cx="12" cy="18" r="1.6"/><circle cx="18" cy="18" r="1.6"/>',

  straighten: '<rect x="2" y="9" width="20" height="6" rx="1.5"/><path d="M6 9v3M10 9v3M14 9v3M18 9v3"/>',

  power_settings_new: '<path d="M12 4v6"/><path d="M7.05 6.05a8 8 0 1 0 9.9 0"/>',

  monitoring: '<path d="M2 12h4l2-7 4 14 3-10 2 3h5"/>',

  back_hand: '<rect x="6" y="10" width="12" height="9" rx="3"/><path d="M9 10V6M12 10V5M15 10V6"/>',

  vibration: '<rect x="8" y="4" width="8" height="16" rx="2"/><path d="M4 10v4M2 8v8M20 10v4M22 8v8"/>',

  sync: '<path d="M4 12a8 8 0 0 1 14-5.3"/><path d="M20 4v5h-5"/><path d="M20 12a8 8 0 0 1-14 5.3"/><path d="M4 20v-5h5"/>',

  link: '<path d="M9 15l6-6"/><path d="M8 12a4 4 0 0 1 0-6l2-2a4 4 0 0 1 6 6l-1 1"/><path d="M16 12a4 4 0 0 1 0 6l-2 2a4 4 0 0 1-6-6l1-1"/>',

  open_in_new: '<path d="M14 3h7v7"/><path d="M21 3l-9 9"/><path d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6"/>',

  animation: '<path d="M12 2l1.6 6.4L20 10l-6.4 1.6L12 18l-1.6-6.4L4 10l6.4-1.6Z"/>',

  computer: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',

  smartphone: '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',

  bluetooth: '<path d="M7 7l10 10-5 5V2l5 5L7 17"/>',

  cable: '<path d="M9 2v5M15 2v5M7 7h10v4a5 5 0 0 1-5 5 5 5 0 0 1-5-5V7Z"/><path d="M12 16v6"/>',

  check_circle: '<circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.5 2.5L16 9"/>',

  chat_bubble: '<path d="M4 5h16v11H9l-4 4v-4H4Z"/><path d="M8 9.5h8M8 12.5h5"/>',
};

/* Converte todo <span data-icon="nome" class="..."> encontrado em
   um <svg> real com o path correspondente, preservando as classes
   (inclusive a classe "micon" usada nas animações do tema). */
function hydrateIcons(root) {
  const scope = root || document;
  const els = scope.querySelectorAll("[data-icon]");
  els.forEach((el) => {
    const name = el.getAttribute("data-icon");
    const paths = ICONS[name];
    if (!paths) return;
    const existingClass = el.getAttribute("class") || "";
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("width", "24");
    svg.setAttribute("height", "24");
    svg.setAttribute("class", existingClass);
    svg.setAttribute("aria-hidden", "true");
    svg.innerHTML = paths;
    // preserva qualquer estilo inline que o span original já tivesse
    // (ex: largura/altura customizada passada via style="")
    const estiloOriginal = el.getAttribute("style");
    if (estiloOriginal) svg.setAttribute("style", estiloOriginal);
    el.replaceWith(svg);
  });
}
