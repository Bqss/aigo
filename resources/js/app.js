import '../css/app.css'
import 'flowbite';


const pt = document.getElementsByClassName("noA");
const result = document.getElementById("sttBut");
console.log(pt)
Array.from(pt).forEach(element => {
  element.onclick= (ev) =>  { 
    
    ev.preventDefault(); 

}


result.addEventListener("click", speechToText)

let SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition,
  recognition,
  recording = false;

  function speechToText() {
    // console.log("hahah")
    try {
      recognition = new SpeechRecognition();
      recognition.lang = 'en';
      recognition.interimResults = true;
      // pt.classList.add("recording");
      // pt.querySelector("p").innerHTML = "Listening...";
      recognition.start();
      recognition.onresult = (event) => {
        const speechResult = event.results[0][0].transcript;
        //detect when intrim results
        console.log(event)
        console.log('ok')
        if (event.results[0].isFinal) {
          console.log('ok final')
        //   result.innerHTML += " " + speechResult;
        //   result.querySelector("p").remove();
        
        console.log(speechResult)
        document.getElementById('translateTA').innerHTML = speechResult
        } else {
          //creative p with class interim if not already there
          
        }
      };
      recognition.onspeechend = () => {
        speechToText();
      };
      recognition.onerror = (event) => {
        stopRecording();
        if (event.error === "no-speech") {
          alert("No speech was detected. Stopping...");
        } else if (event.error === "audio-capture") {
          alert(
            "No microphone was found. Ensure that a microphone is installed."
          );
        } else if (event.error === "not-allowed") {
          alert("Permission to use microphone is blocked.");
        } else if (event.error === "aborted") {
          alert("Listening Stopped.");
        } else {
          alert("Error occurred in recognition: " + event.error);
        }
      };
    } catch (error) {
  
      console.log(error);
    }
  }

  // pt.addEventListener("click", () => {
  //   if (!recording) {
  //     speechToText();
  //     recording = true;
  //   } else {
  //     stopRecording();
  //   }
  // });
  
  function stopRecording() {
    recognition.stop();
    // pt.querySelector("p").innerHTML = "Start Listening";
    // pt.classList.remove("recording");
    // recording = false;
  }
  
});








