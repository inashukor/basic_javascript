// execution context, hoisting & scope

//creation phase pada global context
//javascript akan check keyword var ada tak? dan akan di set dengan undefined
//lepastu kalau jumpa function pulak baru dimasukkan value
//hoisting - jalankan funtion
//window = global object
//this = window
//execution phase

//contoh
var nama = 'ina';
var username = '@ina';

function cetakURL(username){
    var instagramUrl = 'http://instagram.com/';
    return instagramUrl + username;
}

console.log(cetakURL(username));

//contoh
function a(){ 
    console.log('ini a'); //2 .dia akan ke sini, akan hoisting funtion b
    function b(){  //
        console.log('ini b'); // 5. ke sini, akan hoisting function

        function c(){
            console.log('ini c');
        }
        c();// 7. check ada hoisting tak (function)? takda hoisting terus simpan
    }
    b(); // 4. hoisting dulu function b //6. simpan 'ini b'
}
a(); //1. mula dari sini, dia hoisting dulu function a (semua isi dari function a) // 3. simpan 'ini a'