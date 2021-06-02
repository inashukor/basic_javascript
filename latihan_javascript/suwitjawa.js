//buat looping agar sentiasa keluar pop up tannya masih nak main atau tak
tanya = true;
while(tanya){

//pilihan user
var p = prompt('pilih  : gajah, semut, orang');

//pilihan komputer
//input bilangan random
var comp = Math.random(); // function untuk pilih secara random
if(comp <0.34){
    comp = 'gajah';
}else if(comp >= 0.34 && comp<0.67){
    comp='orang';
}else{
    comp='semut';
}

var hasil = '';
//menentukan rules
if(p==comp){
    hasil='Seri!';
}else if(p == 'gajah'){
    // if(comp=='orang'){
    //     hasil ='menang!'
    // }else{
    //     hasil ='Kalah!'
    // }
    hasil = (comp == 'orang')? 'Menang!' : 'Kalah!'; //terniary
}else if(p=='orang'){
    // if(comp=='gajah'){
    //     hasil='kalah!'
    // }else{
    //     hasil='menang!'
    // }
    hasil = (comp == 'gajah')? 'Kalah!' : 'menang!'; //terniary
}else if(p=='semut'){
    hasil = (comp=='orang')? 'Kalah!' : 'Menang!';
}else{
    hasil='Memasukkan pilihan yang  salah';
}

//tampilkan hasilnya 
alert('Kamu memilih: '+p+'dan komputer memilih: '+comp+'\n Maka hasilnya kamu: '+hasil);
tanya = confirm('lagi?');
//bila guna confirm, automatik keluar pop up ok atau cancel
}

alert('Terima kasih sudah bermain suwit jawa')