var arr = [];
var movie = "";

function addtocollection(movietitle, rating, releasedate, poster) {
    movie = movietitle;
};

function addtocollection1(title) {

    var arr = collectionarray();
    var a = `<li>${movie}</li>`;

    var ul = document.getElementById(title);
    ul.innerHTML += a;
}