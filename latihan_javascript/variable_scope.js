// block scope (didalam {})
// java script guna function scope

//global scope / windows scope
var a = 1;

function tes(){
    //variable local
    //name conflict (nama sama tapi scope berbeza)
    var a = 2;
console.log(a); // ni akan keluar 1, variable local

}
tes();
console.log(a); // ni akan keluar 1, variable global