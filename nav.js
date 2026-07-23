const NAV_ITEMS = [
  { id: "inicio", label: "Início", icon: "home", titulo: "Machenike G3 V2 — Painel de Referência" },
  { id: "especificacoes", label: "Ficha Técnica", icon: "description", titulo: "Ficha Técnica — Machenike G3 V2" },
  { id: "atalhos", label: "Atalhos", icon: "sports_esports", titulo: "Atalhos — Machenike G3 V2" },
  { id: "firmware", label: "Firmware & Software", icon: "system_update", titulo: "Firmware & Software — Machenike G3 V2" },
  { id: "sobre", label: "Sobre", icon: "info", titulo: "Sobre — Machenike G3 V2" },
];

function renderSidebar(activeId) {
  const el = document.getElementById("sidebar");
  if (!el) return;

  const items = NAV_ITEMS.map((item) => {
    const isActive = item.id === activeId;
    return `<button type="button" class="nav-item${isActive ? " active" : ""}" data-page="${item.id}">
      <span class="micon" data-icon="${item.icon}"></span><span>${item.label}</span>
    </button>`;
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

/* Só troca a classe "active" dos itens já renderizados — usado a
   cada troca de "página" (seção), sem precisar reconstruir a
   sidebar inteira toda vez. */
function atualizarNavAtiva(activeId) {
  document.querySelectorAll(".nav-item[data-page]").forEach((a) => {
    a.classList.toggle("active", a.dataset.page === activeId);
  });
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

/* Clique em qualquer coisa com data-page (itens da sidebar/bottom-bar
   e os cards da home) troca de seção via JS puro — sem tocar na URL,
   sem criar entrada no histórico do navegador. */
document.addEventListener("click", (e) => {
  const alvo = e.target.closest("[data-page]");
  if (!alvo) return;
  e.preventDefault();
  irParaPagina(alvo.dataset.page);
});
