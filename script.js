const switch1 = document.querySelector(".switch1")
const switch2 = document.querySelector(".switch2")
const switch3 = document.querySelector(".switch3")

changeSwitchTheme1 = () => {
    if(switch2.classList.contains("switch-location--center")){
        switch2.classList.remove("background-color4a", "switch-location--center")
        switch1.classList.add("background-color4a", "switch-location--left")
    }
    
    if(switch3.classList.contains("switch-location--right")){
        switch3.classList.remove("background-color4a", "switch-location--right")
        switch1.classList.add("background-color4a", "switch-location--left")
    }
}

changeSwitchTheme2 = () => {
    if(switch1.classList.contains("switch-location--left")){
        switch1.classList.remove("background-color4a", "switch-location--left")
        switch2.classList.add("background-color4a", "switch-location--center")
    }
    
    if(switch3.classList.contains("switch-location--right")){
        switch3.classList.remove("background-color4a", "switch-location--right")
        switch2.classList.add("background-color4a", "switch-location--center")
    }
}

changeSwitchTheme3 = () => {
    if(switch1.classList.contains("switch-location--left")){
        switch1.classList.remove("background-color4a", "switch-location--left")
        switch3.classList.add("background-color4a", "switch-location--right")
    }
    
    if(switch2.classList.contains("switch-location--center")){
        switch2.classList.remove("background-color4a", "switch-location--center")
        switch3.classList.add("background-color4a", "switch-location--right")
        console.log("ok")
    }
}

switch1.addEventListener("click", changeSwitchTheme1)

switch2.addEventListener("click", changeSwitchTheme2)

switch3.addEventListener("click", changeSwitchTheme3)