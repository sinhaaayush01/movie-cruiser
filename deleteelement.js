function deleteelem (title) {
	console.log(title);
	var c=document.getElementById(title);
	console.log(c);
	console.log(c.parentNode);
	c.parentNode.removeChild(c);
	}