//solution pada callback hell
//promise ialah sebuah object yang akan tentukan sebuah
// event yang aynchronous berjaya atau gagal yang terjadi nanti

//states (fulfilled/rejected/pending)
//callback (resolve/reject/finally)
//action (then/catch)

//contoh promise
let ditepati = true;

const janji1 =new Promise((resolve,reject)=>{
    if(ditepati){
        resolve('janji ditepati');
    }else{
        reject('inngkar janji');
    }

});
//resolve ditangkap oleh then, reject oleh catch
janji1
    .then(response => console.log('OK : '+response))
    .catch(response => console.log('NOT OK : '+response));

//contoh kedua
let ditepati = true;
const janji2 = new Promise((resolve,reject)=>{
    if(ditepati){
        setTimeout(()=>{
            resolve('Ditepati setelah beberapa waktu');
        },2000)
    }else{
        setTimeout(()=>{
            resolve('tidak ditepati setelah beberapa waktu');
        },2000)
    }

});

console.log('mula');
// console.log(janji2.then(()=>console.log(janji2))); - untuk nak tengok process pending kat console log
janji2
    .finally(()=>console.log('Selesai Menunggu'))//finally dijalankan ketikah salah satu response dijalankan. finally dijalankan dulu
    .then(response => console.log('OK : '+response))
    .catch(response => console.log('NOT OK : '+response));

console.log('selesai');

///dalam promise ada method Promise.all()

const film = new Promise((resolve) =>{

    setTimeout(()=>{
        resolve([{
            tajuk: 'Avengers',
            pelakon: 'ina'
        }])
    },1000);
});

const cuaca = new Promise((resolve) =>{

    setTimeout(()=>{
        resolve([{
            bandar: 'gelugor',
            temp: 26
        }])
    },500);
});

// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));

//jalan kan promise sekali gus
Promise.all([film,cuaca])
    // .then(response => console.log(response));
    .then(response =>{
        const [film,cuaca] = response;
        console.log(film);
        console.log(cuaca);
    })