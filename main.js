/*
obtain a prompt for the color input from user
check if that color is a part of the rainbow
return the color in hex code if it is
return "Not a rainbow color" if not

get constants for the rainbow colors

BONUS: 
change background color to match user input

BONUS BONUS
if input is "random", should return any color available in the hex library. And then change the background to that also.
*/

//get constants for the rainbow colors

const noBow = "That is not a color of the rainbow."
const noColor = "You forgot to enter a color. Do you want to exit?"
const defaultBack = document.body.style.backgroundImage = "url('https://m.media-amazon.com/images/I/41LRRAGib8L.jpg')";
const roygbiv = [{name: "red", value: "#ff0000"}, {name: "orange", value: "#ffa500"}, 
                 {name: "yellow", value: "#ffff00"}, {name: "green", value: "#008000"}, 
                 {name: "blue", value: "#0000ff"}, {name: "indigo", value: "#4b0082"}, 
                 {name: "violet", value: "#ee82ee"}]; 

//obtain a prompt for the color input from user

const inputColor = getUserInput();

if (inputColor !== undefined){ //inputColor alway undefined here.. why??- fixed
    isRainbowColor(inputColor);
      }

function getUserInput() {
    let inputColor = window.prompt("Please enter a color of the rainbow: ");
    if (inputColor === null) {
    promptAgain(noColor)
    } else

    if (inputColor === "") {
    promptAgain(noColor)
    } else {

    inputColor = inputColor.toLowerCase();
    checkIfRandom(inputColor); // take this out to get to fi random statement?? - fixed
    }
}


function promptAgain(question) {
    const toCancel = confirm(question)
      if (toCancel) {
        alert("Goodbye! 👋");
      } else {
        getUserInput();
      }
  }

function checkIfRandom(random) {
	if (isRainbowColor(random)){ //typing random never gets here? why??.. fixed
	    showHexColor(random);
	    } else if (random === "random") {
	        let hexcode = "#";
	        const hexChars = "0123456789ABCDEF"
	        for (let index = 0; index < 6; index++) {
	            const rndIndex = Math.floor(Math.random() * hexChars.length);
	            const hexChar = hexChars[rndIndex];
	            hexcode += hexChar;
	        }
	        showColor(hexcode);
	    } else if (random !== undefined) {
	        notInBow(random);
	    }
}

function isRainbowColor(inputColor) {
    
    switch (inputColor) {
        case "red":
        case "orange":
        case "yellow":
        case "green": 
        case "blue": 
        case "indigo":
        case "violet": 
            return true;
            // showHexColor(inputColor)
            // break;

        default:
            return false; //why womt this work?? fixed
        }
    }

function showHexColor(hexColor) {
      // TODO: return hexcode instead of color
    // maybe turn roygbiv into an array with key:value pair then iterate over and return the value if the input matches one of the keys
    // for (const hex(key) of roygbiv) {
        // get key and store as variable
    //     if (hex(key) === color) { can I use == here to just compare if they sorta match? Then store the hex as color and alert color
            // return the value and store as color, then alert with correct hex and bkgrd
    //     }
    // }
    for (let color of roygbiv) {
        if (color.name === hexColor) {
            showColor(color.value);
        } 
    }
}

function notInBow(otherColor) {
        if (otherColor !== undefined) {
	alert(noBow);
	        defaultBack; 
    } else {
        defaultBack;
    }
}

function showColor(color) {
    alert(color);
    document.body.style.background = color;
}