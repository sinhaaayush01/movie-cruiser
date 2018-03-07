
//import {getMovie} from './searchmoviemain'
import {setcollectiontitle} from './collectiontitle'
import {deleteelem} from './deleteelement'
import {deletemovie} from './deletemovie'
import {addtocollection,addtocollection1} from './addtocollection'
import {collectionarray} from './collectionarray'
export function getMovie() {
    document.getElementById("showId").innerHTML = "";
    let searchMovie = $('#searchId').val();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=a616117466cb6301950c066f4a7e360b&language=en-US&query=${searchMovie}&page=1&include_adult=false`)
        .then((res) => {
            res.json()
                .then((data) => {
                    let j = 0;
                    for (let i = 0; i < data.results.length; i += 1) {
                        let poster = `https://image.tmdb.org/t/p/w300/${data.results[i].poster_path}`;
                        if ((poster == "") || (data.results[i].backdrop_path == "")) {
                            console.log("Null");
                            continue;
                        }

                        if (j % 3 == 0) {
                            $("#showId").append(`<div class=row>`)
                        }
                        $("#showId").append(`<div class="col s12 m4">
                                <div class="card">
                                    <div class="card-image waves-effect waves-block waves-light">
                                      <img class="activator" src="${poster}" alt="${data.results[i].original_title}">
                                    </div>
                                    <div class="card-content">
                                      <span class="card-title activator black-text">${data.results[i].original_title}<i class="material-icons right">more_vert</i></span>
                                      <a class="btn-floating halfway-fab waves-effect waves-dark green" data-toggle="modal" data-target="#buttonmodal" onclick="addtocollection('${data.results[i].original_title}','${data.results[i].vote_average}','${data.results[i].release_date}','${poster}')"><i class="material-icons">add</i></a>
                                      <p>Release Date: ${data.results[i].release_date}</p>
                                    </div>
                                    <div class="card-reveal">
                                      <span class="card-title grey-text text-darken-4">${data.results[i].original_title}<i class="material-icons right">close</i></span>
                                      <hr><p>${data.results[i].overview}</p><hr>
                                      <p><h5>Rating</h5> ${data.results[i].vote_average}</p>
                                    </div>
                                </div>
                            </div>
                            `);
                        if (j % 3 == 2) {
                            $("#showId").append(`</div>`);
                        }
                        j++;
                    }
                });
        });
};
window.getMovie=getMovie;