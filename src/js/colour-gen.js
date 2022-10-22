const button = document.getElementById("generate");

function generate() {
    const colourMessage = document.getElementById("colourMessage");
    colourMessage.textContent = "Your generated colour is:";

    const getColour = () => Math.floor(Math.random() * 256);

    const r = getColour();
    const g = getColour();
    const b = getColour();
    const rgb = `rgb(${r}, ${g}, ${b})`;

    const hex = "#" + r.toString(16) + g.toString(16) + b.toString(16);

    const colourBox = document.getElementsByClassName("colour-gen")[0];
    const rgbCode = document.getElementById("rgb");
    const hexCode = document.getElementById("hex");

    colourBox.style.backgroundColor = rgb;
    rgbCode.textContent = rgb;
    hexCode.textContent = hex;
}

button.addEventListener("click", generate);
