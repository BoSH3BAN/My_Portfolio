// Go To Designs

document.querySelector(".links ul li:first-of-type a").onclick = function(){
    window.scrollTo({top:1230});
}
// Go To Order

document.querySelector(".links ul li:last-of-type a").onclick = function(){
    window.scrollTo({top:4040});
}

// Go To UP
let upArrow = document.createElement("span")
upArrow.style.cssText= `
position:fixed;
right:20px;
bottom:-35px;
font-size:32px;
transition:0.5s;
cursor:pointer;
`;
upArrow.appendChild(document.createElement("i")).className = "fa-sharp-duotone fa-solid fa-angles-up" 
upArrow.addEventListener("click",(_)=>this.scrollTo({top:0})) // Go To Top
document.body.appendChild(upArrow)
this.onscroll=function(){
    if(this.scrollY > 1000){
        upArrow.style.bottom = "20px"
    }else{
        upArrow.style.bottom = "-35px"
    }
}
// Copy Right Year

document.querySelector(".year").append(new Date().getFullYear().toString())

