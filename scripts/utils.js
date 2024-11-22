import { calculationText } from "./constants.js";

const checkLast = () => {
    const isDot = calculationText.textContent.slice(-1) === "."
    const isDivision = calculationText.textContent.slice(-1) === "/"
    const isMultiplication = calculationText.textContent.slice(-1) === "*"
    const isCalculationEmpty = calculationText.textContent.length === 0
    const isCalculationLenOne = calculationText.textContent.length === 1
    const isMinus = calculationText.textContent.slice(-1) === "-"
    const isMinusMinus = calculationText.textContent.slice(-2) === "--"
    const isMinusPlus = calculationText.textContent.slice(-2) === "-+"
    const isPlus = calculationText.textContent.slice(-1) === "+"
    const isPlusPlus = calculationText.textContent.slice(-2) === "++"
    const isPlusMinus = calculationText.textContent.slice(-2) === "+-"
    const isDivisionMinus = calculationText.textContent.slice(-2) === "/-"
    const isDivisionPlus = calculationText.textContent.slice(-2) === "/+"
    const isMultiplicationMinus = calculationText.textContent.slice(-2) === "*-"
    const isMultiplicationPlus = calculationText.textContent.slice(-2) === "*+"
    
    return [isDot, isDivision, isMultiplication, isCalculationEmpty, isCalculationLenOne, isMinus, isMinusMinus, isMinusPlus, isPlus, isPlusPlus, isPlusMinus, isDivisionMinus, isDivisionPlus, isMultiplicationMinus, isMultiplicationPlus]
}

export {checkLast}