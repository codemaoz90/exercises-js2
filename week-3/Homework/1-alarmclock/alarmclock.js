let timerInterval = null;

function setAlarm() {
	const timeRemaining = document.getElementById("timeRemaining");
	let alarmSet = document.getElementById("alarmSet").value;
	console.log(alarmSet);
	const intervalId = setInterval(() => {
		console.log(this);
		if (alarmSet === 0) {
			// añadir funcion de stop
			playAlarm();
			document.body.style.background = "#2c3e50";
			timeRemaining.style.color = "white";

			clearInterval(intervalId);
		}
		if (alarmSet < 10) {
			timeRemaining.textContent = `Time Remaining: 00:0${alarmSet}`;
		} else {
			timeRemaining.textContent = `Time Remaining: 00:${alarmSet}`;
		}
		alarmSet--;
	}, 1000);
	return intervalId;
}
// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
	document.getElementById("set").addEventListener("click", () => {
		timerInterval = setAlarm();
	});

	document.getElementById("stop").addEventListener("click", () => {
		pauseAlarm();
	});
}

function playAlarm() {
	audio.play();
}

function pauseAlarm() {
	audio.pause();
	clearInterval(timerInterval);
}

window.onload = setup;
