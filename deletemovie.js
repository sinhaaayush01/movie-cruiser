function deletemovie (elem) {
	console.log(elem);
	//let c1=elem;
	console.log(elem);
	const c=document.getElementById(elem);
	console.log(c);
	c.parentNode.removeChild(c);
	}