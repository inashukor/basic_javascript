//perbezaan array adalah array=index, object=nama
//contoh
var Orang = {
    //properti
    nama:'Ina',
    umur:31,
    pekerjaan: 'pelajar',
    //method
    siapa : function(){
        return 'Hai, nama saya '+this.nama+' usia saya '+this.umur
        +'tahun, dan saya adalah seorang '+this.pekerjaan;
    }
}
//boleh jugak display cara orang[nama];
//cara membuat object
//1-object literal
var mhs = {
    nama : "ina",
    no : "02887",
    email:"ina@gmail",
    kursus:"cs"
}

var mhs2 = {
    nama2 : "ani",
    no2 : "03887",
    email2:"ani@gmail",
    kursus2:"cs"
}

//-function declaration
function buatObjectMhasiswa(nama,no,email,kursus)
{
    var mhs = {} // declaration mesti ada
    mhs.nama = nama;
    mhs.no = no;
    mhs.email=email;
    mhs.kursus=kursus;
    return mhs; // return mesti ada
}

var  mhs3 = buatObjectMhasiswa('ina','7987','ina@gmail','cs');

//3-constructur function (keyword 'new') 
function Mahasiswa(nama,no,email,kursus){
    this.nama = nama;
    this.no = no;
    this.email = email;
    this.kursus = kursus;
}
var mhs4 =  new Mahasiswa('ina','7987','ina@gmail','cs'); //kalau tak letak keyword new java akan konfius dengan function declation

//-object.create


//konsep this - mengambalikan konsep global (akan mengembalikan nilai object yang ada. )