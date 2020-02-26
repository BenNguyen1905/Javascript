{
    process.stdin.once("data", (input) => {
        var numbers = input.toString().split(" ");
        var a = parseFloat(numbers[0]);
        //console.log(a);
        var b = parseFloat(numbers[1]);
        var c = parseFloat(numbers[2]);
        var delta = Math.pow(b,2) - (4 * a * c);
        //console.log(delta);
        if (a == b && a == c && a == 0) {
             console.log("VSN");
             process.exit();
        }
        if (delta < 0 || a == b && a == 0) {
             console.log("VN");
             process.exit();
        }
        if (a == 0) {
            var n = (-c/b);
            console.log("x = "+n.toFixed(2));
            process.exit();
        }
        if (delta == 0) {
            var n0 = (-b) / (2 * a);
            console.log("x = "+n0.toFixed(2));
        }  
        if (delta > 0) {
            var n1 = (-b - Math.sqrt(delta)) / (2 * a);
            var n2 = (-b + Math.sqrt(delta)) / (2 * a);
            console.log(n1.toFixed(2)+" "+n2.toFixed(2));
        }
        process.exit();
    });
}