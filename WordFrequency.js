function play() {
  var audio = document.getElementById("audio");
  audio.play();
}
const text=document.getElementById('text');
const input=document.getElementById('input');
const button=document.getElementById('button');
const res=document.getElementById('res');
function check(){
    const word=input.value;
    const exp=new RegExp(word,'gi');
    const match =text.textContent.match(exp)?text.textContent.match(exp).length:0;
    res.innerHTML="The word "+word +" appears "+match+" times in this text";
}
button.addEventListener('click',check);