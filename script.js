// #hide/show card
const btn=document.getElementById("button");

btn.addEventListener('click',function Togglehide(){
    const hidden=document.getElementById("hidden_card")
    if(hidden.style.display!='none'){
        hidden.style.display="none"
    }
    else{
        hidden.style.display="block"
    }
})
// #show more/less functionality
const more=document.getElementById("btn")

more.addEventListener("click",function Showmore(){
    const para=document.getElementById("para")
    if(para.style.display!="none"){
        para.style.display="none"
        more.innerHTML="View More"
    }
    else{
        para.style.display="block"
        para.style.display="inline"
        more.innerHTML="View Less"
    }
})

// # content slides left/Right

let slideindex=1
showSlides(slideindex)

function rightSlides(n){
    showSlides(slideindex+=n)
}
function showSlides(n){
    let i;
    let content=document.getElementsByClassName("content2")
    if(n>content.length){
        slideindex=1
    }
    if(n<1){
        slideindex=content.length
    }
    for(i=0;i<content.length;i++){
        content[i].style.display="none";
    }
    content[slideindex-1].style.display="block";
}

// # burger_menu functionality


const toggleBtn=document.querySelector(".burger_menu")
const toggleBtnIcon=document.querySelector(".burger_menu .dot");
const dropDownMenu=document.querySelector("dropdown_menu")

toggleBtn.addEventListener("click",function BurgerMenu(){
    dropDownMenu.classList.toggle("open")
    const isOpen=dropDownMenu.classList.contains("open")
    toggleBtnIcon.classList=isOpen
})

