	/*var a = {};
	function setcollectiontitle() {
	    var title = document.getElementById('collectiontitle').value;
	    a[title] = [];
	    //console.log(a);
	    var add = `<ul id="${title}"><a href="#!">${title}</a></ul>`;
	    var add1 = `<ul id="${title}" onclick="settitle(document.getElementById('${title}'))"><a href="#!">${title}</a></ul>`;
	    document.getElementById('coltitle').innerHTML += add;
	    document.getElementById('bod').innerHTML += add;
	};
	
	*/

	var a = {};

	function setcollectiontitle() {

	    var title = document.getElementById('collectiontitle').value;
	  
	    a[title] = [];

	    var add = `<ul id="${title}"><a href="#!">${title}</a></ul>`;

	    var add1 = `<ul id="${title}" onclick="addtocollection1('${title}')"><a href="#!">${title}</a></ul>`;

	    document.getElementById('coltitle').innerHTML += add;

	    document.getElementById('bod').innerHTML += add1;
	};
