let speed = $("#speed");
let updatedSpeed 

speed.keyup(function() {
  updatedSpeed = Math.round(speed.val()*180/100)-45;
  //(speed * 180/maxSpeed)-45

  $("#speedbox-score").css("transform","rotate("+updatedSpeed+"deg)");    //updating analog speedometer
  console.log(updatedSpeed);
  $("#kmph").text(speed.val());   //updating digital speedometer
  
});
