var arr = [];
var movie = "";
import {getMovie} from './searchmoviemain'
import {setcollectiontitle} from './collectiontitle'
import {deleteelem} from './deleteelement'
import {deletemovie} from './deletemovie'
//import {addtocollection,addtocollection1} from './addtocollection'
import {collectionarray} from './collectionarray'
export function addtocollection(movietitle, rating, releasedate, poster) {
   movie = movietitle;
};
export function addtocollection1(title) {
    var arr = collectionarray();
    console.log(arr);
    var a = `<li id='${title}${movie}' style="margin-left:3px;"><i class="fa fa-file-movie-o"></i>  ${movie}<svg xmlns="http://www.w3.org/2000/svg" onclick="deletemovie('${title}${movie}')" width="12" height="12" viewBox="0 0 12 12" style="margin-left:5px;"><path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/></svg></li>`;
    var ul = document.getElementById(title);
    ul.innerHTML += a;
};
window.addtocollection=addtocollection;
window.addtocollection1=addtocollection1;