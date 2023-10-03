const audio = document.getElementById("myAudio");
const button = document.getElementById("myButton");

button.addEventListener("click", audio());
function audio() {
  audio.play();
}
