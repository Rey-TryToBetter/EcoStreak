
// POPUP VIDEO
document.addEventListener('DOMContentLoaded', () => {
    // Ambil elemen-elemen yang kita butuhkan dari HTML
    const openVideoButton = document.getElementById('open-video-popup');
    const closeVideoButton = document.getElementById('close-video-popup');
    const videoPopup = document.getElementById('video-popup');
    const youtubePlayer = document.getElementById('youtube-player');
    
    // GANTI 'VIDEO_ID_KAMU' DENGAN ID VIDEO YOUTUBE YANG SEBENARNYA
    // Contoh: Jika linknya https://www.youtube.com/watch?v=dQw4w9WgXcQ, maka ID-nya adalah 'dQw4w9WgXcQ'
    const videoId = 'nb0pM93tmi8'; // <--- PENTING: GANTI INI!
    const youtubeEmbedUrl = `https://www.youtube.com/embed/${videoId}`;

    // Fungsi untuk membuka popup
    function openPopup() {
        // Set sumber video ke iframe agar mulai memuat
        youtubePlayer.src = youtubeEmbedUrl;
        // Hapus kelas 'hidden' untuk menampilkan popup
        videoPopup.classList.remove('hidden');
    }

    // Fungsi untuk menutup popup
    function closePopup() {
        // Hentikan pemutaran video dengan menghapus sumbernya
        youtubePlayer.src = '';
        // Tambahkan kembali kelas 'hidden' untuk menyembunyikan popup
        videoPopup.classList.add('hidden');
    }

    // Tambahkan event listener ke tombol "Dampak Sampah"
    openVideoButton.addEventListener('click', (event) => {
        event.preventDefault(); // Mencegah link berpindah halaman
        openPopup();
    });

    // Tambahkan event listener ke tombol close (X)
    closeVideoButton.addEventListener('click', () => {
        closePopup();
    });

    // (Opsional) Tambahkan event listener untuk menutup popup saat mengklik area gelap di latar belakang
    videoPopup.addEventListener('click', (event) => {
        // Jika yang diklik adalah area popup itu sendiri (bukan video atau tombol di dalamnya)
        if (event.target === videoPopup) {
            closePopup();
        }
    });
});

// POPUP ABOUT
document.addEventListener('DOMContentLoaded', () => {
    // Pastikan kode ini berjalan setelah elemen dimuat
    const openFaktaButton = document.getElementById('open-fakta-popup');
    const closeFaktaButton = document.getElementById('close-fakta-popup');
    const faktaPopup = document.getElementById('fakta-popup');

    // Cek jika elemen ada sebelum menambahkan event listener
    if (openFaktaButton && closeFaktaButton && faktaPopup) {
        
        const openPopup = () => {
            faktaPopup.classList.remove('hidden');
        };

        const closePopup = () => {
            faktaPopup.classList.add('hidden');
        };

        openFaktaButton.addEventListener('click', (event) => {
            event.preventDefault();
            openPopup();
        });

        closeFaktaButton.addEventListener('click', closePopup);

        faktaPopup.addEventListener('click', (event) => {
            if (event.target === faktaPopup) {
                closePopup();
            }
        });
    }
});


// POPUP ABOUT 2
document.addEventListener('DOMContentLoaded', () => {
    // Pastikan kode ini berjalan setelah elemen dimuat
    const openFaktaButton2 = document.getElementById('open-fakta-popup-2');
    const closeFaktaButton2 = document.getElementById('close-fakta-popup-2');
    const faktaPopup2 = document.getElementById('fakta-popup-2');

    // Cek jika elemen ada sebelum menambahkan event listener
    if (openFaktaButton2 && closeFaktaButton2 && faktaPopup2) {
        
        const openPopup2 = () => {
            faktaPopup2.classList.remove('hidden');
        };

        const closePopup2 = () => {
            faktaPopup2.classList.add('hidden');
        };

        openFaktaButton2.addEventListener('click', (event) => {
            event.preventDefault();
            openPopup2();
        });

        closeFaktaButton2.addEventListener('click', closePopup2);

        faktaPopup2.addEventListener('click', (event) => {
            if (event.target === faktaPopup2) {
                closePopup2();
            }
        });
    }
});