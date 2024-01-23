function init() {
   
    var piggy = new Schwein({ gewicht:20});
    console.log(piggy.toString());
    piggy.futtern();
    console.log(piggy.toString());
    piggy.name = "Rudi";
    console.log(piggy.toString());
    piggy.name = "Elsa";
    console.log(piggy.toString());
    
}

