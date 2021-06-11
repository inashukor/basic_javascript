// function declaration
// function identifier (parameter opt){}
//(flexible)konsep hoisting - buat function dulu then panggil atau panggil dulu baru buat funciton
setInterval (function(){
    console.log('');
});

// function expression
// function identifier opt (parameter opt){}
// contoh : simpan dalam variable
var tampilpesan = function (nama){}
//(powerful) sebagai closure / argument untuk function  lain / immediately invoked function  expression
