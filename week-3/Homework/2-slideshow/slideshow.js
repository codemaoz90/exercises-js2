// Write your code here
window.onload = function () {
	let timeInterval = null;
	const prev = document.getElementById("prev"),
		next = document.getElementById("next"),
		sliderImg = document.getElementById("sliderImg"),
		autoForwardBtn = document.getElementById("autoForward"),
		autoBackBtn = document.getElementById("autoBack"),
		stopBtn = document.getElementById("stop");
	let idImage = 233;

	prev.addEventListener("click", prevImage);
	next.addEventListener("click", nextImage);
	stopBtn.addEventListener("click", stop);

	autoForwardBtn.addEventListener("click", () => {
		timeInterval = autoForward();
	});

	autoBackBtn.addEventListener("click", () => {
		timeInterval = autoBack();
	});

	function nextImage() {
		idImage++;
		sliderImg.src = `https://picsum.photos/id/${idImage}/500/400`;
	}
	function prevImage() {
		idImage--;
		sliderImg.src = `https://picsum.photos/id/${idImage}/500/400`;
	}

	function stop() {
		clearInterval(timeInterval);
	}
	function autoForward() {
		const intervalId = setInterval(() => {
			idImage++;
			sliderImg.src = `https://picsum.photos/id/${idImage}/500/400`;
		}, 2000);
		return intervalId;
	}
	function autoBack() {
		const intervalId = setInterval(() => {
			idImage--;
			sliderImg.src = `https://picsum.photos/id/${idImage}/500/400`;
		}, 2000);
		return intervalId;
	}
};
