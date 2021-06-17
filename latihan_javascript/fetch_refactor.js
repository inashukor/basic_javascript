
// const searchButton = document.querySelector('.search-button');
// searchButton.addEventListener('click',function(){

//     const inputKeyword = document.querySelector('.input-keyword')
//     fetch('http://www.omdbapi.com/?apikey=f84202d6&s=' + inputKeyword.value)
//     //fetch adalah function di jv yang kembalikan promise (guna then)
//         .then(response =>response.json())
//         .then(response =>{
//             const movies = response.Search;
//             let cards = '';
//             movies.forEach(m => cards +=showCards(m));
//             const movieContainer = document.querySelector('.movie-container');
//             movieContainer.innerHTML = cards;

//             //ketika button detail di klik
//             const modalDetailButton = document.querySelectorAll('.modal-detail-button');
//             //kena lopping dulu sebab array
//             modalDetailButton.forEach(btn => {
//                 btn.addEventListener('click',function(){
//                     const imdbid = this.dataset.imdbid;
//                     fetch('http://www.omdbapi.com/?apikey=f84202d6&i='+imdbid)
//                     .then(response => response.json())
//                     .then(m =>{
//                         const movieDetail = showMovieDetail(m);
//                         const modalBody = docoment.querySelector('.modal-body');
//                         modalBody.innerHTML= movieDetail;

//                     });
//                 });
//             });
//         });
//     //guna fetch kena tiga baris

// });

const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function(){ // ni asynchronous kena bagitau java /nak ada roor handling guna blck try catch
    try{
    const inputKeyword = document.querySelector('.input-keyword');
    const movies = await getMovies(inputKeyword.value);
    updateUI(movies);
    }catch(e){
        alert(e);
    }
});

function getMovies(keyword){
    return fetch('http://www.omdbapi.com/?apikey=f84202d6&s=' + keyword)
    //fetch adalah function di jv yang kembalikan promise (guna then)
    //check hanya akan jalan kalau data betul
        .then(response =>{
            if(!response.ok){
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(response => {
            if(response.response === "False"){
                throw new Error(response.Error);
            }
            return response.Search; 
        });

}

function updateUI(movies){
    let cards = '';
    movies.forEach(m => cards +=showCards(m));
    const movieContainer = document.querySelector('.movie-container');
    movieContainer.innerHTML = cards;

}

//event binding
//event yang awalnya takda tapi dia simpan
document.addEventListener('click', async function(){ //ni adalah synchronous tapi getMovieDetail tu promise, so kita kena buat dia async
    //jangan pakai this, kalau this dia akan baca dokumen
    if(e.target.classList.contains('.modal-detail-button')){
        const imdbid = e.target.dataset.imdbid;
        const movieDetail = await getMovieDetail(imdbid); //tambah await kat sini sebab async
        updateUIDetail(movieDetail);
    }
});

function getMovieDetail(imdbid){
    fetch('http://www.omdbapi.com/?apikey=f84202d6&i='+imdbid)
        .then(response => response.json())
        .then(m => m);
}

function updateUIDetail(m){
    const movieDetail = showMovieDetail(m);
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = movieDetail;
}




function showCards(m){
    return ` <div class="col-md-4 my-5">
                <div class="card">
                    <img src="${m.Poster}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${m.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                        <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
                    </div>
                </div>

            </div>`;
}

function showMovieDetail(m){
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${m.Poster}" class="img-fluid">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item"><h4>${m.Title}  (${m.Year}) </h4></li>
                            <li class="list-group-item"><strong>Director : ${m.Director}</strong></li>
                            <li class="list-group-item"><strong>Actors : ${m.Actors}</strong></li>
                            <li class="list-group-item"><strong>Writer : ${m.Writer}</strong>></li>
                            <li class="list-group-item"><strong>Plot :${m.Plot} </strong><br></li>
                        </ul>
                    </div>
                </div>
            </div>`;
}

