//fetch(resource,init)
//resource = boleh url / object
//init (optional)
// response = ialah hasil dari fetch
//response(property) 
// response.ok /headers/redirected/status/statusText/type/url/body
//reponse(method)
//clone() error() redirect() blob() ...


//guna jquery ajax and callback

// $('.search-button').on('click',function(){

//     $,ajax({

//         url: 'http://www.omdbapi.com/?apikey=f84202d6&s='+ $('.input-keyword').val(),
//         success: result =>{
//             const movies = result.Search;
//             let cards = '';
//             movies.forEach(m => {
//                 cards += showCards(m);
//             });
//             $('.movie-container').html(cards);
    
//             //ketika button detail diklik
//             $('.modal-detail-button').on('click',function(){
//                 //check ada jalan button detail
//                 // console.log($(this).data(imdbid));
    
//                 $.ajax({
//                     url: 'http://www.omdbapi.com/?apikey=f84202d6&i='+$(this).data('imdbid'),
//                     success: m =>{
//                         const movieDetail = showMovieDetail(m);
//                         $('.modal-body').html(movieDetail);
//                     },
//                     error: (e) => {
//                         console.log(e.responseText);
//                     }
    
//                 });
//             });
    
//             },
//         error: (e) => {
//             console.log(e.responseText);
//         }
//     });
// });

const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click',function(){

    const inputKeyword = document.querySelector('.input-keyword')
    fetch('http://www.omdbapi.com/?apikey=f84202d6&s=' + inputKeyword.value)
    //fetch adalah function di jv yang kembalikan promise (guna then)
        .then(response =>response.json())
        .then(response =>{
            const movies = response.Search;
            let cards = '';
            movies.forEach(m => cards +=showCards(m));
            const movieContainer = document.querySelector('.movie-container');
            movieContainer.innerHTML = cards;

            //ketika button detail di klik
            const modalDetailButton = document.querySelectorAll('.modal-detail-button');
            //kena lopping dulu sebab array
            modalDetailButton.forEach(btn => {
                btn.addEventListener('click',function(){
                    const imdbid = this.dataset.imdbid;
                    fetch('http://www.omdbapi.com/?apikey=f84202d6&i='+imdbid)
                    .then(response => response.json())
                    .then(m =>{
                        const movieDetail = showMovieDetail(m);
                        const modalBody = docoment.querySelector('.modal-body');
                        modalBody.innerHTML= movieDetail;

                    });
                });
            });
        });
    //guna fetch kena tiga baris

});



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