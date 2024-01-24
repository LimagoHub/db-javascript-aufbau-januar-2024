window.onload = init;

function init() {
   
   
   /* let pElement = document.querySelector("#MyP");
    //pElement.onclick = function() {alert("click")};
    pElement.addEventListener("click",function() {
        this.style.backgroundColor = "red";
        alert("Ich bin P");}, false
    );
    */
    

    let divElement  = document.querySelector("#MyDiv");
    divElement.addEventListener("mouseover",function(event) {
        
        if(event.target.nodeName === "P")
            event.target.style.backgroundColor = "red";
    }, false
    );
    divElement.addEventListener("mouseout",function(event) {
       
        if(event.target.nodeName === "P")
            event.target.style.backgroundColor = "yellow";
    }, false
    );
}