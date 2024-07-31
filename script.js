var button=document.querySelectorAll("a");
button.forEach(btn=>{
    btn.addEventListener("click",function(s){
        var z=s.clientX-s.target.offsetLeft;
        var y=s.clientY-s.target.offsetTop;

        var tıkla=document.createElement("span");
        tıkla.style.left=z+"px";
        tıkla.style.top=y+"px";
        this.appendChild(tıkla);

        setTimeout(()=> {
           tıkla.remove()
        },800)
    }
)
})