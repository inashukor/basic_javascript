//for ..of 
const mhs = ['ina','alia','ani'];

//for biasa
for (let i = 0;i<mhs.lenght ; i++){
    console.log(mhs[i]);
}

//forEach
mhs.forEach(m => console.log(m));

//for .. of
for( const m of mhs){
    console.log(m);
}

//string - boleg guna for .. of untuk looping string
//takleh guna forEach sebab nama bukan array
const nama ='ina';
for(const m of nama){
    console.log(m); 
}
//output dia akan jadi
//  i
//  n
//  a

//forEach ada index
const mhs = ['ina','alia','ani'];

mhs.forEach((m,i)=>{
    console.log(`${m} adalah mahasiswa ke- ${i+1}`);
});



//for ..in
//hanya untuk property pada object
const mhs ={
    nama:'ina',
    umur: 12
}

for(m in mhs){
    console.log(m); // ambik variable ja
    console.log(mhs[m]); // ambik value
}