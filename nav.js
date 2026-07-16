const NAV_ITEMS = [
  { idx: "00", label: "Início", href: "index.html", icon: "home" },
  { idx: "01", label: "Ficha Técnica", href: "especificacoes.html", icon: "description" },
  { idx: "02", label: "Atalhos", href: "atalhos.html", icon: "sports_esports" },
  { idx: "03", label: "Firmware & Software", href: "firmware.html", icon: "system_update" },
];

function renderSidebar(activeHref) {
  const el = document.getElementById("sidebar");
  if (!el) return;

  const items = NAV_ITEMS.map((item) => {
    const isActive = item.href === activeHref;
    return `<a class="nav-item${isActive ? " active" : ""}" href="${item.href}">
      <span class="micon" data-icon="${item.icon}"></span><span>${item.label}</span>
    </a>`;
  }).join("");

  el.innerHTML = `
    <div class="sidebar__brand">
      <div class="brand-row">
        <span class="live-dot" aria-hidden="true"></span>
        <strong>${CONTROLLER.nome}</strong>
      </div>
      <span class="eyebrow">Painel de referência</span>
    </div>
    <nav class="nav-list">${items}</nav>
    <div class="sidebar__footer">
      Site local — sem conexão com servidor.<br>
      Edite <code>data.js</code> para atualizar o conteúdo.
    </div>
  `;
  hydrateIcons(el);
}

/* Toggle fixo "Animações" — liga/desliga todas as transições e
   animações do site (inclusive as dos componentes MD3), com
   preferência salva no localStorage do navegador. */
function renderMotionToggle() {
  const el = document.getElementById("motion-toggle");
  if (!el) return;

  let motionOff = false;
  try { motionOff = localStorage.getItem("g3v2-motion-off") === "1"; } catch (e) {}

  document.documentElement.classList.toggle("motion-off", motionOff);

  el.innerHTML = `
    <span class="micon" data-icon="animation"></span>
    <span class="toggle-label">Animações</span>
    <mdharmony-switch id="switchAnimacoes"${motionOff ? "" : " marcado"}></mdharmony-switch>
  `;
  hydrateIcons(el);

  const sw = document.getElementById("switchAnimacoes");
  sw.addEventListener("mudanca", () => {
    const animacoesLigadas = sw.hasAttribute("marcado");
    document.documentElement.classList.toggle("motion-off", !animacoesLigadas);
    try { localStorage.setItem("g3v2-motion-off", animacoesLigadas ? "0" : "1"); } catch (e) {}
  });
}

/* Animação de SAÍDA entre páginas. A View Transitions API (no CSS)
   já cuida da entrada em navegadores compatíveis, mas a troca de
   documento em si é instantânea — o conteúdo antigo "sumia" sem
   nenhuma transição. Aqui a gente intercepta o clique, toca um
   fade-out curto no <main>, e só então navega de verdade — funciona
   em qualquer navegador, sem depender de suporte experimental. */
function initPageTransitions() {
  const paginasLocais = ["index.html", "especificacoes.html", "atalhos.html", "firmware.html"];
  const paginaAtual = location.pathname.split("/").pop() || "index.html";

  document.addEventListener("click", (e) => {
    if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    if (document.documentElement.classList.contains("pagina-saindo")) return;
    const link = e.target.closest("a[href]");
    if (!link || link.target === "_blank") return;

    const href = link.getAttribute("href");
    if (!paginasLocais.includes(href) || href === paginaAtual) return;

    e.preventDefault();
    document.documentElement.classList.add("pagina-saindo");
    window.setTimeout(() => { window.location.href = href; }, 220);
  });
}
initPageTransitions();

/* Entrada suave dos hexágonos de fundo (fundo-organico). Eles nascem
   com opacity:0 inline no HTML — aqui a gente solta essa trava um
   frame depois do load, e a transição declarada no CSS cuida do
   fade-in. Dois requestAnimationFrame garantem que o navegador já
   pintou o estado inicial (opacity:0) antes de mudar, senão o
   navegador "funde" os dois estados e a transição não roda. */
function initFundoOrganicoEntrada() {
  const elementos = document.querySelectorAll("fundo-organico");
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      elementos.forEach((el) => { el.style.opacity = ""; });
    });
  });
}
initFundoOrganicoEntrada();
