// This is the general script used in every page. Individual pages can have their own scripts as well.

// Bootstrap
bs_link = document.createElement('link')
	.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
		.rel = "stylesheet"
			.integrity = "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
				.crossorigin = "anonymous"
					.innerHTML = "";
bs_script = document.createElement('script')
	.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
		.integrity = "sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
			.crossorigin = "anonymous"
				.innerHTML = "";

// document.getElementsByTagName('head')[0].innerHTML += `
// 	<!-- Bootstrap -->
// 	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
// 		integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
// 	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
// 		integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
// 		crossorigin="anonymous"></script>
// `

// document.getElementsByTagName("head")[0].innerHTML += `<script src="/assets/nav.js" defer></script>`