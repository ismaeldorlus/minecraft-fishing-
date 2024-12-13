// Functionize Minecraft Fishing Start Code

// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);
let codNum = 0;
let salmNum = 0;
let tropNum = 0;
let puffNum = 0;
function fishBtnClicked() {
  //Steve
  let randNum = Math.random();

  if (randNum < 0.7) {
    document.getElementById("result-img").src = "img/Raw-Cod.png";
    console.log("Cod");
    codNum = codNum + 1;
    document.getElementById("num-cod").innerHTML = codNum;
  } else if (randNum < 0.9) {
    document.getElementById("result-img").src = "img/Raw-Salmon.png";
    console.log("salmon");
    salmNum = salmNum + 1;
    document.getElementById("num-salmon").innerHTML = salmNum;
  } else if (randNum < 0.95) {
    tropNum = tropNum + 1;
    console.log("Tropical");
    document.getElementById("result-img").src = "img/Tropical-Fish.png";
    document.getElementById("num-tropical").innerHTML = tropNum;
  } else {
    puffNum = puffNum + 1;
    document.getElementById("result-img").src = "img/Pufferfish.png";
    console.log("Puffer");
    document.getElementById("num-puffer").innerHTML = puffNum;
  }
}
