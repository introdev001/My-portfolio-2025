// nav & welcome text
let nav = document.querySelector("nav")
let welText = document.querySelector("#wel-cont")
let header = document.querySelector("header")
let imgcont = document.querySelector("#img-cont")
let textcont = document.querySelector("#text-cont")
// body selector
let body = document.querySelector("body")
// side bar
let navBtn = document.querySelector("#nav-btn")
let sideBar = document.querySelector("#side-bar")
// side links
let sideBarlinks = document.querySelectorAll(".side-links")
let sideHomelink = document.querySelector("#side-home-btn")
// side bar chat btn
let sideChatbtn = document.querySelector("#side-chat-btn")
// light icon dark icon
let lightIcon = document.querySelector("#light")
let darkIcon = document.querySelector("#dark")
// side bar light icon dark icon
let sidelightIcon = document.querySelector("#side-light")
let sidedarkIcon = document.querySelector("#side-dark")
// theme switcher btn
let themeSwitcherbtn = document.querySelector("#theme-switcher")
// side theme switcher btn
let sidethemeSwitcherBtn = document.querySelector("#side-theme-switcher")
// if statement for removing wel come msg on small screens

if(window.innerHeight > 480){
    setTimeout(() => {
    welText.style.opacity = "0"
} , 1000)
welText.addEventListener("transitionend" , () => {
    welText.style.display = "none"
   nav.classList.add("active")
   navBtn.classList.add("active")
   imgcont.classList.add("active")
   textcont.classList.add("active")
   
}) 
}
// event for side bar
navBtn.addEventListener("click" , () => {
    sideBar.classList.toggle("side-active")
    navBtn.classList.toggle("activeX")
       setTimeout(() => {
        sideHomelink.classList.toggle("appear")
     },600)
     sideBarlinks.forEach(link => {
        setTimeout(() => {
        link.classList.toggle("appear")
     } , 700)
     })
     setTimeout(() => {
        sideChatbtn.classList.toggle("slideinbomp")
        sidethemeSwitcherBtn.classList.toggle("slideinbomp")
     },800)
}) 

// event for side bar self closing
sideBarlinks.forEach(link => {
    link.addEventListener("click" , () => {
        sideBar.classList.toggle("side-active")
        navBtn.classList.toggle("activeX")
        sideChatbtn.classList.toggle("slideinbomp")
        sideHomelink.classList.toggle("appear")
        sideBarlinks.forEach(link => {
            link.classList.toggle("appear")
        })
    })
})
sideHomelink.addEventListener("click" , () => {
        sideBar.classList.remove("side-active")
        navBtn.classList.remove("activeX")
        sideHomelink.classList.remove("appear")
        sideChatbtn.classList.remove("slideinbomp")
       sideBarlinks.forEach(link => {
        link.classList.remove("appear")
       })
})
sidethemeSwitcherBtn.addEventListener("click" , () => {
    sideBar.classList.remove("side-active")
        navBtn.classList.remove("activeX")
        sideHomelink.classList.remove("appear")
        sideChatbtn.classList.remove("slideinbomp")
        sidethemeSwitcherBtn.classList.remove("slideinbomp")
       sideBarlinks.forEach(link => {
        link.classList.remove("appear")
       })
})
// event for switching theme
    themeSwitcherbtn.addEventListener("click" , () => {
    body.classList.toggle("light-theme")
    if(body.classList.contains("light-theme")){
           darkIcon.style.display = "none"
           lightIcon.style.display = "inline-block"
    }else{
            lightIcon.style.display = "none"
            darkIcon.style.display = "inline-block"
    }
})
// event for side bar switching theme
    sidethemeSwitcherBtn.addEventListener("click" , () => {
    body.classList.toggle("light-theme")
    if(body.classList.contains("light-theme")){
           sidedarkIcon.style.display = "none"
           sidelightIcon.style.display = "inline-block"
    }else{
            sidelightIcon.style.display = "none"
            sidedarkIcon.style.display = "inline-block"
    }
})
