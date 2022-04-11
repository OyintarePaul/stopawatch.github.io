/*
Vanilla Timer logic (model)
*/

/*Utils*/
function formatNum(num) {
	num = num.toString();
	if (num.length == 1) {
		return "0" + num;
	} else {
		return num;
	}

}


let loop;




class Timer {
	constructor() {
		this.second = 0;
		this.minute = 0;
		this.hour = 0;
		this.started = false;
		this.restart = true;
	}
	start() {
		loop = setInterval(() => {
			this.update();
			}, 1000);
		this.started = true;
		this.restart = false;
	}
	stop() {
		this.started = false;
		clearInterval(loop);
		console.log("Stopwatch paused, but not reset");
	}
	reset() {
		this.stop();
		this.started = false;
		this.restart = true;
		this.second = 0;
		this.minute = 0;
		this.hour = 0;
		console.log("Stopwatch reset");
		sec.textContent = formatNum(0);
		min.textContent = formatNum(0);
		hr.textContent = formatNum(0);
	}
	update() {
		if (this.second === 59) {
			this.second = 0;
			if (this.minute === 59) {
				this.hour++;
				this.minute = 0;
			} else {
				this.minute++;
			}
		} else {
			this.second++
		}
		sec.textContent = formatNum(timer.second);
		min.textContent = formatNum(timer.minute);
		hr.textContent = formatNum(timer.hour);
	}
	

}



const timer = new Timer();


const sec = document.getElementById("sec");
const min = document.getElementById("min");
const hr = document.getElementById("hr");
const startStop = document.getElementById("start-stop");
const stopBtn = document.getElementById("reset");


startStop.onclick = function() {
	if (!timer.started) {
		startStop.textContent = "Pause";
		timer.start();
	} else {
		startStop.textContent = "Continue";
		timer.stop();
	}
}
stopBtn.onclick = function() {
	startStop.textContent = "Start";
	timer.reset();
}








