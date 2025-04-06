fetch("/assets/nav.html")
	.then(res => res.text())
	.then(text => {
		let oldElem = document.querySelector("script#replace_with_navbar");
		let newElem = document.createElement("nav");
		newElem.id = "navbar";
		newElem.innerHTML = text;
		oldElem.parentNode.replaceChild(newElem, oldElem);

		// Set active class for the current page
		const pageName = window.location.href.split("/").pop().replace(/\.html$/, "");
		if (pageName === "index") pageName = "";
		const navbar = document.getElementById("navbar");
		const navbarItems = navbar.querySelectorAll("a");
		navbarItems.forEach(item => {
			if (item.getAttribute("href") === `/${pageName}`) {
				item.classList.add("active");
			}
		});
	});