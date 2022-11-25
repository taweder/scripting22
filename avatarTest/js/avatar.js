document.getElementById('b1').addEventListener("click", function(){
    bodyBuilder('b1');
});

document.getElementById('b2').addEventListener("click", function(){
    bodyBuilder('b2');
});

function bodyBuilder(setting) {
  console.log("Hello World"+setting);
  if(setting=="b1"){
    document.getElementById('torso').innerHTML="<img class='img-fluid' src='images/body1.png' alter='body1'>";
  }else if(setting=="b2"){
    document.getElementById('torso').innerHTML="<img class='img-fluid' src='images/body2.png' alter='body2'>";
  }
  
}