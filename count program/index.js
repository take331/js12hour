const countLabel = document.querySelector("#countLabel");
let countLabelValue;
let count = 0;
document.querySelector("#decreaseBtn").onclick = () => {
    count -= 1;
    countLabel.textContent = count;
}

document.querySelector("#resetBtn").onclick = () => {
    countLabel.textContent = 0;
}

document.querySelector("#increaseBtn").onclick = () => {
    count += 1;
    countLabel.textContent = count;
}