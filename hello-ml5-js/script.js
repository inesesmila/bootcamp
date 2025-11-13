// Your variables go here
// a varuiable to store the video element
let video;

// a varuiable to store body pose model
let bodyPose;
// variable to store the result
let poses = [];

function preload() {
    // Load ressources before setup
    bodyPose = ml5.bodyPose();
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
        let nose = poses[0].nose;
        console.log(nose);
        fill(255, 0, 0);
        circle(nose.x, nose.y, 20);
    
        stroke(0);
        strokeWeight(2); 
        noFill(); 

        let leftEye = poses[0].left_eye;
        console.log(leftEye);
        circle(leftEye.x, leftEye.y, 60);

        let rightEye = poses[0].right_eye;
        console.log(rightEye);
        circle(rightEye.x, rightEye.y, 60);

        let distance = dist(leftEye.x, leftEye.y, rightEye.x, rightEye.y);
        console.log(distance);

        //target the left writz position
        let leftWrist = poses[0].left_wrist;
        if(leftWrist.y < 100){
            //do stuff if hand is raised
            background(0, 120, 150, 150);
        }


    }
}

function mousePressed() {
    console.log(poses);
}