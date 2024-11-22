import { theme1ToTheme2, theme1ToTheme3, theme2ToTheme1, theme2ToTheme3, theme3ToTheme1, theme3ToTheme2 } from "./constants.js"

const main = document.querySelector("main")

const switch1 = document.querySelector(".switch1")
const switch2 = document.querySelector(".switch2")
const switch3 = document.querySelector(".switch3")

const nodes = document.querySelectorAll("*")

const persistTheme = () => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === "theme1") {
        changeTheme1Switch()
    } else if (savedTheme === "theme2") {
        changeTheme2Switch()
    } else {
        changeTheme3Switch()
    }
    document.querySelector("main").classList.remove("display-hidden")
}

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

switch1.addEventListener("click", changeTheme1Switch)
switch2.addEventListener("click", changeTheme2Switch)
switch3.addEventListener("click", changeTheme3Switch)
window.addEventListener("DOMContentLoaded", persistTheme)