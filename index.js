const hamberger = document.querySelector(".hamberger");
const nav = document.querySelector(".nav")
const ul = document.querySelector(".ul")
 
hamberger.addEventListener("click" , () => {
    nav.classList.toggle("h-72")
    ul.classList.toggle("v")
})