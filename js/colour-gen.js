const button = document.getElementById("generate");

const getColour = () => Math.floor(Math.random() * 256);

function generate() {
    const colourMessage = document.getElementById("colourMessage");
    colourMessage.textContent = "Your generated colour is:";

    const r = getColour();
    const g = getColour();
    const b = getColour();
    const rgb = `rgb(${r}, ${g}, ${b})`;

    const hex = "#" + r.toString(16) + g.toString(16) + b.toString(16);

    const body = document.getElementsByTagName("body")[0];
    const rgbCode = document.getElementById("rgb");
    const hexCode = document.getElementById("hex");

    body.style.backgroundColor = rgb;
    rgbCode.textContent = rgb;
    hexCode.textContent = hex;
}

button.addEventListener("click", generate);
