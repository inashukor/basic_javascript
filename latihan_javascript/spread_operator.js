//spread operator
//memecah iterable jadi single element
// bila nak pakai?

//1. menggabungkan 2 array
const mhs = ['ina', 'a', 'b'];
const dosen = ['ani', 'c', 'd'];

const orang = [...mhs , ...dosen];
const orang = [...mhs , 'amin', ...dosen]; //senang nak tambah array baru
//sama dengan concat
const orang = mhs.concat(dosen);

console.log(orang);

//2. copy array tapi tak kacau array lama.
const mhs  = ['ina', 'a', 'b'];
// const mhs1 = mhs; // dia akan replace array mhs jugak

const mhs1 = [...mhs];
msh1 = "fajar";

console.log(mhs)

//untuk spread nama aminah
const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;
console.log(huruf);
