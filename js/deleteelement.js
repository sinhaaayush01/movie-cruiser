export function deleteelem (title,mtitle) {
	var c=document.getElementById(title);
	var c1=document.getElementById(mtitle);
	c.parentNode.removeChild(c);
	c1.parentNode.removeChild(c1);
	};