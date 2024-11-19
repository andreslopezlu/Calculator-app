const nums = "0123456789"

const main = document.querySelector("main")

const switch1 = document.querySelector(".switch1")
const switch2 = document.querySelector(".switch2")
const switch3 = document.querySelector(".switch3")

const calculationText = document.querySelector(".calculation__text")

const oneButton = document.querySelector(".one")
const twoButton = document.querySelector(".two")
const threeButton = document.querySelector(".three")
const fourButton = document.querySelector(".four")
const fiveButton = document.querySelector(".five")
const sixButton = document.querySelector(".six")
const sevenButton = document.querySelector(".seven")
const eightButton = document.querySelector(".eight")
const nineButton = document.querySelector(".nine")
const ceroButton = document.querySelector(".cero")
const deleteButton = document.querySelector(".delete")
const resetButton = document.querySelector(".reset")
const equalButton = document.querySelector(".equal")
const dotButton = document.querySelector(".dot")
const plusButton = document.querySelector(".plus")
const minusButton = document.querySelector(".minus")
const divisionButton = document.querySelector(".division")
const multiplicationButton = document.querySelector(".multiplication")

const nodes = document.querySelectorAll("*")

const theme1ToTheme2 = {
    "background-color1a": "background-color1b",
    "text-color2a": "text-color2b",
    "background-color3a": "background-color3b",
    "background-color4a": "background-color4b",
    "background-color5a": "background-color5b",
    "background-color6a": "background-color6b",
    "text-color7a": "text-color7b",
    "background-color8a": "background-color8b",
    "number-key-hover1": "number-key-hover2",
    "delete-hover1": "delete-hover2",
    "reset-hover1": "reset-hover2",
    "equal-hover1": "equal-hover2"
}

const theme1ToTheme3 = {
    "background-color1a": "background-color1c",
    "text-color2a": "text-color2c",
    "background-color3a": "background-color3c",
    "background-color4a": "background-color4c",
    "background-color5a": "background-color5c",
    "background-color6a": "background-color6c",
    "text-color7a": "text-color7c",
    "background-color8a": "background-color8c",
    "number-key-hover1": "number-key-hover3",
    "delete-hover1": "delete-hover3",
    "reset-hover1": "reset-hover3",
    "equal-hover1": "equal-hover3"
}

const theme2ToTheme1 = {
    "background-color1b": "background-color1a",
    "text-color2b": "text-color2a",
    "background-color3b": "background-color3a",
    "background-color4b": "background-color4a",
    "background-color5b": "background-color5a",
    "background-color6b": "background-color6a",
    "text-color7b": "text-color7a",
    "background-color8b": "background-color8a",
    "number-key-hover2": "number-key-hover1",
    "delete-hover2": "delete-hover1",
    "reset-hover2": "reset-hover1",
    "equal-hover2": "equal-hover1"
}

const theme2ToTheme3 = {
    "background-color1b": "background-color1c",
    "text-color2b": "text-color2c",
    "background-color3b": "background-color3c",
    "background-color4b": "background-color4c",
    "background-color5b": "background-color5c",
    "background-color6b": "background-color6c",
    "text-color7b": "text-color7c",
    "background-color8b": "background-color8c",
    "number-key-hover2": "number-key-hover3",
    "delete-hover2": "delete-hover3",
    "reset-hover2": "reset-hover3",
    "equal-hover2": "equal-hover3"
}

const theme3ToTheme1 = {
    "background-color1c": "background-color1a",
    "text-color2c": "text-color2a",
    "background-color3c": "background-color3a",
    "background-color4c": "background-color4a",
    "background-color5c": "background-color5a",
    "background-color6c": "background-color6a",
    "text-color7c": "text-color7a",
    "background-color8c": "background-color8a",
    "number-key-hover3": "number-key-hover1",
    "delete-hover3": "delete-hover1",
    "reset-hover3": "reset-hover1",
    "equal-hover3": "equal-hover1"
}

const theme3ToTheme2 = {
    "background-color1c": "background-color1b",
    "text-color2c": "text-color2b",
    "background-color3c": "background-color3b",
    "background-color4c": "background-color4b",
    "background-color5c": "background-color5b",
    "background-color6c": "background-color6b",
    "text-color7c": "text-color7b",
    "background-color8c": "background-color8b",
    "number-key-hover3": "number-key-hover2",
    "delete-hover3": "delete-hover2",
    "reset-hover3": "reset-hover2",
    "equal-hover3": "equal-hover2"
}

window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === "theme1") {
        changeTheme1Switch()
    } else if (savedTheme === "theme2") {
        changeTheme2Switch()
    } else {
        changeTheme3Switch()
    }
})

const setTheme1 = () => {
    for (const key in theme2ToTheme1) {
        nodes.forEach(element => {
            if(element.classList.contains(key)){
                element.classList.replace(key, theme2ToTheme1[key])
            }
        });
    }

    for (const key in theme3ToTheme1) {
        nodes.forEach(element => {
            if(element.classList.contains(key)){
                element.classList.replace(key, theme3ToTheme1[key])
            }
        });
    }

    localStorage.setItem("theme", "theme1")
}

const setTheme2 = () => {
    for (const key in theme1ToTheme2) {
        nodes.forEach(element => {
            if(element.classList.contains(key)){
                element.classList.replace(key, theme1ToTheme2[key])
            }
        });
    }
    
    for (const key in theme3ToTheme2) {
        nodes.forEach(element => {
            if(element.classList.contains(key)){
                element.classList.replace(key, theme3ToTheme2[key])
            }
        });
    }
    
    localStorage.setItem("theme", "theme2")
}

const setTheme3 = () => {
    for (const key in theme2ToTheme3) {
        nodes.forEach(element => {
            if(element.classList.contains(key)){
                element.classList.replace(key, theme2ToTheme3[key])
            }
        });
    }
    
    for (const key in theme1ToTheme3) {
        nodes.forEach(element => {
            if(element.classList.contains(key)){
                element.classList.replace(key, theme1ToTheme3[key])
            }
        });
    }

    localStorage.setItem("theme", "theme3")
}

const changeTheme1Switch = () => {
    if(switch2.classList.contains("switch-location--center")){
        switch2.classList.remove("background-color4b", "switch-location--center")
        switch1.classList.add("background-color4a", "switch-location--left")
        main.classList.replace("theme2", "theme1")
        setTheme1()
    }
    
    if(switch3.classList.contains("switch-location--right")){
        switch3.classList.remove("background-color4c", "switch-location--right")
        switch1.classList.add("background-color4a", "switch-location--left")
        main.classList.replace("theme3", "theme1")
        setTheme1()
    }
}

const changeTheme2Switch = () => {
    if(switch1.classList.contains("switch-location--left")){
        switch1.classList.remove("background-color4a", "switch-location--left")
        switch2.classList.add("background-color4b", "switch-location--center")
        main.classList.replace("theme1", "theme2")
        setTheme2()
    }
    
    if(switch3.classList.contains("switch-location--right")){
        switch3.classList.remove("background-color4c", "switch-location--right")
        switch2.classList.add("background-color4b", "switch-location--center")
        main.classList.replace("theme3", "theme2")
        setTheme2()
    }
}

const changeTheme3Switch = () => {
    if(switch1.classList.contains("switch-location--left")){
        switch1.classList.remove("background-color4a", "switch-location--left")
        switch3.classList.add("background-color4c", "switch-location--right")
        main.classList.replace("theme1", "theme3")
        setTheme3()
    }
    
    if(switch2.classList.contains("switch-location--center")){
        switch2.classList.remove("background-color4b", "switch-location--center")
        switch3.classList.add("background-color4c", "switch-location--right")
        main.classList.replace("theme2", "theme3")
        setTheme3()
    }
}

const oneClick = () => {
    calculationText.innerHTML += "1";
    console.log(calculationText.innerHTML)
}

const twoClick = () => {
    calculationText.innerHTML += "2";
    console.log(calculationText.innerHTML)
}

const threeClick = () => {
    calculationText.innerHTML += "3";
    console.log(calculationText.innerHTML)
}

const fourClick = () => {
    calculationText.innerHTML += "4";
    console.log(calculationText.innerHTML)
}

const fiveClick = () => {
    calculationText.innerHTML += "5";
    console.log(calculationText.innerHTML)
}

const sixClick = () => {
    calculationText.innerHTML += "6";
    console.log(calculationText.innerHTML)
}

const sevenClick = () => {
    calculationText.innerHTML += "7";
    console.log(calculationText.innerHTML)
}

const eightClick = () => {
    calculationText.innerHTML += "8";
    console.log(calculationText.innerHTML)
}

const nineClick = () => {
    calculationText.innerHTML += "9";
    console.log(calculationText.innerHTML)
}

const ceroClick = () => {
    calculationText.innerHTML += "0";
    console.log(calculationText.innerHTML)
}

const deleteClick = () => {
    const currentCalculation = calculationText.innerHTML ;
    const newValue = currentCalculation.slice(0, -1)
    calculationText.innerHTML = newValue
    console.log(calculationText.innerHTML)
}

const resetClick = () => {
    calculationText.innerHTML = ""
    console.log(calculationText.innerHTML)
}

const equalClick = () => {

}

const dotClick = () => {
    if (calculationText.innerHTML.slice(-1) === "."){

    } else {
        calculationText.innerHTML += ".";
        console.log(calculationText.innerHTML)
    }
}

const plusClick = () => {
    calculationText.innerHTML.slice(-1) === "+" ? null : calculationText.innerHTML += "+"
}

const minusClick = () => {
    calculationText.innerHTML.slice(-1) === "-" ? null : calculationText.innerHTML += "-"
}

const divisionClick = () => {
    if (calculationText.innerHTML.slice(-1) === "/" || (calculationText.innerHTML.length === 0)){
        
    } else {
        calculationText.innerHTML += "/";
        console.log(calculationText.innerHTML)
    }
}

const multiplicationClick = () => {
    if (calculationText.innerHTML.slice(-1) === "x" || (calculationText.innerHTML.length === 0)){

    } else {
        calculationText.innerHTML += "x";
        console.log(calculationText.innerHTML)
    }
}

switch1.addEventListener("click", changeTheme1Switch)
switch2.addEventListener("click", changeTheme2Switch)
switch3.addEventListener("click", changeTheme3Switch)

oneButton.addEventListener("click", oneClick)
twoButton.addEventListener("click", twoClick)
threeButton.addEventListener("click", threeClick)
fourButton.addEventListener("click", fourClick)
fiveButton.addEventListener("click", fiveClick)
sixButton.addEventListener("click", sixClick)
sevenButton.addEventListener("click", sevenClick)
eightButton.addEventListener("click", eightClick)
nineButton.addEventListener("click", nineClick)
ceroButton.addEventListener("click", ceroClick)
deleteButton.addEventListener("click", deleteClick)
resetButton.addEventListener("click", resetClick)
equalButton.addEventListener("click", equalClick)
dotButton.addEventListener("click", dotClick)
plusButton.addEventListener("click", plusClick)
minusButton.addEventListener("click", minusClick)
divisionButton.addEventListener("click", divisionClick)
multiplicationButton.addEventListener("click", multiplicationClick)