const content = document.getElementById("hidden-content").innerHTML;
document.getElementById("hidden-content").style.display = "none";

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