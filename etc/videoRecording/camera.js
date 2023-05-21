//dom
const testButton = document.querySelector(".test-button")
const recordButton = document.querySelector(".record-button")
const stopButton = document.querySelector(".stop-button")
const playButton = document.querySelector(".play-button")
const downloadButton = document.querySelector(".download-button")
const previewPlayer = document.querySelector("#preview")
const recordingPlayer = document.querySelector("#recording")

let recorder;
let recordedChunks;

//functions
function videoStart() {
  navigator.mediaDevices.getUserMedia({video: true, audio: true})
    .then(stream => {
      previewPlayer.srcObject = stream;
      startRecord(previewPlayer.captureStream())    
    })
}

function startRecord(stream){
  recorder = new MediaRecorder(stream);
  recorder.ondataavailable = (e) => {recordedChunks.push(e.data)}
  recorder.start()
}

function stopRecording() {
  recordedChunks = [];
  previewPlayer.srcObject.getTracks().forEach(track => track.stop());
  recorder.stop();
}

function playRecording() {
  const recordedBlob = new Blob(recordedChunks, {type: "video/webm"});
  recordingPlayer.src = URL.createObjectURL(recordedBlob);
  recordingPlayer.play();
  downloadButton.href = recordingPlayer.src;
  downloadButton.download = `recording+${new Date()}.webm`;
  console.log(recordingPlayer.src);

}

function test() {
  console.log(navigator.mediaDevices.getUserMedia())
}

//event
recordButton.addEventListener("click", videoStart)
stopButton.addEventListener("click",stopRecording)
playButton.addEventListener("click",playRecording)
testButton.addEventListener("click", test);