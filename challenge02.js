const userSubmit = document.querySelector("#userSubmit");
const numberInput = document.querySelector("#userNumber");
const userWroteNumber = document.querySelector("#wrotenumber");
const numberEnter = document.querySelector("#numberEnter");
const result = document.querySelector("#result");

const randomNumberGame = {
    play: function (event) {
        const userInput = parseInt(numberInput.value);
        if (numberEnter.value === "") {
            alert("Please set maximum number.")
        } else if (userInput === "") {
            alert("please write number."); 
        } else if (userInput <= parseInt(numberEnter.value)) {
            const number1 = userInput;
            const number2 = parseInt(numberEnter.value);
            const randomComparison = Math.ceil(Math.random() * number2);
            event.preventDefault(event);
            userWroteNumber.innerText=`You chose ${number1} , the machine wrote ${randomComparison}`;
            if (number1 === randomComparison) {
                result.innerText = `You win!`;
            } else {
                result.innerText = `You lost.`;
            }
        } else if (userInput > parseInt(numberEnter.value)){
            alert(`Please write number under ${parseInt(numberEnter.value)}.`);
        }
    }
}

userSubmit.addEventListener("submit",randomNumberGame.play);