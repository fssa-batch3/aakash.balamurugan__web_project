const constraints = { video: { width: { max: 320 } }, audio: true };

var theStream;
var theRecorder;
var recordedChunks = [];

let stop_vid_btn = document.getElementById("stop_vid");
stop_vid_btn.addEventListener("click", function (e) {
      e.preventDefault();
      download()
})

let startFunction_btn = document.getElementById("startFunction");
startFunction_btn.addEventListener("click", function (e) {
  e.preventDefault();
  startFunction();
})

function startFunction() {
  navigator.mediaDevices.getUserMedia(constraints)
  // console.log(navigator)
  // try {
  //   gotMedia();
  // } catch (error) {
  //   console.log(error);
  // }
  .then(gotMedia)
  .catch(e => { console.error('getUserMedia() failed: ' + e); });
  // gotMedia();
}
let record ;
function gotMedia(stream) { 
  theStream = stream;
  // console.log(stream)
  let video = document.querySelector("video");
  // video.setAttribute("src",stream)
  video.srcObject = stream;
  record =stream;
 }


//  start recording
 let btn_stop = document.getElementById("btn_stop");
 btn_stop.addEventListener("click", function (e) {
  e.preventDefault();
  startrecord(record);
  let gif = document.getElementById("recording");
  gif.style.display="block";
 }
 )

 function startrecord(stream) {
  try {
    recorder = new MediaRecorder(stream, { mimeType: "video/webm" });
  } catch (e) {
    console.error("Exception while creating MediaRecorder: " + e);
    return;
  }

  theRecorder = recorder;
  recorder.ondataavailable = (event) => {
    recordedChunks.push(event.data);
  };

  
  recorder.start(100);//10ms

 }

function download() {

  let gif = document.getElementById("recording");
  gif.style.display="none";

  if(recordedChunks==[]){
    alert("start recording first")
  }
  theRecorder.stop();
  theStream.getTracks().forEach((track) => {
    track.stop();
  });

  var blob = new Blob(recordedChunks, { type: "video/mp4" });
  var url = URL.createObjectURL(blob);
  var a = document.createElement("a");
  document.body.appendChild(a);
  // a.style = "display: none";
  a.href = url;
  let video_name = new Date().getTime();
  a.download = video_name + ".mp4"; 
  // a.click();


  let playback_vid = document.createElement("video");
  // playback_vid.setAttribute("src","C:/Users/AakashBalamurugan/Downloads/"+a.download);
  // playback_vid.setAttribute("src","./_Untitled - Notepad 2023-04-18 09-38-50.mp4");
  playback_vid.setAttribute("src",url);
  // playback_vid.setAttribute("src","./../../Downloads/"+video_name+".mp4");
  
  playback_vid.setAttribute("controls","")
  document.querySelector("#sandeep").append(playback_vid);


}



