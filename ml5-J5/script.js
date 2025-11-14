// Your variables go here

//1) a variable to start a video
let video;

// 5) a variable to store the model 
let bodyPose;

// a variable to start results
let poses = [];

//a variable to start the led
let servo;

function preload() {
    // Load ressources before setup
    // load the bodyPose model
    bodyPose=ml5.bodyPose();

    //load arduino 
    loadBoard();
}

function setup() {
    // Code that runs once here
    createCanvas(500, 500).parent("sketch-container");
    //2)
    video = createCapture(VIDEO);
    //3) hide the video element
    video.hide();

    //start the body pose detection
    bodyPose.detectStart(video, function(results){
        //make the results from the model globally accessible
        poses = results;
    });
    //create new led object on pin 3
    servo = new five.Servo(3);
}

function draw() {
    // Code that runs repeatedly code here
    //4) background(200);
    image (video, 0, 0)

    //make sure that we ave at least one pose detected
    if(poses.length > 0){
        //create a variable to store wrist pose
        let wrist = poses[0].right_wrist;

        let angle = map(wrist, 0, 500, 0, 180);
        servo.to(angle);
    

    }
}