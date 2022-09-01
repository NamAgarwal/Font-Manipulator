function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 100);

    poseNet = ml5.poseNet(video, modeLoaded);
    poseNet.on('pose', gotPoses);
}
function modeLoaded(){
    console.log('Model is ready');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        
    }
}