fetch("/assets/nav.html")
	.then(res => res.text())
	.then(text => {
		let oldElem = document.querySelector("script#replace_with_navbar");
		let newElem = document.createElement("nav");
		newElem.innerHTML = text;
		oldElem.parentNode.replaceChild(newElem, oldElem);
	});