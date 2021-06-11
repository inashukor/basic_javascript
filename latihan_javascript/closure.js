//closure
function init(){
    let nama = 'ina'; //variable local
    function tampilNama(){ //ibarat parent and child, dia akan ambik value untuk nama kat parent (dipanggil closure)
        console.log(nama); 

    }
    tampilNama();
}
init();

//kenapa guna closure
//- untuk buat function factories
//- untuk membuat private method

//contoh
let add = function(){
    let counter =0;
    return function(){ //guna closure (inner function)
        return  counter++;
    }
}
let a= add(); //simpan nilai counter = jalankan innner function

console.log(a());
console.log(a());
console.log(a());