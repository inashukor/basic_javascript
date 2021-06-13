//ambil semua eleme video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

//pilih hanya yang 'JAVASCRIPT LANJUTAN
let jsLanjut = videos.filter(video =>video.textContent.includes('JAVASCRIPT LANJUTAN'))
//ambil durasi video masing2
    .map(item => item.dataset.duration)
//ubah durasi menjadi float, ubah minit jadi saat
    .map(waktu =>{
        //10:30 -> [10,30] split
        const parts = waktu.split(':').map(part => parseFloat(part));
        return (parts[0]*60) + parts[1];
    })
//jumlah kan smua saat
    .reduce((total,detik) => total + detik);

//ubah formatnya jadi jam minit saat
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut /60);
const detik = jsLanjut - menit  * 60;

//simpan di DOM
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} Jam, ${menit} Minit, ${detik} Saat.`;

//jumlah video
const jmVideo = videos.filter(video =>video.textContent.includes('JAVASCRIPT LANJUTAN')).length;

const pjmVideo = document.querySelector('.jumlah-video');
pjmVideo.textContent = `${jmVideo} Video.`;