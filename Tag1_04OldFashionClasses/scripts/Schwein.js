/*function Schwein(name) {
    this.name = name;
    this.gewicht = 10;
    Schwein.anzahl ++;
    
    
}

Schwein.prototype.toString = function() {return this.name + " " + this.gewicht;}
Schwein.prototype.anzahl = 0;
*/
class Schwein {
    _name = "Nobody";

    constructor(parameter) {
        this._name = parameter.name?parameter.name:"Nobody";
        this.gewicht = parameter.gewicht?parameter.gewicht:10;
    }

    futtern() {
        this.gewicht ++;
    }

    /*toString() {
        return "Dieses Schwein heisst " + this.name + " und wiegt " + this.gewicht;
    }
    */

    get name () {
        return this._name;
    }

    set name (value) {
        if(value === "Elsa") return ;
        this._name = value;
    }

   
}

Schwein.prototype.toString = function() {return this.name_ + " " + this.gewicht;}