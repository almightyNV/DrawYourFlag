
// Variable to store the selected color
let choosedColor = ''


// Function to actually add color to the divs
function changeColor(id) {
    const boxes = document.getElementById("box-border");
    const ele = boxes.getElementsByClassName("box");
    ele[id - 1].style.backgroundColor = choosedColor;
}

// Function to do the picking color task
function pickColor(color) {
    choosedColor = `#${color}`;
}