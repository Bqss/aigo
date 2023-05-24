import '../css/app.css'
import 'flowbite';


const pt = document.getElementsByClassName("noA");
console.log(pt)
Array.from(pt).forEach(element => {
  element.onclick= (ev) => ev.preventDefault();  
});
