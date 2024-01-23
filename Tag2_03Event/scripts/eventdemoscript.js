window.onload = init;

function init() {
    let pElement = document.querySelector("#MyP");
    //pElement.onclick = function() {alert("click")};
    pElement.addEventListener("click",function() {
        alert("Ich bin P");}, false
    );
    
    

    let divElement  = document.querySelector("#MyDiv");
    divElement.addEventListener("click",function(event) {
        console.log("This:" + this.nodeName);
        console.log("Target:" + event.target.nodeName);
        //event.stopImmediatePropagation(); // Verhindert weiter blubbern
    }, false
    );
}