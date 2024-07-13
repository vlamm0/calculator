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
            alert("not a valid operator")
        
    }
}

var query = prompt("query")
query = query.split(" ")
// send query results through operate to call correct operation
alert(operate(query))