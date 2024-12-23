import { keyboard, oneButton, twoButton, threeButton, fourButton, fiveButton, sixButton, sevenButton, eightButton, nineButton, ceroButton, 
    deleteButton, resetButton, equalButton, dotButton, plusButton, minusButton, divisionButton, multiplicationButton } from "./buttons.js"

import { regex, calculationText } from "./constants.js";

import { checkLast } from "./utils.js";

const oneClick = () => {
    calculationText.textContent += "1";
}

const twoClick = () => {
    calculationText.textContent += "2";
}

const threeClick = () => {
    calculationText.textContent += "3";
}

const fourClick = () => {
    calculationText.textContent += "4";
}

const fiveClick = () => {
    calculationText.textContent += "5";
}

const sixClick = () => {
    calculationText.textContent += "6";
}

const sevenClick = () => {
    calculationText.textContent += "7";
}

const eightClick = () => {
    calculationText.textContent += "8";
}

const nineClick = () => {
    calculationText.textContent += "9";
}

const ceroClick = () => {
    calculationText.textContent += "0";
}

const deleteClick = () => {
    const currentCalculation = calculationText.textContent ;
    const newValue = currentCalculation.slice(0, -1)
    calculationText.textContent = newValue
}

const resetClick = () => {
    calculationText.textContent = ""
}

const equalClick = () => {
    const calcList = calculationText.textContent.split(regex)
    const resultDiv = calculateDivision(calcList)
    const resultMult = calculateMultiplication(resultDiv)
    const resultSub = calculateSubtraction(resultMult)
    const result = calculateAddition(resultSub)
    document.querySelector(".calculation__text").textContent = result[0].toFixed(3)
}

const dotClick = () => {
    const isDotIncluded = calculationText.textContent.split(regex).slice(-1)[0].includes(".")

    if (calculationText.textContent.slice(-1) === "." || isDotIncluded){

    } else {
        calculationText.textContent += ".";
    }
}

const plusClick = () => {
    const [isDot, isDivision, isMultiplication, isCalculationEmpty, isCalculationLenOne, isMinus, isMinusMinus, isMinusPlus, isPlus, isPlusPlus, isPlusMinus, isDivisionMinus, isDivisionPlus, isMultiplicationMinus, isMultiplicationPlus] = checkLast()

    if (isDot || (isCalculationLenOne && (isPlus || isMinus)) || isMinusMinus || isMinusPlus || isPlusPlus || isPlusMinus || isDivisionMinus || isDivisionPlus || isMultiplicationMinus || isMultiplicationPlus){

    } else {
        calculationText.textContent += "+"
    }
}

const minusClick = () => {
    const [isDot, isDivision, isMultiplication, isCalculationEmpty, isCalculationLenOne, isMinus, isMinusMinus, isMinusPlus, isPlus, isPlusPlus, isPlusMinus, isDivisionMinus, isDivisionPlus, isMultiplicationMinus, isMultiplicationPlus] = checkLast()

    if (isDot || (isCalculationLenOne && (isMinus || isPlus)) || isMinusMinus || isMinusPlus || isPlusPlus || isPlusMinus || isDivisionMinus || isDivisionPlus || isMultiplicationMinus || isMultiplicationPlus){

    } else {
        calculationText.textContent += "-"
    }
}

const divisionClick = () => {
    const [isDot, isDivision, isMultiplication, isCalculationEmpty, isCalculationLenOne, isMinus, isMinusMinus, isMinusPlus, isPlus, isPlusPlus, isPlusMinus, isDivisionMinus, isDivisionPlus, isMultiplicationMinus, isMultiplicationPlus] = checkLast()

    if (isDot || isDivision || isMultiplication || isCalculationEmpty || isMinus || isPlus){
        
    } else {
        calculationText.textContent += "/";
    }
}

const multiplicationClick = () => {
    const [isDot, isDivision, isMultiplication, isCalculationEmpty, isCalculationLenOne, isMinus, isMinusMinus, isMinusPlus, isPlus, isPlusPlus, isPlusMinus, isDivisionMinus, isDivisionPlus, isMultiplicationMinus, isMultiplicationPlus] = checkLast()

    if (isDot || isDivision || isMultiplication || isCalculationEmpty || isMinus || isPlus){

    } else {
        calculationText.textContent += "*";
    }
}

const clicks = (event) => {
    const keys = event.target.closest("button")
    const calc = calculationText.textContent
    // keys ? console.log(calc) : null
    const calcList = calculationText.textContent.split(regex)
    console.log(calcList)
}

const firstDivisionIndex = (calcList) => {
    const index = calcList.indexOf("/")
    return index
}

const firstMultiplicationIndex = (calcList) => {
    const index = calcList.indexOf("*")
    return index
}

const firstMinusIndex = (calcList) => {
    const index = calcList.indexOf("-")
    return index
}

const firstPlusIndex = (calcList) => {
    const index = calcList.indexOf("+")
    return index
}

const calculateDivision = (calcList) => {

    let modifiedList = calcList

    let divIndex = firstDivisionIndex(calcList)
    let leftIndex = null
    let rightIndex = null
    let leftValue = null
    let rightValue = null
    let result = null

    while (divIndex !== -1){
        leftIndex = divIndex-1
        rightIndex = divIndex+1
        leftValue = typeof modifiedList[leftIndex] === "string" ? parseFloat(modifiedList[leftIndex]) : modifiedList[leftIndex]
        rightValue = typeof modifiedList[rightIndex] === "string" ? parseFloat(modifiedList[rightIndex]) : modifiedList[rightIndex]
        result = leftValue/rightValue
        modifiedList.splice(leftIndex, 3, result)
        divIndex = firstDivisionIndex(modifiedList)
    }
    return modifiedList
}

const calculateMultiplication = (resultDiv) => {

    let modifiedList = resultDiv

    let multIndex = firstMultiplicationIndex(resultDiv)
    let leftIndex = null
    let rightIndex = null
    let leftValue = null
    let rightValue = null
    let result = null

    while (multIndex !== -1){
        leftIndex = multIndex-1
        rightIndex = multIndex+1
        leftValue = typeof modifiedList[leftIndex] === "string" ? parseFloat(modifiedList[leftIndex]) : modifiedList[leftIndex]
        rightValue = typeof modifiedList[rightIndex] === "string" ? parseFloat(modifiedList[rightIndex]) : modifiedList[rightIndex]
        result = leftValue*rightValue
        modifiedList.splice(leftIndex, 3, result)
        multIndex = firstMultiplicationIndex(modifiedList)
    }
    return modifiedList
}

const calculateSubtraction = (resultMult) => {

    let modifiedList = resultMult

    let minusIndex = firstMinusIndex(resultMult)
    let leftIndex = null
    let rightIndex = null
    let leftValue = null
    let rightValue = null
    let result = null

    while (minusIndex !== -1){
        leftIndex = minusIndex-1
        rightIndex = minusIndex+1
        leftValue = typeof modifiedList[leftIndex] === "string" ? parseFloat(modifiedList[leftIndex]) : modifiedList[leftIndex]
        rightValue = typeof modifiedList[rightIndex] === "string" ? parseFloat(modifiedList[rightIndex]) : modifiedList[rightIndex]
        result = leftValue-rightValue
        modifiedList.splice(leftIndex, 3, result)
        minusIndex = firstMinusIndex(modifiedList)
    }
    return modifiedList
}

const calculateAddition = (resultSub) => {

    let modifiedList = resultSub

    let plusIndex = firstPlusIndex(resultSub)
    let leftIndex = null
    let rightIndex = null
    let leftValue = null
    let rightValue = null
    let result = null

    while (plusIndex !== -1){
        leftIndex = plusIndex-1
        rightIndex = plusIndex+1
        leftValue = typeof modifiedList[leftIndex] === "string" ? parseFloat(modifiedList[leftIndex]) : modifiedList[leftIndex]
        rightValue = typeof modifiedList[rightIndex] === "string" ? parseFloat(modifiedList[rightIndex]) : modifiedList[rightIndex]
        result = leftValue+rightValue
        modifiedList.splice(leftIndex, 3, result)
        plusIndex = firstPlusIndex(modifiedList)
    }
    return modifiedList
}

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

keyboard.addEventListener("click", clicks)