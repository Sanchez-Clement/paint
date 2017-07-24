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


/**
 * clear_canvas - restart
 *
 * @return {type}  no return
 */
function clear_canvas() {
  ctx.clearRect(0,0, $("#canvas").width(), $("#canvas").height());
}



/**
 * formeBrosse - to choose the form
 *
 * @param  {type} forme square or round
 * @return {type}       no return
 */
function formeBrosse(forme) {
ctx.lineCap = forme;
ctx.lineJoin= forme;}


/**
 * dessine - to draw
 *
 * @return {type}  description
 */
function dessine () {
  // counter++;
  // console.log(counter);

  $("#canvas").mousemove(function(event){
    if (counter ==0)  {


    arriveeX=event.pageX - elemLeft;
    arriveeY=event.pageY - elemTop;
    ctx.lineTo(arriveeX, arriveeY);


    ctx.stroke();

    }
    });
    $("#canvas").mouseup(function(){

counter++;

});

$("#canvas").mouseout(function(){

counter++;

});
}




$("#canvas").mousedown(function(event){
  ctx.strokeStyle = $('#color').val();
  counter = 0;
ctx.lineWidth = $("#largeurBrosse").val();
  departX=event.pageX - elemLeft;
  departY=event.pageY - elemTop;
  ctx.beginPath();
  ctx.moveTo(departX, departY);
dessine();

});
