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

        var help = this.ulElement;

        this.liElement = document.createElement("LI");
        this.liElement.appendChild(document.createTextNode(label));
        this.liElement.addEventListener(
                "click", 
                function(e){
                    this.parentNode.querySelectorAll("UL").forEach(element => {
                        element.style.display="none";
                     }
                    );
                    help.style.display = "";
                }
        );
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
        this.liElement.addEventListener("click", callback);
    }
}

