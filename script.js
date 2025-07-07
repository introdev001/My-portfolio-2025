// nav & welcome text
let nav = document.querySelector("nav")
let welText = document.querySelector("#wel-cont")
let header = document.querySelector("header")
let imgcont = document.querySelector("#img-cont")
let textcont = document.querySelector("#text-cont")
let body = document.querySelector("body")
// side bar
let navBtn = document.querySelector("#nav-btn")
let sideBar = document.querySelector("#side-bar")
// side links
let sideBarlinks = document.querySelectorAll(".side-links")
let sideHomelink = document.querySelector("#side-home-btn")
// side bar chat btn
let sideChatbtn = document.querySelector("#side-chat-btn")
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
     },1000)
     sideBarlinks.forEach(link => {
        setTimeout(() => {
        link.classList.toggle("appear")
     } , 1200)
     })
     setTimeout(() => {
        sideChatbtn.classList.toggle("slideinbomp")
     },1300)
}) 

// event for side bar self closing
sideBarlinks.forEach(link => {
    link.addEventListener("click" , () => {
        sideBar.classList.remove("side-active")
        navBtn.classList.remove("activeX")
    })
})

sideHomelink.addEventListener("click" , () => {
        sideBar.classList.remove("side-active")
        navBtn.classList.remove("activeX")

    })