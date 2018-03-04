var a = {};

function setcollectiontitle() {

    var title = document.getElementById('collectiontitle').value;

    a[title] = [];

    var add = `<ul id="${title}"><a href="#!">${title}</a><button class='btn' onclick='deleteelem(${title})'>Delete</button></ul>`;

    var add1 = `<ul id="${title}" onclick="addtocollection1('${title}')"><a href="#!" data-dismiss="modal">${title}</a></ul>`;

    document.getElementById('coltitle').innerHTML += add;

    document.getElementById('bod').innerHTML += add1;
};