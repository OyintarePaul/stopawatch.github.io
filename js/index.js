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
		this.minisecond = 0;
		this.second = 0;
		this.minute = 0;
		this.started = false;
		this.restart = true;
	}
	start() {
		loop = setInterval(() => {
			this.update();
			}, 10);
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
		this.minisecond = 0;
		this.second = 0;
		this.minute = 0;
		console.log("Stopwatch reset");
		ms.textContent = formatNum(0);
		sec.textContent = formatNum(0);
		min.textContent = formatNum(0);
	}
	update() {
		if (this.minisecond === 99) {
			this.minisecond = 0;
			if (this.second === 59) {
				this.minute++;
				this.second = 0;
			} else {
				this.second++;
			}
		} else {
			this.minisecond++
		}
		ms.textContent = formatNum(timer.minisecond);
		sec.textContent = formatNum(timer.second);
		min.textContent = formatNum(timer.minute);
	}
	

}



const timer = new Timer();


const ms = document.getElementById("ms");
const sec = document.getElementById("sec");
const min = document.getElementById("min");
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







