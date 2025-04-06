const content = document.getElementById("hidden-content").innerHTML;
document.getElementById("hidden-content").style.display = "none";

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
		}
	}

	// Start the typing animation
	typeNextCharacter();
});