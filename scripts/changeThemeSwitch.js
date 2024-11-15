const main = document.querySelector("main")
const theme = document.querySelector("main").classList[0]
const switch1 = document.querySelector(".switch1")
const switch2 = document.querySelector(".switch2")
const switch3 = document.querySelector(".switch3")

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
}

setTheme1 = () => {
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
}

setTheme2 = () => {
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
}

setTheme3 = () => {
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
}

changeTheme1Switch = () => {
    if(switch2.classList.contains("switch-location--center")){
        switch2.classList.remove("background-color4b", "switch-location--center")
        switch1.classList.add("background-color4a", "switch-location--left")
        main.classList.remove("theme2")
        main.classList.add("theme1")
        setTheme1()
    }
    
    if(switch3.classList.contains("switch-location--right")){
        switch3.classList.remove("background-color4c", "switch-location--right")
        switch1.classList.add("background-color4a", "switch-location--left")
        main.classList.remove("theme3")
        main.classList.add("theme1")
        setTheme1()
    }
}

changeTheme2Switch = () => {
    if(switch1.classList.contains("switch-location--left")){
        switch1.classList.remove("background-color4a", "switch-location--left")
        switch2.classList.add("background-color4b", "switch-location--center")
        main.classList.remove("theme1")
        main.classList.add("theme2")
        setTheme2()
    }
    
    if(switch3.classList.contains("switch-location--right")){
        switch3.classList.remove("background-color4c", "switch-location--right")
        switch2.classList.add("background-color4b", "switch-location--center")
        main.classList.remove("theme3")
        main.classList.add("theme2")
        setTheme2()
    }
}

changeTheme3Switch = () => {
    if(switch1.classList.contains("switch-location--left")){
        switch1.classList.remove("background-color4a", "switch-location--left")
        switch3.classList.add("background-color4c", "switch-location--right")
        main.classList.remove("theme1")
        main.classList.add("theme3")
        setTheme3()
    }
    
    if(switch2.classList.contains("switch-location--center")){
        switch2.classList.remove("background-color4b", "switch-location--center")
        switch3.classList.add("background-color4c", "switch-location--right")
        main.classList.remove("theme2")
        main.classList.add("theme3")
        setTheme3()
    }
}

switch1.addEventListener("click", changeTheme1Switch)

switch2.addEventListener("click", changeTheme2Switch)

switch3.addEventListener("click", changeTheme3Switch)