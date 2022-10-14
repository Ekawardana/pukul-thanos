const tanah = document.querySelectorAll('.tanah');
const thanos = document.querySelectorAll('.thanos');
const papanSkor = document.querySelector('.papan-skor');
const pop = document.querySelector('#pop');

let tanahSebelumnya;
let selesai;
let skor;

function randomTanah(tanah) {
    const t = Math.floor(Math.random() * tanah.length);
    const tRandom = tanah[t];
    if (tRandom == tanahSebelumnya) {
        randomTanah(tanah);
    }
    tanahSebelumnya = tRandom;
    return tRandom;
}

function randomWaktu(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function munculkanThanos() {
    const tRandom = randomTanah(tanah);
    const wRandom = randomWaktu(300, 1000);
    tRandom.classList.add('muncul');

    setTimeout(() => {
        tRandom.classList.remove('muncul');
        if (!selesai) {
            munculkanThanos();
        }
    }, wRandom);
}

function mulai() {
    selesai = false;
    skor = 0;
    papanSkor.textContent = 0;
    munculkanThanos();
    setTimeout(() => {
        selesai = true;
    }, 10000);
}

function pukul() {
    skor = skor + 1;
    this.parentNode.classList.remove('muncul');
    // pop.play();
    papanSkor.textContent = skor;
}

thanos.forEach(t => {
    t.addEventListener('click', pukul);
});