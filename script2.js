// script-instrument.js

const instruments = [
  {
    title: "Gamelan",
    image: "img/gamelan.jpg",
    audioFile: "audio/gamelan.mp3",
    description: "Sekelompok alat musik perkusi dan melodi yang dimainkan bersama-sama dalam orkestra tradisional Jawa."
  },
  {
    title: "Suling",
    image: "img/suling.webp",
    audioFile: "audio/seruling.mp3",
    description: "Alat musik tiup dari bambu, menghasilkan nada lembut dan penuh nuansa spiritual."
  },
  {
    title: "Rebana",
    image: "img/gambar_alat_musik.jpeg",
    audioFile: "audio/rebana.mp3",
    description: "Gendang bulat yang sering digunakan dalam pertunjukan kesenian rakyat dan upacara keagamaan."
  },
  {
    title: "Kendhang",
    image: "img/gendang.webp",
    audioFile: "audio/kendhang.mp3",
    description: "Alat musik perkusi yang menjadi pengatur irama dalam ensemble gamelan."
  },
  {
    title: "Gendèr",
    image: "img/gender.jpg",
    audioFile: "audio/gender.mp3",
    description: "Alat musik perkusi yang menjadi pengatur irama dalam ensemble gamelan."
  },
  {
    title: "Gambang",
    image: "img/gambang.webp",
    audioFile: "audio/gambang.mp3",
    description: "Alat musik perkusi yang menjadi pengatur irama dalam ensemble gamelan."
  },
  {
    title: "Rebab",
    image: "img/rebab.jpg",
    audioFile: "audio/rebab.mp3",
    description: "Alat musik perkusi yang menjadi pengatur irama dalam ensemble gamelan."
  },
  {
    title: "Celempung",
    image: "img/celempung.webp",
    audioFile: "audio/celempung.mp3",
    description: "Alat musik petik berdawai, mirip harpa kecil, menghasilkan suara yang lembut dan merdu."
  }
];

const container = document.getElementById('instrumentContainer');

instruments.forEach(inst => {
  const card = document.createElement('div');
  card.className = 'song-card instrument-card'; // tetap pakai song-card agar CSS modal tetap work
  
  card.innerHTML = `
    <div class="title-only">
      <img src="${inst.image}" alt="${inst.title}" class="instrument-img">
      <h3>${inst.title}</h3>
      <p>Klik untuk lihat detail</p>
    </div>
    <div class="expanded-content">
      <img src="${inst.image}" alt="${inst.title}" class="instrument-img">
      <p class="description">${inst.description}</p>
      <div class="comparison">
        <div class="version">
          <audio controls>
            <source src="${inst.audioFile}" type="audio/mpeg">
            Browser Anda tidak mendukung audio.
          </audio>
        </div>
      </div>
    </div>
  `;

  card.addEventListener('click', function () {
    if (card.classList.contains('expanded')) return;

    closeExpandedCard();

    card.classList.add('expanded');

    const backdrop = document.createElement('div');
    backdrop.className = 'overlay-backdrop';
    backdrop.addEventListener('click', closeExpandedCard);
    document.body.appendChild(backdrop);
    document.body.classList.add('no-scroll');

    // Scroll ke atas jika perlu
    card.scrollTop = 0;
  });

  container.appendChild(card);
});

function closeExpandedCard() {
  const expanded = document.querySelector('.song-card.expanded');
  const backdrop = document.querySelector('.overlay-backdrop');

  if (expanded) {
    expanded.classList.remove('expanded');
  }

  if (backdrop) {
    backdrop.remove();
  }

  document.body.classList.remove('no-scroll');
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeExpandedCard();
});