/* ============================================================
   MACHENIKE G3 V2 — CONFIG CENTRAL
   Edite os valores aqui. Todas as páginas leem deste arquivo,
   então você atualiza uma vez só e reflete em tudo.

   Dados confirmados no manual oficial do G3 V2 (Machenike) e na
   página global.machenike.com/products/g3-v2 em jul/2026. Campos
   ainda marcados "A CONFIRMAR" (peso, dimensões exatas) não
   aparecem na documentação pública encontrada — confira na
   etiqueta/caixa do seu controle se precisar do valor exato.
   ============================================================ */

const CONTROLLER = {
  nome: "Machenike G3 V2",
  tagline: "Painel de referência rápida — ficha técnica, atalhos e firmware",
  fabricante: "Qingdao Machenike Technology Co., Ltd.",
  linha: "Série G (intermediária) — tri-modo com Quad-Hall System (sticks e gatilhos por efeito Hall), abaixo do G5 Pro V2 no catálogo Machenike",
};

/* ---------- PLATAFORMAS COMPATÍVEIS (chips) ---------- */
const PLATFORMS = [
  { nome: "PC / Steam", icon: "computer" },
  { nome: "Switch / Switch 2", icon: "gamepad" },
  { nome: "Android", icon: "smartphone" },
  { nome: "iOS", icon: "smartphone" },
  { nome: "HarmonyOS", icon: "apps" },
];

/* ---------- FICHA TÉCNICA ---------- */
const SPECS = [
  {
    group: "Conectividade",
    icon: "wifi",
    items: [
      { label: "Modos de conexão", sublista: [
        { icon: "bluetooth", texto: "Bluetooth" },
        { icon: "wifi", texto: "2.4G sem fio (com receptor incluso)" },
        { icon: "cable", texto: "Cabo USB-C" },
      ] },
      { label: "Polling rate (cabo e 2.4G)", value: "1000Hz nominal — em teste independente (Raider King), média real de ~941Hz sem fio (94% de estabilidade) e ~954Hz com cabo (95%)" },
      { label: "Receptor 2.4G", value: "Incluso — \"Dual-Core Receiver\", com porta USB de extensão integrada" },
      { label: "Compatibilidade", value: "PC, Nintendo Switch / Switch 2, iOS, Android, HarmonyOS, Steam e sistemas embarcados automotivos" },
      { label: "Incompatibilidades", value: "Não funciona nativamente em Xbox, PlayStation ou GeForce Now" },
      { label: "🤫 Segredinho", segredo: true, teaser: "Será que tem algo aqui? Clique pra descobrir…", value: "Funciona no console Xbox 360 desbloqueado (com o plugin homebrew UsbdSecPatch, que libera o uso de controles USB não-oficiais) — não é suporte oficial, é modding" },
    ],
  },
  {
    group: "Entradas e sensores",
    icon: "tune",
    items: [
      { label: "Analógicos", value: "Hall Effect (magnético) — sem drift mecânico, sensibilidade ajustável no Keylinker" },
      { label: "Gatilhos (LT/RT)", value: "Hall Effect — \"Quad-Hall System\" (2 sticks + 2 gatilhos)" },
      { label: "Modo dos gatilhos", value: "Analógico completo ou \"hair-trigger\" (curso curto) — alternável no Keylinker ou usando atalho" },
      { label: "Botões de ação (A/B/X/Y)", value: "Switch tipo membrana" },
      { label: "Bumpers (LB/RB)", value: "Switch tátil" },
      { label: "Botões traseiros programáveis", value: "M1 / M2 — até 32 ações programáveis, suporta gravação de macro" },
      { label: "Função Turbo", sublista: [
        { icon: "bolt", texto: "Disponível em A / B / X / Y / LB / LT / RB / RT" },
        { icon: "tune", texto: "Modo manual e automático" },
        { icon: "info", texto: "LED pisca quando está ativo" },
      ] },
      { label: "Vibração", value: "4 níveis, motores assimétricos (\"4-Level Natural Vibration\")" },
    ],
  },
  {
    group: "Bateria e energia",
    icon: "battery_full",
    items: [
      { label: "Capacidade", value: "1000mAh (íon de lítio)" },
      { label: "Conector de carga", value: "USB-C — entrada máxima 5V⎓1A" },
      { label: "Dock de carga", value: "Vem incluso na maioria dos kits, mas também há versões vendidas sem o dock (mais baratas) — confira no anúncio antes de comprar. O dock não é vendido separadamente" },
      { label: "LED de carga", sublista: [
        { icon: "sync", texto: "Piscando suave (\"respirando\") = carregando" },
        { icon: "check_circle", texto: "Azul fixo = carga completa" },
      ] },
      { label: "Desligamento automático", value: "Após 10 min sem uso em modo sem fio (Bluetooth/2.4G)" },
      { label: "Ligar / desligar", sublista: [
        { icon: "power_settings_new", texto: "HOME = liga / acorda" },
        { icon: "power_settings_new", texto: "Segurar HOME 5s = desliga (modo sem fio)" },
      ] },
      { label: "Reset de fábrica", sublista: [
        { icon: "apps", texto: "Pelo app Keylinker" },
        { icon: "back_hand", texto: "Ou pressionando o botão físico na parte de trás do controle" },
      ] },
      { label: "Autonomia estimada", value: "~10 horas de uso contínuo com 1000mAh (varia bastante com o nível de vibração e do RGB ligado) — segundo listagens de terceiros, não é número do manual oficial" },
    ],
  },
  {
    group: "Software e app",
    icon: "apps",
    items: [
      { label: "App de configuração", value: "Keylinker — o controle aparece como \"G3V2_APP\" na tela inicial do app" },
      { label: "Emparelhamento por app", value: "Necessário conectar diretamente pelo aplicativo, não funciona pelas configurações de bluetooth nativo do celular" },
      { label: "Atualização de firmware", value: "Via app Keylinker ou site oficial" },
      { label: "Site do fabricante", value: "https://global.machenike.com/" },
      { label: "HarmonyOS", value: "Versões 5.0+ não suportam o Keylinker — use a versão Android do app" },
      { label: "Garantia", value: "1 ano, reparo em fábrica (política oficial Machenike)" },
    ],
  },
  {
    group: "Físico",
    icon: "straighten",
    items: [
      { label: "Peso", value: "A CONFIRMAR — não encontrado nem no manual oficial nem no site da marca" },
      { label: "Dimensões", value: "A CONFIRMAR — não encontrado nem no manual oficial nem no site da marca" },
      { label: "Design", value: "Duas linhas de acabamento: opaco (preto e rosa) e semitransparente \"crystal\" com UV skin-friendly (azul e branco) — não existe versão preta \"crystal\"" },
      { label: "Cores", cores: [
        { nome: "Preto (opaco)", hex: "#1a1a1a" },
        { nome: "Rosa (opaco)", hex: "#F0A8C0" },
        { nome: "Azul (\"crystal\", transparente)", hex: "#3B6FE0", transparente: true },
        { nome: "Branco (\"crystal\", transparente)", hex: "#F2F2F2", transparente: true },
      ], nota: "Disponibilidade de cada cor varia por revendedor" },
      { label: "Iluminação RGB", value: "Anéis duplos de RGB ao redor dos dois analógicos" },
      { label: "Layout", value: "Padrão Microsoft Xbox (ABXY, analógico esquerdo alto / direito baixo)" },
      { label: "Detalhe do dia a dia", value: "O acabamento transparente marca digital fácil — leve um paninho de microfibra na mochila" },
    ],
  },
  {
    group: "Mercado",
    icon: "bolt",
    items: [
      { label: "Preço no Brasil", value: "~R$ 100-200 (com imposto de importação já incluso) — Preços baseados na AliExpress, jul/2026. Preço varia por promoção/frete" },
      { label: "Onde comprar (BR)", sublista: [
        { icon: "open_in_new", texto: "Mercado Livre — Frete grátis, parcelamento sem juros em alguns casos" },
        { icon: "open_in_new", texto: "AliExpress - Preços mais baratos, frete grátis porém... Causa ansiedade... ˙𐃷˙" },
      ] },
      { label: "Preço nos EUA", value: "US$ 35,99 (preço-base na Amazon EUA) — cotação de referência, não é o preço à vista no Brasil" },
      { label: "Posicionamento", value: "Categoria \"mid-budget\" — recursos de controle premium (Hall Effect duplo, 1000Hz) num preço de entrada" },
      { label: "Embalagem", value: "Caixa de papelão resistente — confira no anúncio se a versão escolhida inclui o dock de carga ou não" },
    ],
  },
  {
    group: "Sobre a marca",
    icon: "apps",
    items: [
      { label: "Empresa", value: "Qingdao Machenike Technology Co., Ltd." },
      { label: "Investidor", value: "Grupo Haier — a mesma gigante por trás de eletrodomésticos e da Casarte" },
      { label: "Parceria", value: "Parceira estratégica do Grupo Alibaba" },
      { label: "Histórico", value: "Capital aberto desde setembro de 2017 — primeira fabricante de hardware pra e-sports listada em bolsa na China" },
    ],
  },
];

/* ---------- ATALHOS / COMBINAÇÕES DE BOTÕES ---------- */
/* Confirmados no manual oficial do G3 V2. */
const SHORTCUTS = [
  {
    categoria: "Ligar / desligar / conectar",
    icon: "power_settings_new",
    lista: [
      { combo: "HOME (pressionar)", acao: "Liga o controle / acorda do modo de espera e reconecta ao último dispositivo pareado" },
      { combo: "HOME (segurar 5s)", acao: "Desliga o controle (apenas em modo sem fio — Bluetooth/2.4G)" },
      { combo: "[X] + HOME", acao: "Ativa modo Bluetooth — dispositivo aparece como \"Xbox Wireless Controller\"" },
      { combo: "[A] + HOME", acao: "Ativa modo Bluetooth — dispositivo aparece como \"Machenike G3V2\"" },
      { combo: "[B] + HOME", acao: "Ativa modo dongle (2.4G) e Bluetooth — dispositivo aparece como \"Pro Controller\"" },
      { combo: "[Y] + HOME", acao: "Ativa modo Switch" },
      { combo: "FN + A (segurar 3s, modo Switch)", acao: "Alterna o layout dos botões entre padrão e Nintendo (A/B e X/Y invertidos) — vibra uma vez confirmando" },
    ],
  },
  {
    categoria: "Status e diagnóstico",
    icon: "monitoring",
    lista: [
      { combo: "FN + TURBO", acao: "Mostra o nível atual de bateria pelo LED indicador (4 níveis: 25/50/75/100%)" },
    ],
  },
  {
    categoria: "Turbo",
    icon: "bolt",
    lista: [
      { combo: "TURBO + botão (A/B/X/Y/LB/LT/RB/RT), soltar", acao: "Ativa turbo manual — precisa segurar o botão pra disparar em rajada" },
      { combo: "TURBO + botão novamente", acao: "Alterna para turbo automático — dispara em rajada sozinho" },
      { combo: "FN + botão", acao: "Desativa o turbo daquele botão" },
    ],
  },
  {
    categoria: "Modo do gatilho (Hair Trigger)",
    icon: "tune",
    lista: [
      { combo: "FN + LT (ou RT)", acao: "Alterna aquele gatilho entre analógico completo e hair-trigger (curso curto) — não precisa do Keylinker, dá pra trocar direto no controle" },
    ],
  },
  {
    categoria: "Config. dos paddles (M1/M2)",
    icon: "back_hand",
    subsecoes: [
      {
        titulo: "Adicionar comando aos paddles",
        passos: [
          "Pressione FN + M1 (ou FN + M2)",
          "Pressione os botões desejados, na sequência que quiser",
          "Pressione M1 ou M2 novamente",
        ],
        nota: "O paddle que confirma é sempre o mesmo que iniciou a gravação: começou com FN + M1, confirme apertando M1; começou com FN + M2, confirme com M2.",
      },
      {
        titulo: "Apagar comando dos paddles",
        passos: [
          "Pressione FN + M1 (ou FN + M2)",
          "Pressione M1 (ou M2) novamente",
        ],
      },
    ],
  },
  {
    categoria: "Vibração, brilho e LEDs",
    icon: "vibration",
    lista: [
      { combo: "FN + Seta para cima / Seta para baixo", acao: "Ajusta a intensidade da vibração" },
      { combo: "FN + Seta para esquerda", acao: "Ajusta o brilho do RGB" },
      { combo: "FN + Seta para direita", acao: "Muda o modo dos LEDs" },
    ],
  },
];

/* ---------- FIRMWARE / SOFTWARE ---------- */
const FIRMWARE = {
  appNome: "Keylinker",
  appDescricao:
    "App oficial da Machenike para mapear botões, ajustar zona morta dos analógicos, configurar macros dos botões traseiros, modo dos gatilhos (analógico completo ou hair-trigger), vibração e cor do RGB. Não precisa estar conectado por Bluetooth ao celular pra configurar — basta ligar o controle em qualquer modo. Ele aparece na tela inicial do app como \"G3V2_APP\".",
  linkOficial: "https://global.machenike.com/",
  observacoes: [
    "Em HarmonyOS 5.0 ou superior, o Keylinker não é suportado — use a versão Android do app.",
    "Ao abrir o app com o controle ligado, procure por \"G3V2_APP\" na tela inicial do Keylinker.",
    "Atualizações de firmware costumam ser feitas dentro do próprio app ou baixadas do site oficial.",
    "O controle não é compatível nativamente com Xbox, PlayStation ou GeForce Now.",
  ],
  passoAPasso: [
    "Baixe o Keylinker pelo site oficial ou QR code na caixa/manual.",
    "Instale e conceda as permissões solicitadas na primeira abertura.",
    "Ligue o controle em qualquer modo (cabo, 2.4G ou Bluetooth).",
    "Abra o Keylinker e localize \"G3V2_APP\" na tela principal do app.",
    "Toque no controle pra entrar na interface de customização.",
    "Verifique se há atualização de firmware disponível na própria tela do app.",
  ],
  linksUteis: [
    { titulo: "Site oficial Machenike (Global)", url: "https://global.machenike.com/" },
    { titulo: "Página de downloads (Keylinker + firmware)", url: "https://global.machenike.com/shoubing/download" },
    { titulo: "Página do produto G3 V2", url: "https://global.machenike.com/products/g3-v2" },
  ],
};
