var year = document.getElementById("year");
var month = document.getElementById("month");
var day = document.getElementById("day");
var result = document.getElementById("result");




function b() {
  var dates =new Date(year.value, month.value, day.value);
  var days = dates.getDay();
  switch (days) {
    case 0:
      result.innerHTML = "sunday";
      break;
    case 1:
      result.innerHTML = "monday";
      break;
    case 2:
      result.innerHTML = "tuesday";
      break;
    case 3:
      result.innerHTML = "wednesday";
      break;
    case 4:
      result.innerHTML = "thursday";
      break;
    case 5:
      result.innerHTML = "friday";
      break;
    case 6:
      result.innerHTML = "saturday";
      break;
  }
}
