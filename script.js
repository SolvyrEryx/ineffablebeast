/* --- DATA CONSTANTS --- */

const GAMES = [
  {
    id: "mc",
    title: "MINECRAFT",
    genre: "Sandbox / PvP",
    playtime: "1,520h",
    status: "MAIN",
    color: "text-emerald-200",
    img: "https://images.unsplash.com/photo-1627556592933-ffe99c1cd9eb?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: "val",
    title: "VALORANT",
    genre: "Tactical FPS",
    playtime: "155h",
    status: "ACTIVE",
    color: "text-rose-200",
    img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: "csgo",
    title: "CS:GO / CS2",
    genre: "Tactical FPS",
    playtime: "1,200h",
    status: "LEGACY",
    color: "text-amber-200",
    img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/730/library_600x900.jpg",
  },
  {
    id: "er",
    title: "ELDEN RING",
    genre: "Souls-like",
    playtime: "185h",
    status: "COMPLETED",
    color: "text-amber-100",
    img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1245620/library_600x900.jpg",
  },
  {
    id: "rl",
    title: "ROCKET LEAGUE",
    genre: "Sports",
    playtime: "640h",
    status: "CASUAL",
    color: "text-blue-200",
    img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/252950/library_600x900.jpg",
  },
  {
    id: "hi",
    title: "HALO INFINITE",
    genre: "Arena Shooter",
    playtime: "48h",
    status: "SEASONAL",
    color: "text-emerald-100",
    img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1240440/library_600x900.jpg",
  },
  {
    id: "cp77",
    title: "CYBERPUNK 2077",
    genre: "RPG",
    playtime: "140h",
    status: "COMPLETED",
    color: "text-yellow-100",
    img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1091500/library_600x900.jpg",
  },
  {
    id: "rdr2",
    title: "RED DEAD 2",
    genre: "Narrative",
    playtime: "160h",
    status: "COMPLETED",
    color: "text-red-200",
    img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1174180/library_600x900.jpg",
  },
  {
    id: "ww",
    title: "WUTHERING WAVES",
    genre: "Action RPG",
    playtime: "85h",
    status: "GRINDING",
    color: "text-indigo-200",
    img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2568&auto=format&fit=crop",
  },
  {
    id: "dbh",
    title: "DETROIT",
    genre: "Narrative",
    playtime: "30h",
    status: "COMPLETED",
    color: "text-cyan-200",
    img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1222140/library_600x900.jpg",
  },
];

const ACCOUNTS = {
  main: {
    type: "MINECRAFT",
    ign: "F_u_",
    tag: "MAIN OPERATIVE",
    color: "text-white",
    border: "border-white/20",
    bg: "bg-white",
    stats: [
      { label: "FKDR", value: "4.34", sub: "CORE MODES" },
      { label: "BEDS", value: "3,827", sub: "CONFIRMED DESTROYED" },
    ],
    desc: "Verticality. Velocity. Victory. A legacy built on consistency and macro-control. I don't just play the game; I solve it.",
    skills: [
      { label: "MECHANICS", value: "92" },
      { label: "GAMESENSE", value: "96" },
      { label: "SPEED", value: "88" },
      { label: "CONSISTENCY", value: "94" },
    ],
    highlight: {
      title: "BRIDGE GRANDMASTER",
      subtitle: "ELITE DIVISION",
      ping: "230ms LATENCY",
      level: "150",
      color: "amber",
      stats: [
        { label: "WINS", value: "2,243" },
        { label: "KILLS", value: "22,165" },
        { label: "W/L", value: "2.42" },
      ],
    },
  },
  chess: {
    type: "CHESS.COM",
    ign: "MysteriousThoughts",
    tag: "STRATEGIC MIND",
    color: "text-emerald-200",
    border: "border-emerald-500/20",
    bg: "bg-emerald-500",
    stats: [
      { label: "RAPID", value: "1500", sub: "ESTIMATED" },
      { label: "BLITZ", value: "1250", sub: "ESTIMATED" },
      { label: "PUZZLE", value: "2100", sub: "TACTICS" },
      { label: "STYLE", value: "STRATEGIC", sub: "POSITIONAL" },
    ],
    desc: "The board is a battlefield of perfect information. Victory is calculated before the first move. Translating tactical foresight into checkmate.",
    skills: [
      { label: "OPENINGS", value: "85" },
      { label: "ENDGAME", value: "70" },
      { label: "TACTICS", value: "92" },
      { label: "CALCULATION", value: "88" },
    ],
    link: "https://www.chess.com/member/mysteriousthoughts",
  },
  smurf: {
    type: "MINECRAFT",
    ign: "WhatsFKDR",
    tag: "LETHAL ASSET",
    color: "text-rose-200",
    border: "border-rose-500/20",
    bg: "bg-rose-500",
    stats: [
      { label: "LEVEL", value: "11", sub: "IRON PRESTIGE" },
      { label: "FKDR", value: "161.75", sub: "PEAK RATIO" },
      { label: "WINS", value: "133", sub: "TOTAL" },
      { label: "W/L", value: "11.08", sub: "DOMINANCE" },
    ],
    desc: "Pure dominance protocol. Maximized conversion rates. Zero hesitation. A showcase of raw efficiency.",
    skills: [
      { label: "MECHANICS", value: "95" },
      { label: "GAMESENSE", value: "65" },
      { label: "SPEED", value: "90" },
      { label: "AGGRO", value: "99" },
    ],
  },
  hybrid: {
    type: "MINECRAFT",
    ign: "IneffableBeast",
    tag: "EXPERIMENTAL",
    color: "text-amber-200",
    border: "border-amber-500/20",
    bg: "bg-amber-500",
    stats: [
      { label: "LEVEL", value: "142", sub: "DIAMOND PRESTIGE" },
      { label: "FKDR", value: "3.36", sub: "VARIANCE" },
      { label: "WINS", value: "926", sub: "TOTAL" },
      { label: "BEDS", value: "2,587", sub: "BROKEN" },
    ],
    desc: "Sandbox for mechanical testing and new strategies. High variance playstyle focused on adaptability.",
    skills: [
      { label: "MECHANICS", value: "88" },
      { label: "GAMESENSE", value: "85" },
      { label: "ADAPTABILITY", value: "95" },
      { label: "CONSISTENCY", value: "70" },
    ],
  },
};

/* --- DOM ELEMENTS --- */
const bootScreen = document.getElementById("boot-screen");
const bootIdle = document.getElementById("boot-idle");
const bootLoading = document.getElementById("boot-loading");
const bootText = document.getElementById("boot-text");
const bootProgressText = document.getElementById("boot-progress-text");
const bootProgress = document.getElementById("boot-progress");
const mainApp = document.getElementById("main-app");
const navRail = document.getElementById("nav-rail");
const mainContent = document.getElementById("main-content");
const views = document.querySelectorAll(".view");
const navLinks = document.querySelectorAll(".nav-link");
const customCursor = document.getElementById("custom-cursor");
const gamesGrid = document.getElementById("games-grid");
const accountTabs = document.querySelectorAll(".account-tab");
const accountContent = document.getElementById("account-content");

/* --- BOOT SEQUENCE --- */
let isBooting = false;

function playBootSound() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;

    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    // Cinematic Swell Effect
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(40, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.3);
    osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 1.2);

    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.15, ctx.currentTime + 0.1);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.5);

    // Filter for "muffled" tech sound
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(100, ctx.currentTime);
    filter.frequency.linearRampToValueAtTime(3000, ctx.currentTime + 0.8);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 1.5);
  } catch (e) {
    console.error("Audio error", e);
  }
}

function startBootSequence() {
  if (isBooting) return;
  isBooting = true;

  playBootSound();

  bootIdle.classList.add("hidden");
  bootLoading.classList.remove("hidden");

  const steps = [
    { t: "VERIFYING BIOMETRICS...", p: 20, d: 400 },
    { t: "DECRYPTING SECURE ARCHIVE...", p: 50, d: 800 },
    { t: "ESTABLISHING UPLINK...", p: 80, d: 1300 },
    { t: "ACCESS GRANTED // WELCOME OPERATOR", p: 100, d: 1800 },
  ];

  steps.forEach((step) => {
    setTimeout(() => {
      bootText.innerText = step.t;
      bootProgressText.innerText = `${step.p}%`;
      bootProgress.style.width = `${step.p}%`;
    }, step.d);
  });

  setTimeout(() => {
    finishBoot();
  }, 2400);
}

function finishBoot() {
  bootScreen.style.opacity = "0";
  setTimeout(() => {
    bootScreen.classList.add("hidden");
    mainApp.classList.remove("hidden");

    // Trigger generic fade in
    setTimeout(() => {
      mainApp.classList.add("visible");
    }, 100);

    // Staggered reveal
    setTimeout(() => {
      navRail.classList.add("visible");
    }, 1000);

    setTimeout(() => {
      mainContent.classList.add("visible");
    }, 1800);
  }, 1000);
}

bootIdle.addEventListener("click", startBootSequence);

/* --- CUSTOM CURSOR --- */
document.addEventListener("mousemove", (e) => {
  customCursor.style.left = `${e.clientX}px`;
  customCursor.style.top = `${e.clientY}px`;

  // Parallax
  if (window.innerWidth > 768) {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    const bgGradient = document.getElementById("bg-gradient");
    if (bgGradient) {
      bgGradient.style.transform = `translate(${x * -0.5}px, ${y * -0.5}px)`;
    }
  }
});

function addHoverListeners() {
  const hoverables = document.querySelectorAll("a, button, .clickable");
  hoverables.forEach((el) => {
    el.addEventListener("mouseenter", () =>
      customCursor.classList.add("hover"),
    );
    el.addEventListener("mouseleave", () =>
      customCursor.classList.remove("hover"),
    );
  });
}
// Initial call
addHoverListeners();

/* --- NAVIGATION LOGIC --- */
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Update active state
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");

    const tabId = link.getAttribute("data-tab");

    // Switch View
    views.forEach((view) => {
      view.classList.remove("active");
    });
    document.getElementById(`${tabId}-view`).classList.add("active");
  });
});

/* --- OPERATIONS LOGIC --- */
function renderAccount(accountId) {
  const acc = ACCOUNTS[accountId];
  const isMain = accountId === "main";

  let html = "";

  if (isMain && acc.highlight) {
    // Grandmaster Layout
    html = `
            <div class="main-highlight">
                <!-- Left: Badge -->
                <div class="gm-card">
                    <div style="position: absolute; top: 0; right: 0; padding: 2rem; opacity: 0.1;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"><path d="m2 4 3 12h14l3-12-6 7-4-3-4 3-6-7z"/><circle cx="12" cy="19" r="2"/></svg>
                    </div>
                    
                    <div>
                        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2h-6c-1.1 0-2 .9-2 2v8a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4c0-1.1-.9-2-2-2Z"/></svg>
                             <div style="font-size: 10px; letter-spacing: 0.3em; color: rgba(253, 230, 138, 0.6); text-transform: uppercase;">Certified Status</div>
                        </div>
                        <h2 class="gm-title">
                            Bridge<br/>
                            <span class="gm-accent">Grandmaster</span>
                        </h2>
                        <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
                            <div class="gm-badge">Elite Division</div>
                            <div class="ping-badge">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2A10 10 0 0 1 12 22"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10"/><path d="M12 2a15.3 15.3 0 0 0-4 10 15.3 15.3 0 0 0 4 10"/></svg>
                                ${acc.highlight.ping}
                            </div>
                        </div>
                    </div>

                    <div class="gm-stats-row">
                        ${acc.highlight.stats
                          .map(
                            (stat) => `
                            <div>
                                <div style="font-size: 9px; color: rgba(253, 230, 138, 0.6); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.25rem;">${stat.label}</div>
                                <div style="font-size: 1.25rem; color: white; font-family: var(--font-mono);">${stat.value}</div>
                            </div>
                        `,
                          )
                          .join("")}
                    </div>
                </div>

                <!-- Right: Content -->
                <div style="display: flex; flex-direction: column; gap: 3rem;">
                    <!-- Level Banner -->
                     <div style="display: flex; align-items: center; justify-content: space-between; padding: 2rem; border: 1px solid #262626; background-color: rgba(23, 23, 23, 0.2);">
                          <div>
                            <div style="font-size: 10px; color: #737373; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 0.5rem;">Hypixel Level</div>
                            <div style="font-size: 3.75rem; font-weight: 300; color: white; line-height: 1;">
                              ${acc.highlight.level}
                              <span style="font-size: 1.5rem; color: #fbbf24; vertical-align: top; margin-left: 0.5rem;">★</span>
                            </div>
                          </div>
                          <div style="height: 3rem; width: 3rem; border: 1px solid #404040; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                          </div>
                       </div>

                       <div class="stats-grid-2">
                           ${acc.stats
                             .map(
                               (stat) => `
                               <div class="stat-item">
                                   <div class="stat-label">${stat.label}</div>
                                   <div class="stat-value">${stat.value}</div>
                                   <div class="stat-sub">${stat.sub}</div>
                               </div>
                           `,
                             )
                             .join("")}
                       </div>

                       <div class="account-philosophy">
                           <p class="philosophy-text">"${acc.desc}"</p>
                       </div>
                </div>
            </div>
        `;
  } else {
    // Standard Layout
    html = `
            <div class="account-layout">
                <div>
                    <div class="stats-grid-2" style="margin-bottom: 4rem;">
                        ${acc.stats
                          .map(
                            (stat) => `
                            <div class="stat-item">
                                <div class="stat-label">${stat.label}</div>
                                <div class="stat-value">${stat.value}</div>
                                <div class="stat-sub">${stat.sub}</div>
                            </div>
                        `,
                          )
                          .join("")}
                    </div>

                    <div class="account-philosophy">
                        <div style="font-size: 9px; text-transform: uppercase; letter-spacing: 0.25em; color: #737373; margin-bottom: 1.5rem;">Philosophy</div>
                        <p class="philosophy-text">"${acc.desc}"</p>
                        ${
                          acc.link
                            ? `
                            <a href="${acc.link}" target="_blank" class="clickable" style="display: inline-flex; align-items: center; gap: 0.5rem; margin-top: 2rem; font-size: 9px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.2em; color: #a3a3a3; text-decoration: none; transition: color 0.3s;">
                                View Profile 
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                            </a>
                        `
                            : ""
                        }
                    </div>
                </div>

                <div>
                    <div style="font-size: 9px; letter-spacing: 0.25em; color: #737373; text-transform: uppercase; margin-bottom: 2rem; border-bottom: 1px solid #262626; padding-bottom: 1rem;">Attribute Matrix</div>
                    ${acc.skills
                      .map(
                        (skill) => `
                        <div class="skill-bar-container">
                            <div class="skill-bar-header">
                                <div class="skill-bar-label">${skill.label}</div>
                                <div class="skill-bar-value">${skill.value}</div>
                            </div>
                            <div class="skill-track">
                                <div class="skill-fill" style="width: ${skill.value}%"></div>
                            </div>
                        </div>
                    `,
                      )
                      .join("")}
                </div>
            </div>
        `;
  }

  accountContent.innerHTML = html;

  // Re-attach hover listeners for new elements
  addHoverListeners();
}

accountTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    accountTabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    renderAccount(tab.getAttribute("data-account"));
  });
});

// Initial Render
renderAccount("main");

/* --- ARCHIVE LOGIC --- */
function renderGames() {
  gamesGrid.innerHTML = GAMES.map((game) => {
    // Extract color hex approximation or use generic
    // Using the tailwind classes map from the React component logic isn't ideal here without full tailwind,
    // So we'll use inline styles or generic classes.
    // For this static version, I'll map the color string to a hex for the dot.
    let dotColor = "#10b981"; // emerald
    if (game.color.includes("rose")) dotColor = "#f43f5e";
    if (game.color.includes("amber")) dotColor = "#f59e0b";
    if (game.color.includes("blue")) dotColor = "#3b82f6";
    if (game.color.includes("yellow")) dotColor = "#eab308";
    if (game.color.includes("red")) dotColor = "#ef4444";
    if (game.color.includes("indigo")) dotColor = "#6366f1";
    if (game.color.includes("cyan")) dotColor = "#06b6d4";

    return `
        <div class="game-card clickable">
            <div class="game-image-container">
                <img src="${game.img}" alt="${game.title}" class="game-image" loading="lazy">
                <div class="game-playtime">
                    <span class="playtime-badge">${game.playtime}</span>
                </div>
            </div>
            <div class="game-info">
                <div>
                    <h3 class="game-title">${game.title}</h3>
                    <p class="game-genre">${game.genre}</p>
                </div>
                <div class="game-status-dot" style="background-color: ${dotColor}"></div>
            </div>
        </div>
       `;
  }).join("");

  addHoverListeners();
}
renderGames();
