// The real content stays in #hidden-content (invisible, but holding its space so nothing below jumps).
// The typing animation plays in #content on top of it, then the finished copy takes its place.
const hiddenContent = document.getElementById("hidden-content");
const content = hiddenContent.innerHTML;

document.addEventListener("DOMContentLoaded", function () {
	const div = document.getElementById("content");

	let i = 0;
	let inTag = false;

	function typeNextCharacter() {
		if (i < content.length) {
			const char = content[i];

			let newContent = "";

			if (i == content.length-1) newContent = content.substring(0, i + 1);
			else newContent = content.substring(0, i + 1) + `<span id="cursor">_</span>`;

			// Update inTag status
			if (char === '<') {
				inTag = true;
			} else if (char === '>') {
				inTag = false;
			}


			if (inTag) {
				// If we're in a tag, just add the character without delay
				div.innerHTML = newContent;
				i++;
				typeNextCharacter();
			} else {
				// If we're not in a tag, add the character with delay
				div.innerHTML = newContent;
				i++;
				setTimeout(typeNextCharacter, 4);
			}
		} else {
			// Done typing: the typed copy now matches the original, so let it take the original's place
			hiddenContent.remove();
			div.style.position = "static";
			div.removeAttribute("aria-hidden");
		}
	}

	// Start the typing animation
	typeNextCharacter();
});
