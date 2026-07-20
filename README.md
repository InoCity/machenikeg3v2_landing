# Machenike G3 V2 — Painel de Referência

Painel de referência rápida (não-oficial) pro controle **Machenike G3 V2**: ficha técnica, atalhos de botões, guia de firmware/software e créditos. Feito com HTML/CSS/JS puro — sem build, sem dependências de servidor.

Site estático de **página única** (SPA): todas as seções vivem dentro do `index.html` e a navegação troca de seção por hash na URL (`index.html#atalhos`, por exemplo), sem recarregar a página — a transição entre seções usa a View Transitions API nativa do navegador.

## Estrutura

Todos os arquivos ficam soltos na raiz (sem subpastas), de propósito — evita path quebrado quando os arquivos são baixados/copiados individualmente.

| Arquivo | Função |
|---|---|
| `index.html` | **O site inteiro.** Contém as 5 seções (Início, Ficha Técnica, Atalhos, Firmware, Sobre) |
| `data.js` | **Edite aqui** pra atualizar specs, atalhos, firmware, cores, plataformas — tudo puxa desse arquivo |
| `style.css` | Tema visual (Material You / Material 3 Expressive) |
| `nav.js` | Sidebar/bottom-bar, toggle de animações, entrada do fundo animado |
| `paginas.js` | Roteador (troca de seção por hash + View Transitions) e renderização do conteúdo dinâmico de cada seção |
| `icons.js` | Ícones SVG inline (sem depender de fonte externa) |
| `ripple.js` | Efeito ripple (ondulação de toque) nos links |
| `controle-foto.png` | Foto do controle com fundo removido, usada na seção de Atalhos |
| `fundo-organico.js`, `mdharmony-switch.js` | Web Components de UI (fundo animado e switch), do repo [md3-componentes](https://github.com/evyly/md3-componentes), de Evy (evyly) |
| `favicon.svg` | Ícone da aba do navegador |
| `especificacoes.html`, `atalhos.html`, `firmware.html`, `sobre.html` | Redirecionamentos automáticos pro `index.html#...` correspondente — só existem por compatibilidade com links antigos |
| `404.html` | Página de erro personalizada |
| `.nojekyll` | Desativa o processamento Jekyll do GitHub Pages (deixa os arquivos como estão) |

## Publicar no GitHub Pages

1. Crie um repositório novo no GitHub e suba **todo o conteúdo desta pasta na raiz do repositório** (não dentro de uma subpasta).
2. Vá em **Settings → Pages**.
3. Em "Build and deployment", escolha **Deploy from a branch**.
4. Branch: `main` (ou a que você usou), pasta: **/ (root)**.
5. Salve. Em alguns minutos o site fica disponível em `https://seu-usuario.github.io/nome-do-repositorio/`.

Não precisa de nenhum passo de build — é tudo estático.

## Editar o conteúdo

Praticamente tudo que aparece no site vem do `data.js`: specs, atalhos, plataformas compatíveis, cores disponíveis, passos de firmware. Abra esse arquivo, ache o campo que quer mudar e edite o texto — não precisa mexer no HTML.

Campos marcados como `"A CONFIRMAR"` são informações que não encontrei em fonte oficial — se você tiver o dado exato (peso, dimensões, etc.), é só substituir.

Pra adicionar uma seção nova: duplique um bloco `<section class="page-section" data-page="...">` dentro do `index.html`, adicione a entrada correspondente em `NAV_ITEMS` (no `nav.js`) e, se a seção tiver conteúdo dinâmico, uma função `renderX()` em `paginas.js` chamada no script final do `index.html`.

## Aviso

Site não-oficial, feito por fã. Não tem relação com a Machenike. As informações foram reunidas de manuais públicos, listagens de e-commerce e testes de terceiros — sempre com a fonte indicada quando relevante. Créditos completos na seção "Sobre" do site.
