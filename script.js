  // script.js
const songs = [
  {
    title: "Gundul-Gundul Pacul",
    youtubeId: "bAcB_R5gDMI", 
    audioFile: "audio/gundul.mp3",
    description: "Lagu rakyat dari Jawa Tengah yang mengandung nasihat moral tentang kepemimpinan dan kejujuran."
  },
  {
    title: "Lir Ilir",
    youtubeId: "GuWc1-447pY", // GANTI
    audioFile: "audio/lir_ilir.mp3",
    description: "Lagu tembang dolanan Jawa yang dikaitkan dengan ajaran Wali Songo, penuh makna spiritual."
  },
  {
    title: "Suwe Ora Jamu",
    youtubeId: "q7_JEEBHfIk", // GANTI
    audioFile: "audio/suwe_ora_bali.mp3",
    description: "Lagu tentang kerinduan dan kesetiaan, sering dinyanyikan dalam pertemuan keluarga."
  },
  {
    title: "Padhang Bulan",
    youtubeId: "-Rr7TpYxLlk", // GANTI
    audioFile: "audio/padang_bulan.mp3",
    description: "Lagu Jawa klasik yang menggambarkan keindahan malam dan kerinduan akan kekasih."
  },
  {
    title: "Janger",
    youtubeId: "DctimUW56DU", // GANTI
    audioFile: "audio/janger.mp3",
    description: "Lagu daerah Jawa Timur yang ceria, biasanya dinyanyikan saat upacara adat."
  },
  {
    title: "Cublak Suweng",
    youtubeId: "R2nnlqYxVZw", // GANTI
    audioFile: "audio/Cublak_Cublak_Suweng.mp3",
    description: "Lagu dolanan anak-anak yang mengajarkan kejujuran dan berbagi."
  },
  {
    title: "Jaranan",
    youtubeId: "JIAbbu8iELI", // GANTI
    audioFile: "audio/Jaranan.mp3",
    description: "Lagu dolanan anak-anak yang mengajarkan kejujuran dan berbagi."
  },
  {
    title: "Bengawan Solo",
    youtubeId: "csyYxUG6RQI", // GANTI
    audioFile: "audio/bengawan_solo.mp3",
    description: "Lagu dolanan anak-anak yang mengajarkan kejujuran dan berbagi."
  },
  {
    title: "Slendro Manyura",
    youtubeId: "R2nnlqYxVZw", // GANTI
    audioFile: "audio/selendro_manyura.mp3",
    description: "Lagu dolanan anak-anak yang mengajarkan kejujuran dan berbagi."
  },
  {
    title: "Prau Layar",
    youtubeId: "F4SMU_Pr8KI", // GANTI
    audioFile: "audio/prau_Layar.mp3",
    description: "Lagu dolanan anak-anak yang mengajarkan kejujuran dan berbagi."
  },
  {
    title: "Ricik Ricik",
    youtubeId: "STFjbObxDzw", // GANTI
    audioFile: "audio/ricik_ricik.mp3",
    description: "Lagu dolanan anak-anak yang mengajarkan kejujuran dan berbagi."
  }
];

const container = document.getElementById('songContainer');

songs.forEach(song => {
  const card = document.createElement('div');
  card.className = 'song-card';
  
  card.innerHTML = `
    <div class="title-only">
      <h3>${song.title}</h3>
      <p>Klik untuk lihat perbandingan</p>
    </div>
    <div class="expanded-content">
      <div class="comparison">
        <div class="version">
          <h4>Versi Asli</h4>
          <p class="description">${song.description}</p>
          <a href="https://www.youtube.com/watch?v=${song.youtubeId}" target="_blank" class="youtube-link">
            🎵 Dengarkan di YouTube
          </a>
        </div>
        <div class="version">
          <h4>Versi AI</h4>
          <audio controls>
            <source src="${song.audioFile}" type="audio/mpeg">
            Browser Anda tidak mendukung audio.
          </audio>
        </div>
      </div>
    </div>
  `;

  card.addEventListener('click', function () {
    if (card.classList.contains('expanded')) return;

    closeExpandedCard(); // Tutup yang lain

    card.classList.add('expanded');

    // Tambahkan backdrop
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

// Tutup dengan ESC
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeExpandedCard();
});

// Fungsi menutup card expanded
function closeExpandedCard() {
  const expanded = document.querySelector('.song-card.expanded');
  const backdrop = document.querySelector('.overlay-backdrop');

  if (expanded) {
    expanded.classList.remove('expanded');

    // Hentikan video YouTube
    const iframe = expanded.querySelector('iframe');
    if (iframe) {
      iframe.src = '';
    }
  }

  if (backdrop) {
    backdrop.remove();
  }

  document.body.classList.remove('no-scroll');
}

// Tutup dengan tombol ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeExpandedCard();
});

// Opsional: hentikan video YouTube saat card ditutup
document.addEventListener('click', function(e) {
  const expandedCards = document.querySelectorAll('.song-card.expanded');
  document.querySelectorAll('.song-card').forEach(card => {
    const iframe = card.querySelector('iframe');
    if (iframe) {
      if (!card.classList.contains('expanded')) {
        // Jika tidak expanded, reset src untuk jeda video
        const src = iframe.src;
        iframe.src = '';
        iframe.src = src;
      }
    }
  });
});