let imgVent = document.querySelector(".imagem")
let btnOn = document.querySelector("#btnOn")
let btnOff = document.querySelector("#btnOff")
let btnV1 = document.querySelector("#btnV1")
let btnV2 = document.querySelector("#btnV2")
let btnV3 = document.querySelector("#btnV3")

btnOn.addEventListener('click', ()=>{
    imgVent.style.animationDuration =  3 + "s"

})
btnOff.addEventListener('click', ()=>{
    imgVent.style.animationDuration =  0 + "s"
    imgVent.classList.add("desligar")

})
btnV1.addEventListener('click', ()=>{
    imgVent.style.animationDuration =  1 + "s"

})
btnV2.addEventListener('click',()=>{
    imgVent.style.animationDuration = 0.5 + "s"
})
btnV3.addEventListener('click',()=>{
    imgVent.style.animationDuration = 0.1 + "s"
})
