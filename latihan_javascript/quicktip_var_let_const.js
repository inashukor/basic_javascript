//quick tip
//var vs let vs const

console.log(i);
var i = 10

//output akan jadi undefined

//gantikan dengan let atau const
//output akan error (bisakan defined dulu)

//var guna fucntion scope
//so nak jadikan dia macam block scope kena macam ni
(function(){
    for(var i =0;i<10;i++){
        console.log(i);
    }
}());

//console.log(i); //ni akan jadi error sebab takle acces value i dalam function scope

// guna ja let, kita takleh acces function dari luar (block scope)
for(let i =0;i<10;i++){
    console.log(i);
}   
console.log(i);

//const kalau nilai tak berubah - meminalis perubahan state
//tip- untuk for guna let