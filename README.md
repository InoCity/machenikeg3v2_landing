# Machenike G3 V2 — Painel de Referência

Painel de referência rápida (não-oficial) pro controle **Machenike G3 V2**: ficha técnica, atalhos de botões e guia de firmware/software. Feito com HTML/CSS/JS puro — sem build, sem dependências de servidor.

Site estático. Roda tanto abrindo o `index.html` direto no navegador quanto publicado num host qualquer.

## Estrutura

Todos os arquivos ficam soltos na raiz (sem subpastas), de propósito — evita path quebrado quando os arquivos são baixados/copiados individualmente.

| Arquivo | Função |
|---|---|
| `index.html`, `especificacoes.html`, `atalhos.html`, `firmware.html` | As 4 páginas do site |
| `data.js` | **Edite aqui** pra atualizar specs, atalhos, firmware, cores, plataformas — tudo puxa desse arquivo |
| `style.css` | Tema visual (Material You / Material 3 Expressive) |
| `nav.js` | Navegação, sidebar/bottom-bar, transição entre páginas, toggle de animações |
| `icons.js` | Ícones SVG inline (sem depender de fonte externa) |
| `ripple.js` | Efeito ripple (ondulação de toque) nos links |
| `controle-foto.png` | Foto do controle com fundo removido, usada na página de Atalhos |
| `fundo-organico.js`, `mdharmony-switch.js` | Web Components de UI (fundo animado e switch), do repo [md3-componentes](https://github.com/evyly/md3-componentes) |
| `favicon.svg` | Ícone da aba do navegador |
| `404.html` | Página de erro personalizada |
| `.nojekyll` | Desativa o processamento Jekyll do GitHub Pages (deixa os arquivos como estão) |


## Editar o conteúdo

Praticamente tudo que aparece no site vem do `data.js`: specs, atalhos, plataformas compatíveis, cores disponíveis, passos de firmware. Abra esse arquivo, ache o campo que quer mudar e edite o texto — não precisa mexer no HTML.

## Aviso

Site não-oficial, feito por fã. Não tem relação com a Machenike. As informações foram reunidas de manuais públicos, listagens de e-commerce e testes de terceiros — sempre com a fonte indicada quando relevante.
