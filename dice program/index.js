const rollBtn = document.querySelector("#rollBtn");
const numDice = document.querySelector("#numDice");
const dice = document.querySelectorAll(".dice");

rollBtn.onclick = () => {
    for (let i=6; i>numDice.value; i--){
        dice[i-1].textContent = "";
        dice[i-1].style["border"] = "";
    }
    for (let j=0; j<numDice.value; j++){
        let num = Math.floor(Math.random()*6+1);
        dice[j].textContent = num
        dice[j].style["border"] = "solid #000 1px";
    }
}