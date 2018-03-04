var arr = [];
var movie = "";

function addtocollection(movietitle, rating, releasedate, poster) {
   movie = movietitle;
};

function addtocollection1(title) {

    var arr = collectionarray();
    var a = `<li id='${movie}' style="margin-left:3px;">${movie}<svg xmlns="http://www.w3.org/2000/svg" onclick="deletemovie('${movie}')" width="12" height="12" viewBox="0 0 12 12" style="margin-left:5px;"><path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/></svg></li>`;

    var ul = document.getElementById(title);
    ul.innerHTML += a;
}