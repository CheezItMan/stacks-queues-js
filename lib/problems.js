const Stack = require("../lib/stack");
/*
Time Complexity: ?
Space Complexity: ?
*/
const balanced = (str) => {
    const pairs = {
        '}': '{',
        ']': '[',
        ')': '('
    }
    const stack = new Stack();
    for (let char of str.split("")) {
        if (!pairs[char]) {
            stack.push(char);
        } else {
            if (pairs[char] !== stack.pop()) return false
        }
    }

    if (stack.isEmpty()) {
        return true;
    } else {
        return false;
    }
}

/*
Time Complexity: ?
Space Complexity: ?
*/
const evaluatePostfix = (expr) => {
    const stack = new Stack();
    for (let char of expr.split("")) {
        if (char === parseInt(char).toString()) {
            stack.push(parseInt(char))
        } else {
            const num1 = stack.pop()
            const num2 = stack.pop()
            switch (char) {
                case "+":
                    stack.push(num2 + num1);
                    break;
                case "-":
                    stack.push(num2 - num1);
                    break;
                case "*":
                    stack.push(num2 * num1);
                    break;
                case "/":
                    stack.push(Math.floor(num2 / num1));
                    break;
            }
        }
    }
    return stack.pop();
}

exports.evaluatePostfix = evaluatePostfix;
exports.balanced = balanced;