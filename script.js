function add(a,b) {
    return Math.round(10000000*(a + b))/10000000;
}

function subtract(a,b) {
    return Math.round(10000000*(a - b))/10000000;
}

function multiply(a,b) {
    return Math.round(10000000*a * b)/10000000;
}

function divide(a,b) {
    return Math.round(10000000*a/b)/10000000;
}

function operator (operator, a, b) {
    switch (operator) {
        case "add":
            return add(a,b);
        case "subtract":
            return subtract(a,b);
        case "multiply":
            return multiply(a,b);
        case "divide":
            if (working == 0) {
                return "ERROR";
                internalReset();
            } else return divide(a,b);
    }
}

let working = 0;
let operation = "null";
let displayBar = document.querySelector(".display");
let result = 0;
let triggered = "no";
let mem = "nah";
displayBar.textContent = "0";

function internalReset() {
    working = 0;
    operation = "null";
    result = 0;
    triggered = "yes";
    mem = "nah";
}

const allClear = document.querySelector('#clear');
allClear.addEventListener('click', () => {
    working = 0;
    operation = "null";
    result = 0;
    triggered = "no";
    mem = "nah";
    displayBar.textContent = "0";
});

const btn1 = document.querySelector('#one');
btn1.addEventListener('click', () => {
    if (displayBar.textContent == "0" || triggered == "yes") {
        displayBar.textContent = "1";
        working = 1;
        triggered = "no";
    } else if (displayBar.textContent.length == 8) {
    } else { displayBar.textContent = displayBar.textContent + "1";
        working = +displayBar.textContent;
}
});

const btn2 = document.querySelector('#two');
btn2.addEventListener('click', () => {
    if (displayBar.textContent == "0" || triggered == "yes") {
        displayBar.textContent = "2";
        working = 2;
        triggered = "no";
    } else if (displayBar.textContent.length == 8) {
    } else { displayBar.textContent = displayBar.textContent + "2";
        working = +displayBar.textContent;
}
});

const btn3 = document.querySelector('#three');
btn3.addEventListener('click', () => {
    if (displayBar.textContent == "0" || triggered == "yes") {
        displayBar.textContent = "3";
        working = 3;
        triggered = "no";
    } else if (displayBar.textContent.length == 8) {
    } else { displayBar.textContent = displayBar.textContent + "3";
        working = +displayBar.textContent;
}
});

const btn4 = document.querySelector('#four');
btn4.addEventListener('click', () => {
    if (displayBar.textContent == "0" || triggered == "yes") {
        displayBar.textContent = "4";
        working = 4;
        triggered = "no";
    } else if (displayBar.textContent.length == 8) {
    } else { displayBar.textContent = displayBar.textContent + "4";
        working = +displayBar.textContent;
}
});

const btn5 = document.querySelector('#five');
btn5.addEventListener('click', () => {
    if (displayBar.textContent == "0" || triggered == "yes") {
        displayBar.textContent = "5";
        working = 5;
        triggered = "no";
    } else if (displayBar.textContent.length == 8) {
    } else { displayBar.textContent = displayBar.textContent + "5";
        working = +displayBar.textContent;
}
});

const btn6 = document.querySelector('#six');
btn6.addEventListener('click', () => {
    if (displayBar.textContent == "0" || triggered == "yes") {
        displayBar.textContent = "6";
        working = 6;
        triggered = "no";
    } else if (displayBar.textContent.length == 8) {
    } else { displayBar.textContent = displayBar.textContent + "6";
        working = +displayBar.textContent;
}
});

const btn7 = document.querySelector('#seven');
btn7.addEventListener('click', () => {
    if (displayBar.textContent == "0" || triggered == "yes") {
        displayBar.textContent = "7";
        working = 7;
        triggered = "no";
    } else if (displayBar.textContent.length == 8) {
    } else { displayBar.textContent = displayBar.textContent + "7";
        working = +displayBar.textContent;
}
});

const btn8 = document.querySelector('#eight');
btn8.addEventListener('click', () => {
    if (displayBar.textContent == "0" || triggered == "yes") {
        displayBar.textContent = "8";
        working = 8;
        triggered = "no";
    } else if (displayBar.textContent.length == 8) {
    } else { displayBar.textContent = displayBar.textContent + "8";
        working = +displayBar.textContent;
}
});

const btn9 = document.querySelector('#nine');
btn9.addEventListener('click', () => {
    if (displayBar.textContent == "0" || triggered == "yes") {
        displayBar.textContent = "9";
        working = 9;
        triggered = "no";
    } else if (displayBar.textContent.length == 8) {
    } else { displayBar.textContent = displayBar.textContent + "9";
        working = +displayBar.textContent;
}
});

const btn0 = document.querySelector('#zero');
btn0.addEventListener('click', () => {
    if (displayBar.textContent == "0" || triggered == "yes") {
        displayBar.textContent = "0";
        working = 0;
        triggered = "no";
    } else if (displayBar.textContent.length == 8) {
        } else { displayBar.textContent = displayBar.textContent + "0";
            working = +displayBar.textContent;}
});

const addButton = document.querySelector("#add");
addButton.addEventListener('click', () => {
    if (mem != "nil" && mem != "nah") {
        result = operator(operation, mem, working);
        if (result > 99999999) {
            displayBar.textContent = "99999999";
        } else {
        displayBar.textContent = +result;
        triggered = "yes";
        working = result;
        }
    }
    operation = "add";
    mem = working;
    triggered = "yes";
});

const subtractButton = document.querySelector("#subtract");
subtractButton.addEventListener('click', () => {
    if (mem != "nil" && mem != "nah") {
        result = operator(operation, mem, working);
        if (result > 99999999) {
            displayBar.textContent = "99999999";
        } else {
        displayBar.textContent = +result;
        triggered = "yes";
        working = result;
        }
    }
    operation = "subtract";
    mem = working;
    triggered = "yes";
});

const multiplyButton = document.querySelector("#multiply");
multiplyButton.addEventListener('click', () => {
    if (mem != "nil" && mem != "nah") {
        result = operator(operation, mem, working);
        if (result > 99999999) {
            displayBar.textContent = "99999999";
        } else {
        displayBar.textContent = +result;
        triggered = "yes";
        working = result;
        }
    }
    operation = "multiply";
    mem = working;
    triggered = "yes";
});

const divideButton = document.querySelector("#divide");
divideButton.addEventListener('click', () => {
  
    if (mem != "nil" && mem != "nah") {
        result = operator(operation, mem, working);
        if (result > 99999999) {
            displayBar.textContent = "99999999";
        } else {
        displayBar.textContent = +result;
        triggered = "yes";
        working = result;
        }
    }
    operation = "divide";
    mem = working;
    triggered = "yes";
});

const equals = document.querySelector("#equals");
equals.addEventListener('click', () => {
    if (operation != "null") {
        if (mem != "nil") {
            result = operator(operation, mem, working);
            if (result == "ERROR") {
                displayBar.textContent = "ERROR";
                internalReset();
            } else if (result > 99999999) {
                displayBar.textContent = "99999999";
                }
             else {
                displayBar.textContent = +result;
                triggered = "yes";
                working = result;
                mem = "nil";
            }
        }
    }
});

const changeSign = document.querySelector("#plusMinus");
changeSign.addEventListener('click', () => {
    working = working * -1;
    displayBar.textContent = +working;
});

const deleter = document.querySelector("#backspace");
deleter.addEventListener('click', () => {
    if (mem !="nil") {displayBar.textContent = displayBar.textContent.slice(0,-1);
    if (displayBar.textContent == "") {
        displayBar.textContent = "0";
    }
    working = +displayBar.textContent;
    }
});

const question = document.querySelector("#beagle");
question.addEventListener('click', () => {
    switch (displayBar.textContent) {
        case "Beagle!":
            displayBar.textContent = "Pibb";
            internalReset();
            break;
        case "Pibb":
            displayBar.textContent = "smellz";
            internalReset();
            break;
        case "smellz":
            displayBar.textContent = "with a z";
            internalReset();
            break;
        case "with a z":
            internalReset();
            displayBar.textContent = "0";
            break;
        default:
            displayBar.textContent = "Beagle!";
            internalReset();
    }
    
});

const point = document.querySelector('#decimal');
point.addEventListener('click', () => {
    if (displayBar.textContent == "0" || triggered == "yes") {
        displayBar.textContent = "0.";
        working = 0;
        triggered = "no";
    } else if (displayBar.textContent.length == 8) {
    } else { displayBar.textContent = displayBar.textContent + ".";
        working = +displayBar.textContent;
}
});