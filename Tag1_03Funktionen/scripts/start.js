function init() {
   

    // Ankerelement holen indem die Tabelle eingehängt wird
    let divElement = document.getElementById("MyTable");
    divElement.innerHTML = "";

    let tableElement = document.createElement("TABLE");
    divElement.append(tableElement);

    tableElement.setAttribute("border", "1");

    let tbodyElement = document.createElement("TBODY");
    tableElement.append(tbodyElement);

    for(let zeile = 0; zeile < 3; zeile ++) {

        let trElement = document.createElement("TR");
        tbodyElement.append(trElement);
        if(zeile % 2 == 0)
            trElement.style.backgroundColor = "yellow";

        for(let spalte = 0; spalte < 2; spalte ++) {
            let tdElement = document.createElement("TD");
            trElement.append(tdElement);

            let textNode = document.createTextNode(`Zeile ${zeile}, Spalte ${spalte}`);
            tdElement.append(textNode);
        }

    }

    // alt und doof
    /*let liste = tableElement.getElementsByTagName("TD");
    for(let element in liste ) {
        console.log(liste[element]);
    }
    */

    // neu und gut
    let treffer = document.querySelector("#MyTable");

}

