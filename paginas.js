/* ============================================================
   PÁGINAS — renderiza o conteúdo dinâmico de cada seção e cuida
   da troca entre elas (roteador por hash, tudo num documento só).
   ============================================================ */

function renderInicio() {
  document.getElementById("titulo").textContent = CONTROLLER.nome;
  document.getElementById("subtitulo").textContent = CONTROLLER.tagline + " — " + CONTROLLER.linha;
}

function renderEspecificacoes() {
  const chips = document.getElementById("chips");
  chips.innerHTML = PLATFORMS.map((p, i) => `
    <span class="chip" style="animation-delay:${0.05 + i * 0.06}s">
      <span class="micon" data-icon="${p.icon}"></span>${p.nome}
    </span>
  `).join("");

  const container = document.getElementById("specs");
  container.innerHTML = SPECS.map((block) => `
    <div class="panel">
      <div class="panel__head">
        <div class="head-left">
          <div class="icon-chip"><span class="micon" data-icon="${block.icon}"></span></div>
          <h2>${block.group}</h2>
        </div>
      </div>
      <table class="spec">
        ${block.items.map((item) => {
          let value;
          if (item.sublista) {
            value = `<ul class="mini-lista">
              ${item.sublista.map((s) => `
                <li><span class="micon" data-icon="${s.icon}"></span>${s.texto}</li>
              `).join("")}
            </ul>`;
          } else if (item.cores) {
            value = `<ul class="lista-cores">
              ${item.cores.map((c) => `
                <li>
                  <span class="amostra-cor${c.transparente ? " transparente" : ""}" style="background:${c.hex};"></span>
                  ${c.nome}
                </li>
              `).join("")}
            </ul>${item.nota ? `<p class="mini-nota">${item.nota}</p>` : ""}`;
          } else if (item.segredo) {
            value = `<button class="segredo-reveal" type="button">
              <span class="segredo-reveal__teaser">
                <span class="micon" data-icon="info"></span>${item.teaser}
              </span>
              <span class="segredo-reveal__real">${item.value}</span>
            </button>`;
          } else {
            const isPending = item.value.includes("A CONFIRMAR");
            value = isPending ? `<span class="pending">${item.value}</span>` : item.value;
          }
          return `<tr>
            <td>${item.label}</td>
            <td>${value}</td>
          </tr>`;
        }).join("")}
      </table>
    </div>
  `).join("");

  document.querySelectorAll(".segredo-reveal").forEach((btn) => {
    btn.addEventListener("click", () => btn.classList.toggle("is-revelado"));
  });
}

function renderAtalhos() {
  const container = document.getElementById("shortcuts");
  container.innerHTML = SHORTCUTS.map((block) => `
    <div class="panel">
      <div class="panel__head">
        <div class="head-left">
          <div class="icon-chip"><span class="micon" data-icon="${block.icon}"></span></div>
          <h2>${block.categoria}</h2>
        </div>
      </div>
      ${block.lista ? block.lista.map((item) => `
        <div class="shortcut-row">
          <span class="combo">${item.combo}</span>
          <span class="acao">${item.acao}</span>
        </div>
      `).join("") : ""}
      ${block.subsecoes ? block.subsecoes.map((sub) => `
        <div class="subsecao">
          <h3 class="subsecao__titulo">${sub.titulo}</h3>
          <div class="subsecao__corpo${sub.nota ? " com-nota" : ""}">
            <ol class="steps">
              ${sub.passos.map((passo) => `<li>${passo}</li>`).join("")}
            </ol>
            ${sub.nota ? `
              <div class="callout callout--compacta">
                <span class="micon" data-icon="info"></span>
                <div>${sub.nota}</div>
              </div>
            ` : ""}
          </div>
        </div>
      `).join("") : ""}
    </div>
  `).join("");

  const markers = document.querySelectorAll(".marker");
  const legendItems = document.querySelectorAll("#legend li[data-letter]");

  function ativar(letra) {
    markers.forEach((m) => m.classList.toggle("is-active", m.dataset.letter === letra));
    legendItems.forEach((li) => li.classList.toggle("is-active", li.dataset.letter === letra));
  }
  function desativarTudo() {
    markers.forEach((m) => m.classList.remove("is-active"));
    legendItems.forEach((li) => li.classList.remove("is-active"));
  }

  markers.forEach((m) => {
    m.addEventListener("mouseenter", () => ativar(m.dataset.letter));
    m.addEventListener("focus", () => ativar(m.dataset.letter));
    m.addEventListener("mouseleave", desativarTudo);
    m.addEventListener("blur", desativarTudo);
  });
  legendItems.forEach((li) => {
    li.addEventListener("mouseenter", () => ativar(li.dataset.letter));
    li.addEventListener("mouseleave", desativarTudo);
  });
}

function renderFirmware() {
  document.getElementById("appDesc").textContent =
    `App: ${FIRMWARE.appNome}. ${FIRMWARE.appDescricao}`;

  document.getElementById("steps").innerHTML =
    FIRMWARE.passoAPasso.map((s) => `<li>${s}</li>`).join("");

  document.getElementById("notas").innerHTML =
    FIRMWARE.observacoes.map((n) => `<li>${n}</li>`).join("");

  document.getElementById("links").innerHTML =
    FIRMWARE.linksUteis.map((l) => `<li><a href="${l.url}" target="_blank" rel="noopener"><span class="micon" data-icon="open_in_new"></span>${l.titulo}</a></li>`).join("");
}

/* Sobre é praticamente estático — não precisa de função própria,
   só entra na lista de hidratação de ícones no final. */

/* ============================================================
   ROTEADOR — troca de seção por hash (#inicio, #atalhos, etc),
   sem recarregar a página. Usa a View Transitions API pra animar
   a troca de verdade (mesmo documento — muito mais confiável que
   a versão entre documentos, que dependia de suporte experimental
   por navegador). Em navegadores sem suporte, troca na hora, sem
   animação — funciona igual, só sem a transição.
   ============================================================ */
const PAGE_IDS = NAV_ITEMS.map((p) => p.id);
let paginaAtualId = "inicio";
let transicaoEmAndamento = false;

function paginaValida(id) {
  return PAGE_IDS.includes(id) ? id : "inicio";
}

function atualizarCabecalho(pageId) {
  const item = NAV_ITEMS.find((p) => p.id === pageId);
  if (!item) return;
  document.title = item.titulo;
  const bcAtual = document.getElementById("breadcrumb-atual");
  if (bcAtual) bcAtual.textContent = pageId === "inicio" ? "Início" : item.label;
}

/* Troca instantânea (sem animação) — usada no primeiro load da
   página e quando o toggle "Animações" está desligado. */
function trocarSecaoInstantaneo(pageId) {
  document.querySelectorAll(".page-section").forEach((sec) => {
    sec.hidden = sec.dataset.page !== pageId;
  });
  atualizarNavAtiva(pageId);
  atualizarCabecalho(pageId);
  window.scrollTo(0, 0);
  paginaAtualId = pageId;
}

/* Troca animada: a seção atual esmaece e desliza um pouco pra cima
   (saída), some, aí a nova seção aparece deslizando de baixo pra
   cima (entrada). Tudo controlado por JS/CSS puro — não depende de
   nenhuma API experimental do navegador, então funciona igual em
   qualquer um. */
function trocarSecaoAnimado(pageId) {
  const atual = document.querySelector(`.page-section[data-page="${paginaAtualId}"]`);
  const alvo = document.querySelector(`.page-section[data-page="${pageId}"]`);
  if (!alvo || alvo === atual) return;

  transicaoEmAndamento = true;
  atualizarNavAtiva(pageId);

  if (!atual) {
    trocarSecaoInstantaneo(pageId);
    transicaoEmAndamento = false;
    return;
  }

  atual.classList.add("secao-saindo");

  window.setTimeout(() => {
    atual.hidden = true;
    atual.classList.remove("secao-saindo");

    alvo.hidden = false;
    alvo.classList.add("secao-entrando");
    atualizarCabecalho(pageId);
    window.scrollTo(0, 0);
    paginaAtualId = pageId;

    // força o navegador a registrar o estado inicial antes de tirar
    // a classe — senão a transição de entrada não dispara
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        alvo.classList.remove("secao-entrando");
        transicaoEmAndamento = false;
      });
    });
  }, 200);
}

function irParaPagina(pageIdBruto) {
  const pageId = paginaValida(pageIdBruto);
  if (pageId === paginaAtualId || transicaoEmAndamento) return;

  if (document.documentElement.classList.contains("motion-off")) {
    trocarSecaoInstantaneo(pageId);
  } else {
    trocarSecaoAnimado(pageId);
  }
}

function initRoteador() {
  // lê a hash só nessa primeira carga (compatibilidade com links
  // antigos tipo index.html#atalhos) — depois disso o roteador
  // nunca mais toca na URL, então navegar pelo site não deixa
  // rastro nenhum no histórico do navegador.
  const inicial = paginaValida(location.hash.slice(1));
  trocarSecaoInstantaneo(inicial);
}
