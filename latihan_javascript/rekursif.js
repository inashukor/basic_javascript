// error :  maximun call stack size exceeded

function tampilAngka(n){
    console.log(n);
    return tampilAngka(n-1);
}

tampilAngka(10);
//maksudnya berlakunya rekursif(pengulangan tanpa ada contiton berhenti)
//BASE CASE - condition akhir  dari rekursif yang menghasilkan nilai
//contoh base case if()

function cetakAngka(n){
    if(n===0){
        return;
    }
    console.log(n);
    cetakAngka (n-1);
}

cetakAngka(10);

//rekursif menggantikan rekursif