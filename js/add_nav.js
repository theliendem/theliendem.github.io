fetch("/assets/nav.html")
	.then(res => res.text())
	.then(text => {
		let oldElem = document.querySelector("script#replace_with_navbar");
		let newElem = document.createElement("nav");
		newElem.id = "navbar";
		newElem.innerHTML = text;
		oldElem.parentNode.replaceChild(newElem, oldElem);

		// Highlight the nav link for the section currently being read
		const navbarItems = newElem.querySelectorAll("ul a");
		const sections = document.querySelectorAll("main section[id]");
		if (!sections.length) return;

		function setActiveLink() {
			let current = sections[0];
			const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 2;
			if (atBottom) current = sections[sections.length - 1];
			else if (window.scrollY > 0) {
				sections.forEach(section => {
					if (section.getBoundingClientRect().top <= window.innerHeight / 3) current = section;
				});
			}

			const href = current.id === "intro" ? "/" : `/#${current.id}`;
			navbarItems.forEach(item => {
				item.classList.toggle("active", item.getAttribute("href") === href);
			});
		}

		setActiveLink();
		window.addEventListener("scroll", setActiveLink, { passive: true });
	});
