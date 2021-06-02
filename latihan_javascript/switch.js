var item = prompt('masukkkan nama makanan/minuman : \n contoh (nasi,daging,susu,hambuger,softdrink)');

switch (item){
    case 'nasi':
    case 'daging':
    case 'susu' :
        alert ('makanan /minuman sihat');
        break;
    case 'hambuger':
    case 'softdrink' :
        alert ('makanan /minuman tak sihat');
        break;
    default:
        alert ('makanan /minuman salah');
        break;
}