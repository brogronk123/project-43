var hr,mn,sc;
function setup() {
  createCanvas(450,450);
  angleMode(DEGREES);
}
function draw() {
  background("black");
  //clock outline
  fill("white");
  ellipse(200,200,210,210);
  //text
  fill("white");
  text(hr%12+":"+mn+":"+sc,200,20);
  fill("black"); 
  textSize(25);
  text("I",245,140);
  text("II",275,170);
  text("III",275,215);
  text("IV",270,260);
  text("V",235,290);
  text("VI",190,300);
  text("VII",140,290);
  text("VIII",110,250);
  text("IX",100,210);
  text("X",110,160);
  text("XI",140,130);
  text("XII",180,120);


  //creating angles and getting time
  translate(200,200);
  rotate(-90);
  hr = hour();
  mn = minute();
  sc = second();
  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr, 0, 12, 0, 360);
  //seconds
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  //minutes
  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,75,0);
  pop();
  //hours
  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,50,0);
  pop();
  //arcs
  strokeWeight(10);
  noFill();
  //seconds
  stroke(255,0,0);
  arc(0,0,300,300,0,scAngle);
  //minutes
  stroke(0,255,0);
  arc(0,0,280,280,0,mnAngle);
  //hours
  stroke(0,0,255);
  arc(0,0,260,260,0,hrAngle);
  drawSprites();
}