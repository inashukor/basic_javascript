//lebih ringkas dari function epression

//function expression
const tampilNama = function(nama){
    return `Halo, ${nama}`;
}
console.log(tampilNama('ina'));

//arrow function
const tampilNama = (nama) =>{
    return `halo, ${nama}`;
}

//contoh
let mahasiswa =['ina','ani','amir'];

//function expression
let jumlahHuruf = mahasiswa.map(function(nama){
    return nama.length;
});
console.log(jumlahHuruf);

//arrow function - takda konsep this
let jumlahHuruf = mahasiswa.map(nama => nama.length);
console.log(jumlahHuruf);

let jumlahHuruf = mahasiswa.map(nama => ({
    nama:nama,
    jumlahHuruf : nama.length
})); //kembalikan dalam bentuk object, bukan array
console.log(jumlahHuruf);

//konsep this pada error function
const Mahasiswa = function(){
    this.nama = 'ina';
    this.umur = 20;
    this.sayHello = function(){
        console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur}`);
    }
}
const Ina = new Mahasiswa();

//ubah jadi arrow function
const Mahasiswa = function(){
    this.nama = 'ina';
    this.umur = 20;
    this.sayHello = ()=>{ //kalau pada method boleh tukar jadi arrow function
        console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur}`);
    }
}
const Ina = new Mahasiswa();
