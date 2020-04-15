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
}

$("button").click(function() {
  let day = parseInt($("#inputDate").val());
  let year = parseInt($("#inputYear").val());
  let month = parseInt($("#inputMonth").val());
  console.log(validateInputs(year, month, day));
 
 
  // new Date(year, month, day);
});
