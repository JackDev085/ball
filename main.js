const teste = document.getElementById("teste");

const cores = ["Azul", "Preto", "Branco"];
let i = 0;

function mostraCor() {
  if(i===3){
    i=0
  }
  teste.innerHTML = cores[i];
  i = (i + 1)

  console.log()
}

// Call mostraCor immediately to show the first color
mostraCor();

// Then set an interval to call mostraCor every 1 second
setTimeout(()=>{

  setInterval(()=>speakText(teste.innerHTML), 2000)
},100)
setInterval(mostraCor, 2000);


const synth = window.speechSynthesis;

function speakText(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  synth.speak(utterance);
}

  // speakText(teste.innerHTML);
