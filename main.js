 // Get the current time
 var date = new Date();
 var hours = date.getHours();
 var minutes = date.getMinutes();
 var seconds = date.getSeconds();

 // Pad the hours, minutes, and seconds with zeros
 if (hours < 10) {
   hours = "0" + hours;
 }
 if (minutes < 10) {
   minutes = "0" + minutes;
 }
 if (seconds < 10) {
   seconds = "0" + seconds;
 }

 // Display the time
 document.getElementById("clock").innerHTML = hours + ":" + minutes + ":" + seconds;

 // Update the time every second
 setInterval(function() {
   // Get the current time
   var date = new Date();
   var hours = date.getHours();
   var minutes = date.getMinutes();
   var seconds = date.getSeconds();

   // Pad the hours, minutes, and seconds with zeros
   if (hours < 10) {
     hours = "0" + hours;
   }
   if (minutes < 10) {
     minutes = "0" + minutes;
   }
   if (seconds < 10) {
     seconds = "0" + seconds;
   }

   // Display the time
   document.getElementById("clock").innerHTML = hours + ":" + minutes + ":" + seconds;
 }, 1000);