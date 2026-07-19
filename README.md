# Machenike G3 V2 — Painel de Referência

Painel de referência rápida (não-oficial) pro controle **Machenike G3 V2**: ficha técnica, atalhos de botões e guia de firmware/software.

🔗 **[Acessar o site](https://inocity.github.io/machenikeg3v2_landing/)**

Site estático em HTML/CSS/JS puro — sem build, sem dependências de servidor. Roda direto abrindo o `index.html` no navegador ou publicado em qualquer host.

## Estrutura

Arquivos soltos na raiz, sem subpastas — evita path quebrado quando são baixados ou copiados individualmente.

| Arquivo | Função |
|---|---|
| `index.html`, `especificacoes.html`, `atalhos.html`, `firmware.html` | As 4 páginas do site |
| `data.js` | Fonte de todo o conteúdo — specs, atalhos, firmware, cores, plataformas |
| `style.css` | Tema visual (Material You / Material 3 Expressive) |
| `nav.js` | Navegação, sidebar/bottom-bar, transição entre páginas, toggle de animações |
| `icons.js` | Ícones SVG inline, sem depender de fonte externa |
| `ripple.js` | Efeito ripple nos links |
| `controle-foto.png` | Foto do controle com fundo removido, usada na página de Atalhos |
| `fundo-organico.js`, `mdharmony-switch.js` | Web Components (fundo animado e switch) do repo [md3-componentes](https://github.com/evyly/md3-componentes) |
| `favicon.svg` | Ícone da aba do navegador |
| `404.html` | Página de erro personalizada |
| `.nojekyll` | Desativa o processamento Jekyll do GitHub Pages |

## Editar conteúdo

Tudo vem do `data.js`. Abra o arquivo, ache o campo e edite o texto — não precisa mexer no HTML.

## Aviso

Site não-oficial, feito por fã. Sem relação com a Machenike. Informações reunidas de manuais públicos, listagens de e-commerce e testes de terceiros, com fonte indicada quando relevante.
