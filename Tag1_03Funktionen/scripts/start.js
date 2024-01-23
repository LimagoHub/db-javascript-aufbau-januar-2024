function init() {
   
    console.log(crazy().myFunc());

    /*
    const demoList = [4, 3, 5, 10, 7, 5, 11, 19, 2];
    console.log(demoList.filter(number => number < 10));
    console.log(demoList.filter(MyFilter));
    //console.log(sinnDesLebens()());
      */  
}

function MyFilter (number) {
    return number < 10;

}




function sinnDesLebens() {
    let y = 100;
        var x =  ()=> 37.11 + y;
        sqr = input => input * input;
        sum = (a,b) => a + b;
        y = 1000;
        return x;
}

function sqr(x) {
    return x * x;
}


function crazy () {
    var inner =100;

    var myFunc = function() {
        console.log("Aber hallo");
    }
    
    return {inner: inner, myFunc:myFunc};
}

