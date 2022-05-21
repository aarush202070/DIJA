function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses);
}

function modelloaded() {
    console.log('PoseNet Is Initialized');
}

function draw() {
    image(video, 0, 0, 600, 500);
}


song ="";
WaistX = 0;
WaistY = 0;


function preload() {
    song = loadSound("BoyWithUke.mp3");
}

function play() {
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        WaistX = results[0].pose.Waist.x;
        WaistY = results[0].pose.Waist.y;
        console.log("WaistX = " + WaistX +" WaistY = "+ WaistY);

    }
}