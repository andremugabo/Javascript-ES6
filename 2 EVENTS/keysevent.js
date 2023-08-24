const div3 = document.getElementById("div3");
const para = div3.querySelector("p");
const textarea = div3.querySelector("textarea");
const paraText = "User is typing";
let timer;
let count = 0;


 document.addEventListener("keydown",function(e){
 	console.log(e.keyCode);
 });

 textarea.addEventListener("keydown",addText);
 textarea.addEventListener("keyup",removeText);

 function addText(e){
 	para.innerText = paraText;
 }

 function removeText(e){
 	count+= 1;
 	console.log(count);
 	clearTimeout(timer);
 	timer = setTimeout(()=>{
 		para.innerText ="";
 	},1000);
 	
 }

 document.addEventListener("DOMContentLoaded",addToLog)

 function addToLog(){
		const log = document.getElementById("log");
		log.innerHTML += "<h1>Hello :D</h1>";

 }
 

