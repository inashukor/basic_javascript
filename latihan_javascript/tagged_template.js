//tagged template
const nama = 'ina';
const umur = 23;

function coba(strings,...values)//...apa2ja akan mengambil semua value/attribute yang ada
{
    // let result = '';
    // strings.forEach((str,i)=>{
    //     result += `${str}${values[i] || ''}`;
    // });
    // return result;

    //guna reduce
    return strings.reduce((result,str,i) => `${result}${str}${values[i] || ''}`,'');
}

const str = coba `Hello nama saya ${nama}, saya ${umur} tahun.`;
console.log(str);


//highlight
const nama = 'ina';
const umur = 23;

function highlight(strings,...values)//...apa2ja akan mengambil semua value/attribute yang ada
{
    //guna reduce
    return strings.reduce((result,str,i) => `${result}${str}<span class="hl">${values[i] || ''} </span>`,'');
}

const str = highlight `Hello nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);
document.body.innerHTML = str;


//contoh dekat html kita nak output dia teruus ada highlight kat value which is nama dan umur
//kat page html
// <style>
// .h1{
//     background-color: salmon;
// }
// </style>

//penggunaan ?
//-escaping HTML tags
//-translation
//-styled component