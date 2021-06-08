//pengelolaan bas
//-pemandu
//-laluan bas
//-wang
//-penumpang
 //- penumpang naik
//- penumpang turun

//membuat object bas
function Bas(pemandu,laluan,wang,penumpang){
    this.pemandu = pemandu;
    this.laluan = laluan;
    this.wang = wang;
    this.penumpang = penumpang;
    this.penumpangNaik = function(namaPenumpang){
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }
    this.penumpangTurun = function(namaPenumpang,bayar){
        if(this.penumpang.length === 0){
            alert('Bas masih kosong');
            return false;
        }
        for (var i = 0 ; i<this.penumpang.length;i++){
            if(this.penumpang[i]==namaPenumpang){
                this.penumpang[i]=undefined;
                this.wang +=bayar;
                return this.penumpang;
            }
        }
    }
}

var Bas1 = new Bas("ina",['pokok sena','alor setar','kuala nerang'],0,[]);
var Bas2 = new Bas("ani",['pokok sena','alor setar','kuala nerang'],0,[]);

//contoh latihan
//1. object literal
let mahasiswa = {
    nama : 'ina',
    energy: 10,
    makan : function(porsi){
        this.energy = this.energy + porsi;
        console.log(`Hello ${this.nama}, selamat makan`);
    }
}
//kalau nak tambah mahasiswa kena nama lain, takleh nama object yang sama
let mahasiswa1 = {
    nama : 'ani',
    energy: 20,
    makan : function(porsi){
        this.energy = this.energy + porsi;
        console.log(`Hello ${this.nama}, selamat makan`);
    }
}

//2.function declaration
//kita buat function dulu (template) lepastu jangan lupa return value

//buat method di luar, obbject literal (const / let)
const methodMahasiswa = {
    makan : function(porsi){
        this.energy += porsi;
        console.log(`Hello ${this.nama}, selamat makan`);
    },

    main : function(jam){
        this.energy -= jam;
        console.log(`Hello ${this.nama}, selamat bermain`);
    },
    tidur: function(jam){
        this.energy += jam *2;
        console.log(`Hello ${this.nama}, selamat tidur`);

    }
};


function Mahasiswa(nama,energy){
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energy = energy;
    // mahasiswa.makan = methodMahasiswa.makan;
    // mahasiswa.main = methodMahasiswa.main;
    // mahasiswa.tidur = methodMahasiswa.tidur;
    //guna Object.create(methodMahasiswa); auto link ke object literal yang kita buat

    
    return mahasiswa;
}
let ina = Mahasiswa('ina',20); // dia akan cari function return

//3. constructor function
//ada keyword new - takyah return
function Mahasiswa(nama,energy){
    this.nama = nama;
    this.energy = energy;

    this.makan = function(porsi){
        this.energy += porsi;
        console.log(`Hello ${this.nama}, selamat makan`);
    }

    this.main = function(jam){
        this.energy -= jam;
        console.log(`Hello ${this.nama}, selamat bermain`);
    }
}

let ina = new Mahasiswa('ina',20)

//contoh constructor function
function Mahasiswa(nama,energy){
    // let mahasiswa = {};
    this.nama = nama;
    this.energy = energy;  
    // return mahasiswa;
}
//guna prototype untuk buat function baru, untuk return value
//inheritence = prototype sama dengan class
Mahasiswa.prototype.makan = function(porsi){
    this.energy += porsi;
    return console.log(`Halo ${this.nama}, jemput makan`)
}

Mahasiswa.prototype.main = function(jam){
    this.energy -= jam;
    return console.log(`Halo ${this.nama}, selamat bermain`)
}

Mahasiswa.prototype.tidur= function(jam){
    this.energy += jam *2;
    return console.log(`Helo ${this.nama}, selamat berehat`)
}
