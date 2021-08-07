nosex=0;
nosey=0;
difference=0;
rightwristx=0;
leftwristx=0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    
    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses)
}
function modelLoaded(){
    console.log("PoseNet Is Initialized");
}

