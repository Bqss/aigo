import '../css/app.css'
// import 'flowbite';
import Alpine from "alpinejs"
import Tabs from "./components/Tabs"
window.Alpine = Alpine;

Alpine.data("tabs",Tabs);


Alpine.start();






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
    document.getElementById("sttBut").classList.add("bg-red-800")
    var svgPause = document.getElementById("sttSVG");
    svgPause.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-6 h-6">
    <path fill-rule="evenodd" d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z" clip-rule="evenodd" />
  </svg>
  
  `
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
        document.getElementById("sttBut").classList.remove("bg-red-800")
        var svgNormal = document.getElementById("sttSVG");
        svgNormal.innerHTML=`<svg id="sttSVG" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 fill-white ">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
        </svg>
      `
        speechToText();
      };
      recognition.onerror = (event) => {
        document.getElementById("sttBut").classList.remove("bg-red-800")
        document.getElementById("sttBut").classList.remove("bg-red-800")
        var svgNormal = document.getElementById("sttSVG");
        svgNormal.innerHTML=`<svg id="sttSVG" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 fill-white ">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
        </svg>
      `
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
          // alert("Listening Stopped.");
        } else {
          // alert("Error occurred in recognition: " + event.error);
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








