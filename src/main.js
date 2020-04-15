import $ from 'jquery';
import 'bootstrap';
import './styles.css';
import './helper-functions'



$("button").click(function() {
  $("#outputDay").empty();
  let day = parseInt($("#inputDate").val());
  let year = parseInt($("#inputYear").val());
  let month = parseInt($("#inputMonth").val());
  if (validateInputs(year, month, day) == "Valid") {
    let inputDate = new Date(year, month - 1, day);
    let conclusionDay = inputDate.getDay();
    let dayOfWeek = "";
    switch (conclusionDay) {
      case 0: dayOfWeek = "Sunday";
        break;
      case 1: dayOfWeek = "Monday";
        break;
      case 2: dayOfWeek = "Tuesday";
        break;
      case 3: dayOfWeek = "Wednesday";
        break;
      case 4: dayOfWeek = "Thursday";
        break;
      case 5: dayOfWeek = "Friday";
        break;
      case 6: dayOfWeek = "Saturday";
        break;
    }
    $("#outputDay").append(dayOfWeek);
  }
  else {
    $("#outputDay").append("Invalid Entry!")
  }
 

});
