const constraints = { video: { width: { max: 320 } }, audio: true };

let theStream;
let theRecorder;
const recordedChunks = [];

const stop_vid_btn = document.getElementById("stop_vid");
stop_vid_btn.addEventListener("click", (e) => {
  e.preventDefault();
  download();
});

const startFunction_btn = document.getElementById("startFunction");
startFunction_btn.addEventListener("click", (e) => {
  e.preventDefault();
  startFunction();
});

function startFunction() {
  navigator.mediaDevices
    .getUserMedia(constraints)
    // console.log(navigator)
    // try {
    //   gotMedia();
    // } catch (error) {
    //   console.log(error);
    // }
    .then(gotMedia)
    .catch((e) => {
      console.error(`getUserMedia() failed: ${e}`);
    });
  // gotMedia();
}
let record;
function gotMedia(stream) {
  theStream = stream;
  // console.log(stream)
  const video = document.querySelector("video");
  // video.setAttribute("src",stream)
  video.srcObject = stream;
  record = stream;
}

//  start recording
const btn_stop = document.getElementById("btn_stop");
btn_stop.addEventListener("click", (e) => {
  e.preventDefault();
  startrecord(record);
  const gif = document.getElementById("recording");
  gif.style.display = "block";
});

function startrecord(stream) {
  try {
    recorder = new MediaRecorder(stream, { mimeType: "video/webm" });
  } catch (e) {
    console.error(`Exception while creating MediaRecorder: ${e}`);
    return;
  }

  theRecorder = recorder;
  recorder.ondataavailable = (event) => {
    recordedChunks.push(event.data);
  };
  recorder.start(100); // 10ms
}

function download() {
  const gif = document.getElementById("recording");
  gif.style.display = "none";

  if (recordedChunks == []) {
    alert("start recording first");
  }
  theRecorder.stop();
  theStream.getTracks().forEach((track) => {
    track.stop();
  });

  const blob = new Blob(recordedChunks, { type: "video/mp4" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  document.body.appendChild(a);
  // a.style = "display: none";
  a.href = url;
  const video_name = new Date().getTime();
  a.download = `${video_name}.mp4`;
  // a.click();

  const playback_vid = document.createElement("video");
  // playback_vid.setAttribute("src","C:/Users/AakashBalamurugan/Downloads/"+a.download);
  // playback_vid.setAttribute("src","./_Untitled - Notepad 2023-04-18 09-38-50.mp4");
  playback_vid.setAttribute("src", url);
  // playback_vid.setAttribute("src","./../../Downloads/"+video_name+".mp4");

  playback_vid.setAttribute("controls", "");
  document.querySelector("#sandeep").append(playback_vid);
}
