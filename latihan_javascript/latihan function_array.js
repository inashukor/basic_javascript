var penumpang = [];
var tambahPenumpang = function(namaPenumpang , penumpang){
//jika bas kosong
if(penumpang.length == 0){
  //tambah penumpang di awal array
penumpang.push(namaPenumpang);
  //kembalikan isi array dan keluar dari function
return penumpang;
}//else
else{
  //check kerusi dari awal
  for(var i=0;i<penumpang.length;i++){
    //jika ada kerusi kosong 
    if(penumpang[i]==undefined){
       //tambah penumpang dikerusi tersebut
       penumpang[i] = namaPenumpang;
       //kembalikan isi array & keluar dari function
       return penumpang;
    }
    //jika sudah ada nama sama
    else if(penumpang[i] == namaPenumpang){
      //error message
      console.log(namaPenumpang +"sudah ada di dalam bas");
      //kembalikan isi array keluar dari function
      return penumpang;
    }//jika seluruh kerusi terisi 
    else if(i == penumpang.length -1){
      //tambah penumpang di akhir array
      penumpang.push(namaPenumpang);
      //kembalikan isi array dan keluar dari function
      return penumpang;
    }
  }
}
}

var hapusPenumpang = function(namaPenumpang, penumpang){
    //jika bas kosong
    if(penumpang.length==0){
     //tampilkan message bahawa bas kosong
    console.log("Angkot masih kosong");
     //tidak mungkin ada penumpang turun
    }else{//else
     //tengok array dari awal
    for( var i =0; i<penumpang.length; i++){
      //jika nama penumpang sama
        if(penumpang[i]==namaPenumpang){
        //hapus penumpang dengan mengubah ke nama
            penumpang[i]==undefined;
        //jadi undefined
        }else if(i==penumpang.length - 1){//jika tidak ada nama yang sesuai
       //tampilkan error message 
            console.log(namaPenumpang+" tidak ada dalam bas ini");
        }
    }
}
return penumpang;
}