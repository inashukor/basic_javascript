var jmlAngkot = 10;
var angkotBeroperasi =6;
var noAngkot =1 ;

for(noAngkot; noAngkot<=jmlAngkot; noAngkot++){

    if(noAngkot<= angkotBeroperasi && noAngkot !== 5){
    console.log('Angkot no.' + noAngkot + 'beroperasi dengan baik');
    } else if(noAngkot === 8 || noAngkot === 10 || noAngkot === 5){
        console.log('Angkot no.' + noAngkot + 'sedang bercuti');
    }else{
        console.log('Angkot no.' + noAngkot + 'tidak beroperasi');
    }
}