var a = {};
var c=0;
function setcollectiontitle() {
    var title = document.getElementById('collectiontitle').value;
    a[title] = [];
    var s=`${title}${c}`;
    console.log(s);
    var add = `<ul id="${title}"><a href="#!">${title}</a><button class='btn' onclick="deleteelem('${title}','${s}')">Delete</button></ul>`;
    var add1 = `<ul id="${s}" onclick="addtocollection1('${title}')"><a href="#!" data-dismiss="modal">${title}</a></ul>`;
    document.getElementById('coltitle').innerHTML += add;
    document.getElementById('bod').innerHTML += add1;
};
