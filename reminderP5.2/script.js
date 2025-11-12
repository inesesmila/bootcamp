// Your variables go here


function preload() {
    // Load ressources before setup
}

function setup() {
   createCanvas(400, 400, WEBGL);
   pg = createGraphics(200, 200); // off-screen canvas
}

function draw() {
    // Code that runs repeatedly code here
    background(200);

   // Rotate around the y-axis.
    rotateY(frameCount * 0.01);

  // Draw the square.
    square(-20, -60, 110);
    // Draw text on the texture
  pg.background(255);
  pg.fill(0);
  pg.textAlign(CENTER, CENTER);
  pg.textSize(28);
  pg.text("New chapter", pg.width / 2, pg.height / 2);

  // Apply the texture to the square (plane)
  texture(pg);


}
