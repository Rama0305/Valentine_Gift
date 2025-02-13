const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

function handleTestClick() {
    window.location.href = "click_this.html";
}


function createFallingItem() {
    const item = document.createElement('div');
    item.classList.add('falling-item');
    item.innerText = Math.random() > 0.5 ? '🌸' : '🍫';
    item.style.left = Math.random() * 100 + 'vw';
    item.style.animationDuration = (Math.random() * 3 + 2) + 's';
    item.style.top = '-50px';
    document.body.appendChild(item);
    setTimeout(() => item.remove(), 5000);
}

setInterval(createFallingItem, 500);



// Musik akan otomatis dimainkan, pastikan browser mendukung autoplay
document.addEventListener("DOMContentLoaded", function() {
    var music = document.getElementById("bg-music");
    music.volume = 0.5; // Atur volume musik agar tidak terlalu keras
    music.play();
});

// Daftar lagu yang ingin diputar
// const playlist = [
//     "valentine.mp3",
//     "Bored.mp3",
//     "Let-You-Break.mp3",
//     "Falling-Behind.mp3",
//     "Magnolia.mp3",
//     "Promise.mp3",
//     "Best-part.mp3",
//     "here-With-me.mp3"
// ];

// let currentSongIndex = 0; // Menyimpan indeks lagu saat ini
// const audio = document.getElementById("bg-music");

// // Fungsi untuk memutar lagu berikutnya setelah lagu selesai
// function playNextSong() {
//     currentSongIndex = (currentSongIndex + 1) % playlist.length; // Looping playlist
//     audio.src = playlist[currentSongIndex]; // Ganti sumber audio
//     audio.play(); // Mulai pemutaran
// }

// // Event listener: Saat lagu selesai, ganti ke lagu berikutnya
// audio.addEventListener("ended", playNextSong);

// // Mulai pemutaran pertama kali
// audio.src = playlist[currentSongIndex];
// audio.play();
