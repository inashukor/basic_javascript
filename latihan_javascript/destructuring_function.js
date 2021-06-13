//destructuring

function jumlahKali(a,b){
    return [a+b,a*b];
}

// const jumlah = jumlahKali(2,3)[0];
// const kali = jumlahKali(2,3)[1];
//kena tambah index

//so buat destruct (pisahkan)
const [jumlah,kali] = jumlahKali(2,3);

console.log(kali);
console.log(jumlah);
//make sure urutannya sama array dengan destruct array

//kalau takmau ikut urutan, return value kena jadi object
function jumlahKali(a,b){
    return {
        tambah : a+b,
        kurang : a-b
    };
}

const {kurang,tambah} = jumlahKali(2,3);
console.log(kurang);

//buat destruct pada function argument
const mhs = {
    id:123,
    nama : 'ina',
    umur : 24,
    email :'ina@gmail.com',
    nilai:{
        tugas : 80,
        a :65
    }
}

function cetakMhs({nama,umur,nilai:{tugas,a}}){ //destruct object mhs
    return `halo, nama saya ${nama}, ${umur} tahun dan tugas saya ${tugas} dan ${a}`;
}

console.log(mhs);
