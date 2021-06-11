
//ni kita panggil higher order function yang ada function dalam parameter
//function pada parameter dipanggil callback

function KerjakanTugas(matakuliah, selesai){
    console.log(`Mulai kerjakan tugas ${matakuliah}...`);
    selesai();
}