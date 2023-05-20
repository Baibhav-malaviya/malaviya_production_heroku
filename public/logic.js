//!This is the function to add the event listener to the hamburger menu for toggle,
//! but we add the onclick event to that menu item.
//? that's why this line is commented out.

// document.getElementById("parallel").addEventListener("click", onClickMenu);
function onClickMenu(){
    document.getElementById("hidden").classList.toggle("show");
    document.getElementById("parallel").classList.toggle("cross");
    document.body.classList.toggle("head");
    
}

//  function for open the alert box
// function alert(){
//     document.getElementById("alert").classList.add("alert");
//     // document.body.classList.add("blur");
//     document.getElementById("blur1").classList.add("blur");
//     document.body.style.pointerEvents = "none";
//     document.body.style.position = "fixed";
//     document.getElementById("alert").style.pointerEvents = "auto";
// }

//  function for close the alert box
function closse(){
    document.getElementById("alert").classList.remove("alert");
    document.body.classList.remove("blur");
    document.getElementById("blur1").classList.remove("blur");
    document.body.style.pointerEvents = "auto";
    document.body.style.position = "absolute";
}


//! ==============js code for changing the header bgcolor on scrolling==========
// window.addEventListener("scroll", function(event){
    
//     let scroll = this.scrollY;
//    if(scroll > 1){
//          document.getElementById("header").classList.add("header-bg");
//    }
//    else{
//     document.getElementById("header").classList.remove("header-bg");
//    }
// });

//this function is for removing the rotateIn animation after one performance(that is 1s)
function rotateIn(){
    document.getElementById("bholu").classList.add("rotate_");
    //reomve the .rotate_  from #bholu after 1s
    setTimeout(() => {
        document.getElementById("bholu").classList.remove("rotate_");
    }, 1000);

}

//! =========================Function for dark mode==============================

var darkNum=0;

localStorage.setItem("darkNum", darkNum);

document.getElementsByClassName('dark')[0].addEventListener('click', darkMode)

function darkMode(){
    if(darkNum===1){
        darkNum=0;
    }else{
        darkNum=1;
    }
}
console.log(darkNum);


if(darkNum==1){
    let forDarkI=document.querySelectorAll(".forDarkI");
    for(let i=0; i<forDarkI.length; i++){
        forDarkI[i].addEventListener("click",goDarkMode)
    }


    let forDarkA=document.querySelectorAll(".forDarkA");
    for(let i=0; i<forDarkA.length; i++){
        forDarkA[i].addEventListener("click",goDarkMode)
    }

    let forDarkS=document.querySelectorAll(".forDarkS");
    for(let i=0; i<forDarkS.length; i++){
        forDarkS[i].addEventListener("click",goDarkMode)
    }
}


function goDarkMode() {
    let circle = document.getElementsByClassName("circle");
    let header =document.querySelector("#header");
    let body = document.querySelector("body");
    header.style.transition="background-color 0.3s ease-in";
    if(darkNum===1){
        header.classList.add("goDark");
        body.classList.add("goDark");
    }else{
        header.classList.remove("goDark");
        body.classList.remove("goDark");
    }
    // header.classList.toggle("goDark");
    
    // body.classList.toggle("goDark");
    body.style.transition=" background-color 0.3s ease-in";

    //For changing the image (production_house) on going the dark mode
    let production_house_image = document.querySelector("#production_house_image");
    if(production_house_image.getAttribute("src") == "/production_house.svg"){
        production_house_image.setAttribute("src", "/production_houseD.svg");
    }else{
        production_house_image.setAttribute("src", "/production_house.svg");
    }
   
    // document.getElementById("header").classList.toggle("goDark");
    // let _header = document.querySelector("#header");
    // _header.classList.toggle("goDark");
    // console.log(_header);
}


