//rest parameter
//rest parameter perlu duk pada akhir parameter

//contoh filter by
function filter(type,...values){
    return values.filter( v => typeof v === type);

}
console.log(filterBy('number',1,2,'Ina',false,10,true,'alia'));