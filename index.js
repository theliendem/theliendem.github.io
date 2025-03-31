const content = document.getElementById("hidden-content").innerHTML;
document.getElementById("hidden-content").style.display = "none";

// async function navbarStuff() {
// 	const nav = document.querySelector("nav");
// 	nav.style.display = "none";
// 	nav.style.opacity = 0;
// 	nav.style.display = "block";
// 	nav.style.transition = "opacity 0.5s ease-in-out";
// }

document.addEventListener("DOMContentLoaded", function () {
	// navbarStuff();

	const div = document.getElementById("content");

	let i = 0;
	let inTag = false;

	function typeNextCharacter() {
		if (i < content.length) {
			const char = content[i];

			// Update inTag status
			if (char === '<') {
				inTag = true;
			} else if (char === '>') {
				inTag = false;
			}

			// Set typing speed based on whether we're in a tag
			const speed = inTag ? 0 : 35; // Fast for tags, slow for visible text

			// Update the content
			div.innerHTML = content.substring(0, i + 1) + `<span id="cursor">_</span>`;

			// Schedule the next character
			i++;
			setTimeout(typeNextCharacter, speed);
		}

	}
	
	// Start the typing animation
	typeNextCharacter();

	document.getElementById("cursor").innerHTML = "";
});

// document.addEventListener("DOMContentLoaded", function() {
// 	const length = content.length;
// 	const div = document.getElementById("content");

// 	for (let i = 0; i < length; i++) {
// 		let newContent = content.substring(0, i);
// 		let speed = 50;

// 		setTimeout(() => {
// 			div.innerHTML = newContent;

// 			if (content.substring(i, i + 1) === "<") speed = 50;
// 			else if (content.substring(i, i + 1) === ">") speed = 10;

// 			console.log(speed);
// 		}, speed * i);
// 	}
// });