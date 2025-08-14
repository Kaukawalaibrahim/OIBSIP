
const display = document.getElementById("display");


const buttons = document.querySelectorAll("button");


function calculate(expression) {
    try {

        expression = expression.replace(/\^/g, '**');
        let result = eval(expression);
        return result;
    } catch (error) {
        return "Error";
    }
}


buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "C") {
            display.value = "";
        } else if (value === "Del") {
            display.value = display.value.slice(0, -1);
        } else if (value === "=" || value === "Enter") {
            display.value = calculate(display.value);
        } else {
            display.value += value;
        }
    });
});


document.addEventListener("keydown", function (event) {
    if ((event.key >= "0" && event.key <= "9") || "+-*/().%^".includes(event.key)) {
        display.value += event.key;
    } else if (event.key === "Backspace") {
        display.value = display.value.slice(0, -1);
    } else if (event.key === "Enter") {
        display.value = calculate(display.value);
    } else if (event.key === "Escape") {
        display.value = "";
    }
});
