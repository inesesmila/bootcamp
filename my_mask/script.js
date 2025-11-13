// Your variables go here
// a varuiable to store the video element
let video;

// a varuiable to store body pose model
let bodyPose;
// variable to store the result
let poses = [];
 let lipsImg;

function preload() {
    // Load ressources before setup
    bodyPose = ml5.bodyPose();

   
    // place your lips image in the same folder
    lipsImg = loadImage("../assets/lips.png");

}

function setup() {
    // Code that runs once here
    createCanvas(500, 500).parent("sketch-container");
    frameRate(15);

    video = createCapture(VIDEO);
    video.hide();

    // starte the model detection
    bodyPose.detectStart(video, function(results){
        //store the results in a global variable
        poses = results;
    })
}

function draw() {
    // Code that runs repeatedly code here
    // background(200);
    image(video, 0, 0) //source is the video for the 

    //make sire we detect at least one pose
    if(poses.length > 0) {

        let lips = poses[0].nose;
        console.log(lips);
        image(lipsImg, lips.x - 50, lips.y - 65, 120, 200);

    }
}

function mousePressed() {
    console.log(poses);
}