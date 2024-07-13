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
    return x/y;
}

// calls correct operation based on user input
function operate(str) {
    var arr = str.split(" ")
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
            alert("not a valid operator")
        
    }
}
function updateDisplay(text) {
    if (text == "clear") {outputText = ""}
    else if (text == " = ") {outputText = operate(outputText)}
    else {outputText += text}
    document.querySelector("p").textContent = outputText
}

function pressButton(e) {
    let char = e.target.textContent;
    updateDisplay(char)
}



// send query results through operate to call correct operation
//var query = prompt("query")
//query = query.split(" ")
//alert(operate(query))
const SYMBOLS = [[],[" / "," * "," - "],["7","8","9"],["4","5","6"],["1","2","3"],["0", " = "," + "]]
var outputText = "";
const calc = document.querySelector(".calc")


//code for DOM
// make calc screen/buttons
for (let i = 0; i < 6; i++) {
    const row = document.createElement("div")
    if (i == 0) {
        row.setAttribute("class", "screen");
        //create clear on screen row
        const clear = document.createElement("button");
        clear.setAttribute("class", "clear")
        clear.textContent = "clear"
        clear.addEventListener("click", pressButton)
        const output = document.createElement("p")
        output.textContent = outputText
        //const screen = document.querySelector(".screen")
        //screen.style.display = flex
        row.appendChild(clear)
        row.appendChild(output)
    } else {
    row.style.display = "flex";
    row.style.flex = "auto"
    //row.style.height = "80px"
    row.style.alignItems = "stretch"
    row.style.justifyContent = "space-evenly"
    for (let j = 0; j < 3; j++) {
        if (i == 0) {
            continue;
        }
        const btn = document.createElement("button")
        btn.style.flexGrow = "1"
        btn.textContent = SYMBOLS[i][j]
        btn.addEventListener("click", pressButton)
        row.appendChild(btn);
    }}
    //const screen = document.querySelector(".screen")
    //screen.style.display = flex
    calc.appendChild(row)
}
