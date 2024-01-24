class MenuBar {

    ulElement = undefined;

    constructor(id) {
        
        let divElement = document.querySelector(id);
        if(divElement)
        {
            this.ulElement = document.createElement("UL");
            divElement.append(this.ulElement);
        } else {
            console.log("Div Element nicht gefunden");
        }

    }

    addMenu(menu) {
        this.ulElement.appendChild(menu.liElement);
        this.ulElement.appendChild(menu.ulElement);
    }

}

class Menu {
    ulElement = undefined;
    liElement = undefined;
    constructor(label) {

        this.ulElement = document.createElement("UL");
        this.ulElement.style.display="none";

        this.liElement.addEventListener("click",function(e){
            // this = Reference auf das aulösende Element
        });

        this.liElement = document.createElement("LI");
        this.liElement.appendChild(document.createTextNode(label));
       
    }
    addMenuItem(menuItem) {
        this.ulElement.appendChild(menuItem.liElement);
        
    }
}

class MenuItem {
    liElement = undefined;
    constructor(label, callback) {
        this.liElement = document.createElement("LI");
        this.liElement.appendChild(document.createTextNode(label));
        
    }
}

