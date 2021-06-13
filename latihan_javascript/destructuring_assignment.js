//buat nilai terpisah
//destruction  variable

//destruction array,
const perkenalan = ['halo','nama','saya','ina'];
const [salam,satu,dua,nama] = perkenalan;

//skip item
const [salam , , ,nama] = perkenalan;

//swap item
let a = 1;
let b = 2;

[a,b] = [b,a];
console.log(a);
console.log(b);
//contoh output akan jadi 2 1

//guna sebagai return value pada function
function coba(){
    return [1,2];
}

const [a,b] = coba();
console.log(b);

//rest parameter yang titik 3 ...value untuk nilai yang bertambah sebab taktau array akan ada berapa
const [a,...values] = [1,2,3,4,5]; //mungkin nilai pada array ni akan bertambah
console.log(a);

// destructuring object
const mhs = {
    nama : 'ina',
    umur : 24
}
const {nama,umur}=mhs;
console.log(nama);

//assign variable ke nama baru
const mhs = {
    nama : 'ina',
    umur : 24
}
const {nama:n,umur:u}=mhs;
console.log(n);


//beri nilai default value
const mhs = {
    nama : 'ina',
    umur : 24,
    email :'ina@gmail.com'
}
const {nama:n,umur:u,email:e ='email@default.com'}=mhs; //buat nilai default kalau tadak nilai
console.log(n);

//rest parameter
const mhs = {
    nama : 'ina',
    umur : 24,
    email :'ina@gmail.com'
}
const {nama:n, ...value}=mhs; //buat nilai default kalau tadak nilai
console.log(value);

//mengambil field pada object, setelah dikirim sebagai parameter untuk function
const mhs = {
    id:123,
    nama : 'ina',
    umur : 24,
    email :'ina@gmail.com'
}
function getIdMhs({id}){ //tapi kat sini ambik id ja atau apa2 ja
    return id;
}

console.log(getIdMhs(mhs)); //dikkirim obbject lengkap