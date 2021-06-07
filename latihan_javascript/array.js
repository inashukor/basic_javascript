//manipulasi array

//1.menambah array
var arr=[];
arr[0] ="ina";
arr[1] ="1";
arr[2] ="x";
arr[3] ="hai";

console.log(arr);

//2.menghapus isi array
var arr=["ina","hai","ali"];
arr[1]=undefined;
console.log(arr);

//3.menampilkan isi arary
var arr=["ina","ani","ali"];
for(var i=0; i<arr.length;i++){
    console.log("Mahasiswa ke "+(i+1) + "ialah" + arr[i]);
}

//method pada array 
//1. join - mengubah isi array jadi string 
var arr=["ina","ani","ali"];
console.log(arr.join());
//so output : ina,ani,ali (tak keluar dalam bentuk object) default akan separate by koma
//nak tukar jadi - 
console.log(arr.join(' - '));

//2. push&pop(element terakhir) shihft&unshift(elment pertama) - digunakan  untuk menammbah atau memhapus elemnt array
arr.push('amir'); // nama akan dimasukkan diakhir array
arr.pop();//delete element array yang terakhir

arr.unshift('amir'); // nama akan dimasukkan diawal array
arr.shift();//delete element array yang pertama

//3. splice - untuk masukkan array di tengah2
//splice(indexAwal, ada yang nak dihapus tak? dan berapa? selepas indexAwal, elemenBaru1, elemenBaru2,... )
var arr=["ina","ani","ali"];
arr.splice(2,0,'Doddy'); //tambah nama Doddy selepas ani

arr.splice(1,2,'doddy','fitri');//mula dari index 1, akan delete 2 lepastu tambah doddy dan fitri

//4. slice - hiris sebuah array copy jadi array baru (array lama akan kekal sama)
//slice(awal(ke array baru),akhir(stop sebelum index akhir));
var arr=["ina","ani","ali","akim","aminah"];
//conoth nak ambik ali dan akim
var arr2 = arr.slice(2,4);

//5. forEach (pengulangan == for)
angka =[1,2,3,4,5,6,7,8];
for (var i=0;i<angka.length;i++){
    console.log(angka[i]);
}

angka.forEach(function(e){
    console.log(e);
});

//6. map (sama dengan forEach tapi dia mengembalikan array - ada return value)
angka =[1,2,3,4,5,6,7,8];
var angka2 = angka.map(function(e){
    return e * 2;
});
console.log(angka2.join(' - '));

//7. sort
angka =[1,2,3,4,6,7,8,5];
angka.sort();
console.log(angka.join(' - '));

//8. filter - mengembalikan banyak nilai dalam bentuk array []
angka =[1,2,3,4,6,7,8,5];
var angka2 = angka.filter(function(x){
    return x > 5;
});
console.log(angka2.join(' - '));

//9. find - mengembalikan 1 nilai ja (takleh dalam bentuk array)
angka =[1,2,3,4,6,7,8,5];
var angka2 = angka.find(function(x){
    return x > 5;
});
console.log(angka2); //takleh join sebab find akan mengambalikan 1 nilai ja yang jumpa dulu




