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
}else{
    console.log("Can't enable animations for better user expirence")
}


// event for side bar
navBtn.addEventListener("click" , () => {
    sideBar.classList.toggle("side-active")
    navBtn.classList.toggle("activeX")
})
//  @media screen and (min-width:1176px) and (max-width:1280px){
//     /* projects cont */
//     #projects-cont {
//     grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
// }
// }
// @media screen and (min-width:1576px) {
//     /* projects cont */
//     #projects-cont {
//     grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
// }
// }
