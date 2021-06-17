//definition
//asyncronous function
// sebuah async function yang tunggu promise selesai

// const coba = new  Promise (resolve =>{
//     setTimeout(()=>{
//         resolve('selesai')
//     },2000);
// });
// // console.log(coba); //bila run, dia akan jadi pending sebab jalan secara syncronous
//kena guna .then, kalau coba tu resolve baru run
// coba.then(() =>console.log(coba));

//kalau guna async dengan await
function cobaPromise(){
    return new  Promise (resolve =>{
        setTimeout(()=>{
            resolve('selesai')
        },2000);
    });
}

// const coba = cubaPromise();
// coba.then(()=> console.log(coba)); ni kalau guna then

async function cobaAsync(){
    const coba = await cubaPromise();
    console.log(coba);
}
cobaAsync();    

//ada resolve dan reject guna then
function cobaPromise(){
    return new  Promise ((resolve,reject) =>{
        const waktu = 3000;
        if(waktu < 5000){
        setTimeout(()=>{
            resolve('selesai')
        },waktu);
    }else{
        reject('lama!');
    }
    });
}

const coba = cubaPromise();
coba //cara pangdil promise guna then / catch
    .then(()=> console.log(coba))
    .catch(()=>console.log(coba));

//guna async dan await
function cobaPromise(){
    return new  Promise ((resolve,reject) =>{
        const waktu = 3000;
        if(waktu < 5000){
        setTimeout(()=>{
            resolve('selesai')
        },waktu);
        }else{
            reject('lama!');
        }
    });
}

async function cobaAsync(){ //try unutk then , catch untuk catch
    try{
    const coba = await cubaPromise();
    console.log(coba);
    }catch(e){
        console.log(e);
    }
}
cobaAsync();    
