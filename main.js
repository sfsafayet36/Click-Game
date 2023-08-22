let rn = 0;
let scores = 0;
let audio = document.getElementById("audio");
let gif = `<img src="./images/sinchan2.gif" alt="">`
let elem = document.getElementById("panel-bottom")
console.log(elem);
function hitNumber() {

  rn = Math.floor(Math.random() * 10)

  document.getElementById("hitbox").textContent = rn

}



function makeBubble() {

  let bubble = "";

  for (let i = 1; i < 426; i++) {
    let randomNumber = Math.floor(Math.random() * 10);
    bubble += `<div id="bubble">${randomNumber}</div>`

  }

  let bottomPanel = document.getElementById("panel-bottom");

  bottomPanel.innerHTML = bubble

}


function timer() {
  let time = 60;

  let timeint = setInterval(function() {

    if (time > 0) {
      document.getElementById("timebox").innerHTML = --time

    }
    else if (time === 0) {
      document.getElementById("panel-bottom").innerHTML = `<h1>Game Over Brooo</h1><h2>Your score is ${scores} </h2> <br>
      ${gif}
      `
      elem.style.flexDirection = "column"
      clearInterval(timeint);



    }



  }, 1000)



}



function score() {

  document.getElementById("scorebox").innerHTML = scores += 10;


}

function myaudio() {
  audio.play()
  
}



let panelBottom = document.getElementById("panel-bottom")

panelBottom.addEventListener('click', function(details) {

  let nm = Number(details.target.innerText)

  if (rn === nm) {
    score()
    makeBubble()
    hitNumber()
    myaudio()

  }


})



hitNumber()
timer()
makeBubble()

