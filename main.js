// Array Visualizer

// HTML Variables
let containerEl = document.getElementById("container");

// Global Variable
let myData = [];
for (let n = 1; n <= 50; n++) {
    myData.push(Math.random() * 600);
}

// Display Data
drawArray();

function drawArray() {
    let outputStr = "";
    for (let i = 0; i < myData.length; i++) {
        outputStr += `<div style="height:${myData[i]}px"></div>`
    }
    containerEl.innerHTML = outputStr;
}

// Key Event Stuff
document.addEventListener("keydown", keydownHandler)

function keydownHandler(event) {
    if (event.keyCode === 38) {
        //Up Arrow - Add element to beginning
        myData.splice(0, 0, Math.random() * 600);
    } else if (event.keyCode === 40) {
        // Down Arrow - Remove element from beginning
        myData.splice(0, 1);
        // The 0 in the brackets means remove a element to the beginning
        // The 1 in brackets means remove 1 element
    } 

    // if (event.keyCode === 38) {
    //     //Up Arrow - Push value to the end of the array
    //     myData.push(Math.random() * 600);
    // } else if (event.keyCode === 40) {
    //     // Down Arrow - Remove value from the end of the array
    //     let poppedValue = myData.pop();
    //     console.log(poppedValue);
    // } 
    

    // Redraw Array
    drawArray();
}