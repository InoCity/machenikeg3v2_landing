/* ============================================================
   RIPPLE — ondulação de toque estilo Material Design.
   Cria um <span class="md-ripple"> no ponto exato do clique/toque,
   que se expande e desaparece. Aplica em elementos de navegação
   real (links), não em tudo — ripple em elemento não-clicável
   confunde mais do que ajuda.
   ============================================================ */
function attachRipple(selector) {
  document.querySelectorAll(selector).forEach((el) => {
    const posicaoAtual = getComputedStyle(el).position;
    if (posicaoAtual === "static") el.style.position = "relative";
    el.style.overflow = "hidden";

    el.addEventListener("pointerdown", (e) => {
      const rect = el.getBoundingClientRect();
      const tamanho = Math.max(rect.width, rect.height) * 1.8;
      const x = e.clientX - rect.left - tamanho / 2;
      const y = e.clientY - rect.top - tamanho / 2;

      const onda = document.createElement("span");
      onda.className = "md-ripple";
      onda.style.width = onda.style.height = tamanho + "px";
      onda.style.left = x + "px";
      onda.style.top = y + "px";
      el.appendChild(onda);
      onda.addEventListener("animationend", () => onda.remove());
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  attachRipple(".nav-item, .nav-card");
});
