function showTime() {
    var date = new Date();
    var hours = date.getHours(); // 0-23
    var minutes = date.getMinutes(); // 0-59
    var seconds = date.getSeconds(); // 0-59
    var meridiem = "AM";

    // Convert 24-hour time to 12-hour time format
    if (hours > 12) {
        hours = hours - 12;
        meridiem = "PM";
    }

    // Ensure 2-digit format for hours, minutes and seconds
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    var timeString = hours + ":" + minutes + ":" + seconds + " " + meridiem;

    document.getElementById("MyClockDisplay").innerText = timeString;
    document.getElementById("MyClockDisplay").textContent = timeString;
}

// Update every 1 second
setInterval(showTime, 1000);
// Initial call to display the clock immediately
showTime();