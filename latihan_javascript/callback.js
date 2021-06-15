// synchronous call back
//-function yang dikirim sebagai parametr kepada function yang lain

function halo(nama){
    alert(`halo ${nama}`);
}

function tampilkanPesan(callback){
    const nama = prompt('Masukkan Nama :');
    callback(nama);
}
tampilkanPesan(halo);

// asynchronoues call back

function getDataMahasiswa(url,succes,error){//success dan error adalh callback

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4){
            if(xhr.status === 200){
                succes(xhr.response);
            }else if (xhr.status === 404){
                error();
            }
        }
    }
    xhr.open('get',url);
    xhr.send();
}

console.log('mula');

getDataMahasiswa('data/Mahasiswa.json',result =>{
    const mhs = JSON.parse(result);
    mhs.forEach(m =>console.log(m.nama));
}, () => {

});

console.log('selesai');

//contoh guna jquery (pastikan coppy script jquery masuk dalam html)
console.log('mula');
$.ajax({
url: 'data/mahasiswa.json',
succes: (mhs) => {

    mhs.forEach( m => console.log(m.nama));
},
error: (e) => {
     console.log(e.responseText);
}
});

console.log('selesai');
