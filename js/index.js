var buttons = document.getElementsByClassName('btn')
var buttonsAlpha = document.getElementsByClassName('btn-alpha')
var buttonsHidden = document.getElementsByClassName('b1')
var buttonsNotHidden = document.getElementsByClassName('not-hidden')
    
var focused = document.querySelector(".c3");

var keyboardPrimary = document.querySelector(".keyboard-primary")
var keyboardSecondary = document.querySelector(".keyboard-secondary")

var isUpper = false;

for(let i = 0; i < buttons.length; i++) {
buttons[i].addEventListener("click", (e) => {
    e.preventDefault();
    
    if(e.target.textContent === "enter"){
        focused.value += "\n"
        focused.focus()
    }
    else if(e.target.textContent === "tab"){
        focused.value += "    "
        focused.focus()

    }
    else if(e.target.textContent === "<-"){
        focused.value = focused.value.slice(0,-1);
        focused.focus()
    }
    else if(e.target.textContent === "space"){
        focused.value += " "
        focused.focus()
    }
    else if(e.target.textContent === "&123"){
        keyboardPrimary.style.display = "none";
        keyboardSecondary.style.display = "flex";
    }
    else if(e.target.textContent === "abc"){
        keyboardPrimary.style.display = "flex";
        keyboardSecondary.style.display = "none";
    }
    else if(e.target.textContent === "upper" || e.target.textContent === "lower"){
        isUpper=!isUpper;
        if(!isUpper){
            e.target.textContent = "upper";
            for(let j = 0; j< buttonsAlpha.length; j++){
            buttonsAlpha[j].innerHTML = buttonsAlpha[j].innerHTML.toLowerCase();}
            isUpper = false;
        }else{
            e.target.textContent = "lower";
            for(let j = 0; j< buttonsAlpha.length; j++){
            buttonsAlpha[j].innerHTML = buttonsAlpha[j].innerHTML.toUpperCase();}
            isUpper = true;
        }
    
    }
    else if(e.target.textContent === "<=="){
        
        for(let j = 0; j< buttonsHidden.length; j++){
        
            buttonsHidden[j].classList.remove("hidden");
            buttonsNotHidden[j].classList.add("hidden");
        
        }
    }
    else if(e.target.textContent === "==>"){
        for(let j = 0; j< buttonsHidden.length; j++){
           
            buttonsNotHidden[j].classList.remove("hidden");
            buttonsHidden[j].classList.add("hidden");
        }
    }
    else{    
        focused.value += e.target.textContent;
    }
})} 



































// var focused_element = (
//     document.hasFocus() &&
//     document.activeElement !== document.body &&
//     document.activeElement !== document.documentElement &&
//     document.activeElement
// ) || null;
// console.log(focused_element);

// console.log(document.querySelector(":focus"));

// var input = document.querySelector('.c1');
// console.log(input)
// var input_focused = document.activeElement === input && document.hasFocus();
// console.log(input_focused);
// setInterval(function() { 

    // focused = document.querySelector(":focus"); 
    // console.log(focused)
    // for(let i = 0; i < buttons.length; i++) {
    // buttons[i].addEventListener("click", (e) => {
    //     e.preventDefault();
    //     console.log(e.target.textContent)
    //     console.log(focused);
    //     // focused.innerText += e.target.textContent;
    // })}
// },1000);