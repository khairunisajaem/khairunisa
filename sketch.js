let j;
function setup() {
  // put setup code here
  createCanvas(1400,800);
  j  = 0; 
}

function draw() {
  // put drawing code here
  background(100)
  strokeWeight(10)

  fill(253,245,230)
  line(200,150,200,70)
  line(390,0,390,800)

  strokeWeight(0)
  //biru langit
  //background langit
  fill(204,102,0)
  rect(400,0,2000,300)

  //background laut
  fill(65,105,225)
  rect(400,300,2000,250)

  //background aspal
  strokeWeight(0)
  fill(20)
  rect(400,500,2000,200)
  strokeWeight(0)
  fill(254,239,213)
  rect(420,535,100,25)
  rect(600,535,100,25)
  rect(800,535,100,25)
  rect(1000,535,100,25)
  rect(1200,535,100,25)

  //matahari
  fill(254,196,54)
  arc(70,50,100,100, radians(175), radians(360))
  
  
  //perahu
  fill(107,142,35)
  arc(200,150,250,120, radians(0), radians(195))
  fill(253,218,185)
  arc(200,150,250,60, radians(0), radians(195))

  //mobil
  fill(135,206,235)
  //warna merah
  rect(50,300,100,65)
  arc(150,365,100,100, radians(270), radians(360))
  fill(253,245,230)
  ellipse(160,370,35,35)
  ellipse(100,370,35,35)

  //avatar jalan

  //matahari
  fill(254,196,54)
  arc(600,300,200,200, radians(180), radians(360))
  
  //menjalankan mobil dan perahu

  //perahu
  var y = 280 + 20*Math.sin(PI*j/20)
  var r = 350 + 10*Math.sin(PI*j/20)
  var t = 1200 + 20*Math.sin(PI*j/20)
  var o = 450 + 20*Math.sin(PI*j/20)
  var q = 1300 + 20*Math.sin(PI*j/20)
  var r = 1240 + 20*Math.sin(PI*j/20)
  var s = 1315 + 20*Math.sin(PI*j/20)
  j += 0



  fill(254,186,47)
  arc(1000,y,300,120, radians(0), radians(195))
  fill(139,69,19)
  arc(1000,y,300,60, radians(0), radians(195))

  //mobil
  
  fill(205,133,63)
  //warna merah
  rect(t,500,100,65)
  arc(q,565,100,100, radians(270), radians(360))
  fill(253,245,230)
  ellipse(r,565,35,35)
  ellipse(s,565,35,35)

  //ombak
  var y = 400 + 20*Math.sin(PI*j/20)
  var r = 350 + 10*Math.sin(PI*j/20)
  j += 1
  strokeWeight(3)
  fill(253,245,230)
  for (var i=400; i<2000; i++){
    x=i
    y= r + 20*Math.sin(x/30)
    point(x,y)
  }

  
  for (var i=400; i<1600; i++){
    x=i
    y= o + 20*Math.sin(x/30)
    point(x,y)
}
    



}