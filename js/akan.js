
  var result = document.getElementById("result");
  var year = parseInt(document.getElementById("year"));
  var month = parseInt(document.getElementById("month"));
  var day = parseInt(document.getElementById("day"));
  
  var dates = new date(year.value, month.value, day.value);
  var days = dates.getDay();
  
  if (day<=1){
    alert("invalid day")
  }
  if (day>31){
    alert("invalid day")
  }  
  if (month<=0){
    alert("Invalid month")
  }
  if (month>12){
    alert("Invalid month")
  }


  var male = document.getElementById("male");
  var female = document.getElementById("female");
  akannames["Akosua","Adowa","abenaa","Akua","Yaa",
            "Afua","Ama","Kwasi","Kwadwo","Kwabena",
            "Kwaku","Yaw","Kofi","Kwame"]

  
  function akaname(male, Bday,female){

}











