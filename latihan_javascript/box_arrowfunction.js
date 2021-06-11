const box = document.querySelector('.box');

box.addEventListener('click',function(){

    let satu = 'size';
    let dua = 'caption';

    if(this.classList.contains(satu)){
        [satu,dua]=[dua,satu];
        //sama macam guna temp
        
    }

    this.classList.toggle(satu) // toggle - akan menambahkan class baru kalau belum ada, dia akan menghilangkan kelas jika ada
    setTimeout(() => { // pakai function (), this.classList.toggle('caption'); ni tak baca this yang di atas, outputnya adalah window bukan box
        this.classList.toggle(dua);
    },600);

});

//so kita kena pakai arrow function untuk dia baca box