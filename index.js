setInterval(showTime, 1000);

let body = document.querySelector("body");
let modeBtn = document.querySelector("#mode");
let currMode = "light";


modeBtn.addEventListener("click", ()=> {
    
    if (currMode === "light"){
        currMode ="dark"; 
        body.classList.add("dark"); 
        body.classList.remove("light");
    }
    else{
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");

    }
    console.log(currMode);
});


function showTime() {
	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
	am_pm = "AM";

	if (hour > 12) {
		hour -= 12;
		am_pm = "PM";
	}
	if (hour == 0) {
		hr = 12;
		am_pm = "AM";
	}

	hour = hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min : min;
	sec = sec < 10 ? "0" + sec : sec;

	let currentTime = hour + ":"+ min + ":" + sec  + am_pm;

	document.getElementById("clock").innerHTML = currentTime;
}


showTime();