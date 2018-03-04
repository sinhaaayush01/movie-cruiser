var a = {};
var c=0;
function setcollectiontitle() {
    var title = document.getElementById('collectiontitle').value;
    a[title] = [];
    var s=`${title}${c}`;
    console.log(s);
    var add = `<ul id="${title}" class='well'><a href="#!" style='text-decoration:none; margin-left:10px;'><b>${title}</b></a><svg xmlns="http://www.w3.org/2000/svg" onclick="deleteelem('${title}','${s}')" width="13" height="13" viewBox="0 0 18 18" style="margin-left:290px;"><path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/></svg></ul>`;
    var add1 = `<ul id="${s}" onclick="addtocollection1('${title}')"><a href="#!" style='text-decoration:none;' data-dismiss="modal"><h6>${title}</h6></a></ul>`;
    document.getElementById('coltitle').innerHTML += add;
    document.getElementById('bod').innerHTML += add1;
};
