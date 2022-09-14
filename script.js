const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
currentDate = new Date();


dateToPrint = currentDate.getFullYear() + " " + months[currentDate.getMonth()] + " " + currentDate.getDate();


document.getElementById('answerBox').innerHTML = dateToPrint; 
