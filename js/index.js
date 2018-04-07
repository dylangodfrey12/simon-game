var cpuSelected = [];
var userSelected = [];
//amount of simon iterations = count
var count = 0;
var randNum = 0;
var max = 4, min = 1, score = 0;
var dummy = [1,2,3,2];


//click start adds light class to button
$("#start").on("click", function(){
  //for number in count run random number generator and set button id to number
  $("#name").removeClass("red"); 
  $("#name").removeClass("green"); 
    var x = Math.floor(Math.random() * (max - min + 1)) + min;
 cpuSelected.push(x); 
  count = 0;
  play();
  
   
})

//function will take array param and for each element add/remove light class to appropriate div with corresponding element value

function play() {
   //console.log(array);
  console.log(count);
   if (count < cpuSelected.length ){
    $(`#${cpuSelected[count]}` ).addClass("light"); 
  setTimeout(function(){removeClass()
  },1000);
   } else {
     $("#start").attr("disabled", true);
   }
}
function removeClass(){
//removes last class(light) added to button
 // console.log("called"); 
  //console.log(array[array.length - i]); 
  console.log(cpuSelected);
  if (count < cpuSelected.length ){
   $(`#${cpuSelected[count]}` ).removeClass("light");
  count++;
  setTimeout(function(){ play() },1000);
  } else {
  }

}
$(".selectable").on("click",function(){

  if (userSelected.length !== cpuSelected.length){ 
     
    userSelected.push(Number(this.id));
    
     if(userSelected.toString() == cpuSelected.toString()){ 
      $("#name").addClass("green"); 
        $("#start").attr("disabled", false);
       userSelected = []; 
       score++;
       if(score >= 3){ 
         $("#score").addClass("green"); 
       }
       $("#score").html(score);
}  else if(userSelected.toString() !== cpuSelected.toString() && userSelected.length === cpuSelected.length) {
     $("#name").addClass("red"); 
  $("#score").html("LOSE!");
  $("#score").removeClass("green"); 
  score = 0; 
  }   
      
  }
});