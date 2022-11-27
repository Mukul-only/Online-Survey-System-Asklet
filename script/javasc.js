window.addEventListener("scroll",function(){
    document.querySelector("#navigation").classList.add("scroll");
    if(window.scrollY === 0)
    document.querySelector("#navigation").classList.remove("scroll");
    
});
