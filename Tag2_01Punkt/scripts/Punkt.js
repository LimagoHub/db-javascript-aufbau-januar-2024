

class Punkt {
    #x = 0;
    #y = 0;

    constructor(parameter) {
        if(parameter) {
            this.#setX( parameter.x ? parameter.x : 0);
            this.#setY( parameter.y ? parameter.y : 0);
        }
    }

    get x() {
        return this.#x;
    }

    #setX (value) {
        if(value < -10 || value> 10) return;
        this.#x = value;
    }

    #setY(value) {
        if(value < -10 || value> 10) return;
        this.#y = value;
    }

    rechts() {
        this.#setX(this.x + 1);
    }
    links() {
        this.#setX(this.x - 1);
    }
    oben() {
        this.#setY(this.y + 1);
    }
    unten() {
        this.#setY(this.y - 1);
    }


    toString() {
        return `Punkt: x=${this.#x}, y=${this.#y}`;
    }

}

(function () {
   
    var p = new Punkt({x:0,y:0});
    for(let i = 0; i < 12 ; i++)
    {
        p.rechts();
        console.log(p.toString());
    }
        
   
    
})();