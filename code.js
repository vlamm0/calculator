// basic arithmetic functions
function add(x,y) {
    return x + y
}

function subtract(x,y) {
    return x -y;
}

function multiply(x,y) {
    return x*y;
}

function divide(x,y) {
    if (y == 0) {return "ERR0R"}
    return x/y;
}

// calls correct operation function based on user input
function operate(arr) {
    let operand1 = Number(arr[0])
    let operand2 = Number(arr[2])
    let operation = arr[1];
    switch (operation) {
        case "+":
            return add(operand1,operand2);
            break;
        case "-":
            return subtract(operand1,operand2);
            break;
        case "*":
            return multiply(operand1,operand2);
            break;
        case "/":
            return divide(operand1,operand2);
            break;
        default:
            alert("ERR0R")
    }
}

// adds input and returns results appropriately 
function updateDisplay(e) {
    let text = e.target.textContent;
    if (text == "clear") {outputText = ""}
    else if (text == " = ") {outputText = operate(outputText.split(" ")).toString()}
    else {outputText += text}
    if (outputText.split(" ").length >= 4) {
        //stores every value into arr ex [4,+,4,+]
        let tmp = outputText.split(" ");
        tmp.pop()

        //stores last value of arr as var and removes from tmp arr
        let tmpOperator = " " + tmp.pop() + " ";
        let result = operate(tmp)

        //calc first operation, amend operator
        if (result == "ERR0R") {outputText = result}
        else {outputText = operate(tmp).toString() + tmpOperator}
    }

    document.querySelector("p").textContent = outputText
}


// MAIN
const SYMBOLS = [[],[" / "," * "," - "],["7","8","9"],["4","5","6"],["1","2","3"],["0", " = "," + "]]
var outputText = "";
const calc = document.querySelector(".calc")


//code for DOM
// make calc screen/buttons
for (let i = 0; i < 6; i++) {
    const row = document.createElement("div")
    row.setAttribute("class", "row")
    if (i == 0) {
        row.setAttribute("class", "screen");
        //create clear on screen row
        const clear = document.createElement("button");
        clear.setAttribute("class", "clear")
        clear.textContent = "clear"
        clear.addEventListener("click", updateDisplay)
        const output = document.createElement("p")
        output.textContent = outputText
        row.appendChild(clear)
        row.appendChild(output)
    } else {
        for (let j = 0; j < 3; j++) {
            if (i == 0) {
                continue;
            }
            const btn = document.createElement("button")
            btn.style.flexGrow = "1"
            btn.textContent = SYMBOLS[i][j]
            btn.addEventListener("click", updateDisplay)
            row.appendChild(btn);
    }}
    calc.appendChild(row)
}
