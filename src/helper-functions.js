
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

