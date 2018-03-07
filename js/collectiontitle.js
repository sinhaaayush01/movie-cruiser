let a = {};
let c = 0;
import {getMovie} from './searchmoviemain'
//import {setcollectiontitle} from './collectiontitle'
import {deleteelem} from './deleteelement'
import {deletemovie} from './deletemovie'
import {addtocollection,addtocollection1} from './addtocollection'
import {collectionarray} from './collectionarray'
export function setcollectiontitle() {
    let title = $("#collectiontitle").val();
    a[title] = [];
    let s = `${title}${c}`;
    console.log(s);
    $("#coltitle").append(`<ul id="${title}" class='well'><a href="#!" style='text-decoration:none; margin-left:10px;'><b>${title}</b></a><svg xmlns="http://www.w3.org/2000/svg" onclick="deleteelem('${title}','${s}')" width="13" height="13" viewBox="0 0 18 18" style="margin-right:30px; margin-left:40px;"><path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/></svg></ul>`);
    $("#bod").append(`<ul id="${s}" onclick="addtocollection1('${title}')"><a href="#!" style='text-decoration:none;' data-dismiss="modal"><h6>${title}</h6></a></ul>`);
};
window.setcollectiontitle=setcollectiontitle;