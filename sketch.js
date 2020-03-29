
var r = 0;
var g = 85;
var b = 170;
var ellipse;
// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){
  createCanvas(400,400);
  
}


function draw(){
  // change the value of Red based on the mouse movement about the X axis
  r = map(mouseX,0,84,0,400);
  // change the value of Green based on the mouse movement about the X axis
  g = map(mouseX,85,169,0,400);
  // change the value of Blue based on the mouse movement about the X axis
  b = map(mouseX,170,255,0,400);
  // Use the map() function to do so. 
  // Pass the values to the background() function you have learnt previously.
  background(r,g,b);
  // Create an ellipse that will move around with you mouse about the X axis.
  ellipse = ellipse(200,200,50,50);
  ellipse.x = mouseX;
  // Remember to fill the canvas with white paint before creating the ellipse.
  
}