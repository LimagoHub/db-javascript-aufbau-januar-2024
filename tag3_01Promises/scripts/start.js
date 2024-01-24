window.addEventListener("DOMContentLoaded", event=>{
    
    init();



});

async function init() {
    let p1 = foo();
    /*
    let p2 = bar();
    let p3 = foobar();
    */
   /*let p1 = new Promise(resolve=>{
    resolve("Foo");
   });*/
   let p2 = new Promise(resolve=>{
    resolve("Bar");
   });
   let p3 = new Promise((resolve, reject)=>{
    reject("FooBar");
   });

   let p4 = MyFunc("Doof");
    console.log("start");
    p1
        .then(erg=>console.log(erg))
        .catch(ex=>console.log(ex))
        .finally(()=>console.log("Done"));
    p2.then(erg=>console.log(erg));
    p3.then(
        erg=>console.log("Erfolg: " +erg),
        erg=>console.log("Misserfolg: " +erg)
    );
    p4.then(
        erg=>console.log("Erfolg: " +erg),
        erg=>console.log("Misserfolg: " +erg)
    );
    
}


async function foo() {
    //return "foo";
    throw new Error('Failed to arrive');
}

async function bar() {
    return "bar";
}
async function foobar() {
    return "foobar";
}


async function MyFunc(myParam) {

    return new Promise((resolve, reject)=>{
        if(myParam === "OK")
            resolve("Das ist ok");
        else
            reject("Nö");
    });
}