import $ from 'jquery';
import 'bootstrap';
import './styles.css';

export function validateInputs(year, month, day) {
  let highestDay = 0; 
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      highestDay = 31;
      break;
    case 2: 
      highestDay = 28;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      highestDay = 30;
      break;
    default: 
      return "Invalid";
  }
  
  if ((day < 1) || (day > highestDay))  {
    return "Invalid";
  }
  if ((year < -271820) || (year > 275759)) {
    return "Invalid";
  } 
  return "Valid";
}

$("button").click(function() {
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
    
  }
  else {
    //terminate program with error message
  }
 

});
