function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.getElementById('todayDate').innerHTML = "test";

document.getElementById('theOtherDate').innerHTML = "testAgain";

otherDate = new Date(getRandomInt(2022),getRandomInt(11),getRandomInt(31),getRandomInt(12),getRandomInt(60));

stringOtherDate = otherDate.getYear() + " " + months[otherDate.getMonth()] + " " + otherDate.getDate() + " " + otherDate.getHours() + ":" + otherDate.getMinutes();

document.getElementById('theOtherDate').innerHTML = stringOtherDate;

