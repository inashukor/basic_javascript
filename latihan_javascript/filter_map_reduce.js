// map  filter reduce
//map menghasilkan array baru
//reduce menghasilkan 1 aray baru

//contoh
const angka = [-1,8,9,1,4,-5,-4,3,2,9];

//mencari angka =>3
//for
// const newAngka =[]
// for(let i =0; i < angka.length ; i++){
//     if(angka[i]>=3){
//         newAngka.push(angka[i]);
//     }
// }
// console.log(newAngka);

//pakai filter
const newAngka = angka.filter(function(a){ //guna function callback
    return a>=3;
});

//contoh arrow function
const newAngka = angka.filter(a => a>=3);

//map - tiap elemnt yang ada guna function yang baru - dia buat fucntion baru tapi yang lama tetap ada
//setiap elemnt kali 2
const newAngka = angka.map(a=>a *2);
console.log(angka);
console.log(newAngka);

//reduce - melakukan sesuatu pada seluruh element
//jumlahkan seluruh element array
//reduce ada dua argument
//argument tu buat apa2 char or characer pon takpa
const newAngka = angka.reduce((accumulator,currentValue)=>
accumulator + currentValue,0); //ada nilai awal, nilai awal adalah null secara default / boleh set nilai awal apa
console.log(newAngka);


// method chaining - gabungkan method2 ni dalam satu cara
//cari angka >5
//kalikan dengan 3
//jumlahkan

const hasil= angka.filter(a=>a>5) //filter angka yang besar dari 5
    .map(a=> a*3) // buat array bary yang angka tadi * 3
    .reduce((acc,cur)=>acc+cur,0); //tambahkan semua angka dalam array, angka awal adalah 0

    console.log(hasil);