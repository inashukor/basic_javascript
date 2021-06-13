//template literal
//-menggunakan backtick ``
//-multi-line string
//-html fragment
//- expression interpolation
//-tagged template

//1.HTML fragments

const mhs = {
    nama : 'Ina',
    umur : 22,
    no : '9013773',
    email : 'ina@gmail.com'
};

const el = `<div class="mhs">
<h2>${mhs.nama} </h2>
<span class="no">${mhs.no}</span>
</div>`;

document.body.innerHTML = el;

//2. looping
const mhs = [
    {
        nama : 'ina',
        email : 'ina@gmail.com'
    },
    {
        nama : 'alia',
        email : 'alia@gmail.com'
    },
    {
        nama : 'ani',
        email : 'ani@gmail.com'
    },
];

const el  = `<div class="mhs">
${mhs.map(m => `<ul>
    <li>${m.nama} </li>
    <li>${m.email} </li>
</ul>`).join('')}

</div>`;

document.body.innerHTML = el;

//3.conditional
//terniary
const lagu = {
    tajuk : 'hello',
    penyanyi : 'ina'
};

const el = `<div class="lagu">
<ul>
    <li>${lagu.penyanyi}</li>
    <li>${lagu.tajuk} ${lagu.feat ? `(feat. ${lagu,feat})`:``}</li>
</ul>

</div>`;

//4. nested
//Html fragement bersyarat

const mhs = {
    nama : 'hello',
    semester : 5,
    kelas : [
        'cs234',
        'CS776',
        'CS665'
    ]
};

function cetakKelas(kelas){
    return `
    <ol>
        ${kelas.map(mk => `<li>${mk}</li>`).join('')}
    </ol>
    `
}

const el = `<div class="mhs">
<ul>
    <li>${mhs.nama}</li>
    <span class="semester">${mhs.semester}</span>
    <h4>Kelas </h4>
    ${cetakKelas(mhs.kelas)};
</ul>

</div>`;