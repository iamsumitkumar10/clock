// Update time and date every second
setInterval(showTime, 1000);

// Theme toggle setup
let body = document.querySelector("body");
let modeBtn = document.querySelector("#mode");
let currMode = "light";

modeBtn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log("Theme:", currMode);
});


// 24 hours formate here 
function showTime() {
    let time = new Date();

    // Time (24-hour format)
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = `${hour}:${min}:${sec}`;
    document.getElementById("clock").innerHTML = currentTime;

    // Date
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    let day = days[time.getDay()];
    let date = time.getDate();
    let month = months[time.getMonth()];
    // let year = time.getFullYear();

    let fullDate = `${day}, ${month} ${date}, ${year}`;
    document.getElementById("date").innerHTML = fullDate;
}

// 12 hours formate here 

// function showTime() {
//     let time = new Date();

//     // Time
//     let hour = time.getHours();
//     let min = time.getMinutes();
//     let sec = time.getSeconds();
//     let am_pm = "AM";

//     if (hour >= 12) {
//         am_pm = "PM";
//         if (hour > 12) hour -= 12;
//     }
//     if (hour == 0) {
//         hour = 12;
//     }

//     hour = hour < 10 ? "0" + hour : hour;
//     min = min < 10 ? "0" + min : min;
//     sec = sec < 10 ? "0" + sec : sec;

//     let currentTime = ${hour}:${min}:${sec} ${am_pm};
//     document.getElementById("clock").innerHTML = currentTime;

//     // Date
//     const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     const months = [
//         "January", "February", "March", "April", "May", "June",
//         "July", "August", "September", "October", "November", "December"
//     ];

//     let day = days[time.getDay()];
//     let date = time.getDate();
//     let month = months[time.getMonth()];
//     let year = time.getFullYear();

//     let fullDate = ${day}, ${month} ${date}, ${year};
//     document.getElementById("date").innerHTML = fullDate;
// }

// Initialize time on load
showTime();

