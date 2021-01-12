var btnToggle = document.getElementById("btn-toggle");
var btnToggleIcon = document.getElementById("btn-toggle-icon");
    
var isDark = true;

btnToggleIcon.addEventListener("click",()=>{
    if(!isDark){
        btnToggle.style.justifyContent = "flex-start";
        isDark = true;
        document.documentElement.style.setProperty('--color1', '#10111f');
        document.documentElement.style.setProperty('--bg1', 'linear-gradient(145deg, #111221, #0e0f1c)');
        document.documentElement.style.setProperty('--color5', '#f1f1f3');
        document.documentElement.style.setProperty('--bs', '9px 9px 23px #0f111a, -9px -9px 20px #1a1b32');
        document.getElementById("toggle-img").src = "https://img.icons8.com/ios/2x/moon-man.png"
    }
    else{
        btnToggle.style.justifyContent = "flex-end";
        isDark = false;
        document.documentElement.style.setProperty('--color1', '#f1f1f3');
        document.documentElement.style.setProperty('--bg1', '#f1f1f3');
        document.documentElement.style.setProperty('--color5', '#10111f');
        document.documentElement.style.setProperty('--bs','20px 20px 60px #bebebe,20px 20px 60px #ffffff');
        document.getElementById("toggle-img").src = "https://img.icons8.com/fluent-systems-regular/2x/sun.png"
    }
})
