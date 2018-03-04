function deleteelem (title,mtitle) {
	console.log(title);
	var c=document.getElementById(title);
	var c1=document.getElementById(mtitle);
	console.log(c);
	console.log(c.parentNode);
	c.parentNode.removeChild(c);
	c1.parentNode.removeChild(c1);
	}