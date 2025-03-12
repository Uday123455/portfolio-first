const sections=document.querySelectorAll(".section");
const sectBtns=document.querySelectorAll(".controls");
const sectBtn=document.querySelectorAll(".control");
const allsections=document.querySelector(".main-content");

function pagetrans(){
    // button active class
    for(let i=0;i<sectBtn.length();i++){
        sectBtn[i].addEventListener("click",()=>{
            let currentBtn =document.querySelectorAll(".active-btn");
            currentBtn[0].classList=currentBtn[0].className.replace("acitve-btn","");
            this.className += 'active-btn'
        });
    }
}
pagetrans();