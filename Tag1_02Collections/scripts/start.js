function init() {
    /*let myArray = [];
    console.log(myArray.length);
    myArray[0] = 10;
    myArray[5] = 50;
    
    console.log("Start");
    myArray.forEach((value,key)=>{
        console.log("value = " + value + ", key = " + key);
    });
    console.log("End");
    console.log("Start");
    for(let i = 0; i < myArray.length; i++) {
        console.log(`value = ${myArray[i]} key = ${i} `);
    }
    console.log("End");
    console.log("Start");
    for(let key of myArray) {
            console.log(`value = ${key}`);
    }
    console.log("End");

    console.log(myArray.length);*/

    /*
    var MyOject = { "Mayer": 1000, "Müller":2000};
    MyOject["Mayer"] = 5000;
    MyOject["Schmitt"] = 1000;
    

    for(let key in MyOject) {
        console.log(`value = ${MyOject[key]} key = ${key} `);
    }
    */

    /*
    var messwerte = [];

    messwerte.push({"Temp":30, "Druck":943});
    messwerte.push({"Temp":28, "Druck":943, "Feuchte": 30});

    messwerte.forEach((value,key)=>{
        console.log("Messwerr: " + key);
        for(let fritz in value) {
            console.log(`    value = ${value[fritz]} key = ${fritz} `);
        }
    });
    */
    var planeten = {
        "Merkur": {
            "Masse":1000,
            "Entfernung":1400
        },
        "Venus": {
            "Masse":1000,
            "Entfernung":1400,
            "Durchmesser":2000
        }

       
    };

    console.log(planeten.Venus.Durchmesser);

    var john = {
        vorname:"John",
        nachname: "Doe",
        
        sprachen: ["deutsch","Englisch"],
        briefanrede: function() { return this.vorname + " " + this.nachname;}
    } ;

    console.log(john.briefanrede());
}