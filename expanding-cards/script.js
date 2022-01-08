const images = document.querySelectorAll(".image");

images.forEach((image) => {
	image.addEventListener("click", () => {
		images.forEach((_image) => {
			_image.classList.remove("open");
		});
		image.classList.toggle("open");
	});
});
