// ============================================================
//  TOEGANGSBEVEILIGING — Controleer of gebruiker is ingelogd
// ============================================================

if (sessionStorage.getItem('orpAccess') !== 'true') {
  window.location.href = 'index.html';
}

// ============================================================
//  ✏️  CREATORS AANPASSEN — Voeg hier creators toe of verwijder ze
//
//  Velden per creator:
//    name        → Weergavenaam op de kaart
//    image       → Pad naar de foto (sla op in de 'images/' map)
//    page        → HTML bestand waarnaar gelinkt wordt
// ============================================================

const creators = [
  {
    name: "Dialo",
    image: "images/dialo.jpg",
    page: "ana/dialo_analytics.html"
  },
  {
    name: "Yassin",
    image: "images/yassin.jpeg",
    page: "ana/yassin_analytics.html"
  },

  // ── Voeg hier extra creators toe ──
  // {
  //   name: "NaamCreator",
  //   image: "images/naam.jpg",
  //   page: "naam_analytics.html"
  // },
];

// ============================================================
//  RENDERING — NIET AANPASSEN
// ============================================================

const grid = document.getElementById('creatorGrid');

creators.forEach(creator => {
  const card = document.createElement('a');
  card.classList.add('creator-card');
  card.href = creator.page;

  card.innerHTML = `
    <div class="avatar-wrap">
      <img src="${creator.image}" alt="${creator.name}" />
    </div>
    <div class="creator-name">${creator.name}</div>
    <div class="creator-arrow">Bekijk analytics →</div>
  `;

  grid.appendChild(card);
});
