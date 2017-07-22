var test = document.getElementById("canvas");
var ctx = test.getContext("2d");
var departX = 0;
var  departY = 0;
var arriveeX = 0;
var arriveeY = 0;
var counter = 0;
var elemLeft = test.offsetLeft;
var elemTop = test.offsetTop;
var forme;
var color;
ctx.lineCap = "square";



console.log(ctx.lineWidth);

$("#color li").css('background', function () {
    return $(this).data('color')});

$("#color li").click(function() {

  ctx.strokeStyle = $(this).data('color');
  console.log($(this).data('color'));
});


function clear_canvas() {
  ctx.clearRect(0,0, $("#canvas").width(), $("#canvas").height());
}
// ctx.lineJoin = 'round';
function formeBrosse(forme) {
ctx.lineCap = forme;
ctx.lineJoin= forme;}



$("#canvas").mousedown(function(event){
  counter = 0;
ctx.lineWidth = $("#largeurBrosse").val();
  departX=event.pageX - elemLeft;
  departY=event.pageY - elemTop;
  ctx.beginPath();
  ctx.moveTo(departX, departY);
// console.log(departX);
// console.log(departY);

// counter ++;
// if (counter > 0 && counter < 2) {
dessine();
// $("#canvas").mouseup(function(){
//
// counter=0;
// console.log(counter);
//
// });


});

function dessine () {
  // counter++;
  // console.log(counter);

  $("#canvas").mousemove(function(event){
    if (counter ==0)  {


    arriveeX=event.pageX - elemLeft;
    arriveeY=event.pageY - elemTop;
    ctx.lineTo(arriveeX, arriveeY);
    // context.strokeStyle = color;

    ctx.stroke();
    // console.log(arriveeX);
    // console.log(arriveeY);

      // $("span").text("X: " + event.pageX + ", Y: " + event.pageY);
    }
    });
    $("#canvas").mouseup(function(){

counter++;
// console.log(counter);
});

$("#canvas").mouseout(function(){

counter++;
// console.log(counter);
});
}





// function trait() {
//
// ctx.moveTo(departX,departY);
// ctx.lineTo(arriveeX,arriveeY);
// ctx.stroke();}
//
// function dessine() {
//   context.beginPath();
//   context.moveTo(de, cursorY);





// $("#canvas").mouseup(trait);
