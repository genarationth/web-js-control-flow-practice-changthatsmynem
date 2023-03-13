let dayNumber = Math.floor(Math.random() * 14);
let dayMatchNum = "";

switch (dayNumber) {
  case 0:
    dayMatchNum = "Sunday";
    break;
  case 1:
    dayMatchNum = "Monday";
    break;
  case 2:
    dayMatchNum = "Tuesday";
    break;
  case 3:
    dayMatchNum = "Wednesday";
    break;
  case 4:
    dayMatchNum = "Thursday";
    break;
  case 5:
    dayMatchNum = "Friday";
    break;
  case 6:
    dayMatchNum = "Saturday";
    break;
  default:
    dayMatchNum = "Invalid Day Number";
    break;
}

console.log(dayMatchNum);
