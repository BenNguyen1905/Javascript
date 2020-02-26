{
    process.stdin.once("data", (input) => {
        var numbers = input.toString().split(" ");
        var a = parseFloat(numbers[0]);
        var b = parseFloat(numbers[1]);
        var c = parseFloat(numbers[2]);
        var p = (a+b+c)/2;
        var s = Math.sqrt(p*(p-a)*(p-b)*(p-c));
        if ((a+b)<=c || (a+c)<=b || (b+c)<=a) {
            console.log("NO");
        } else {
            console.log((p*2).toFixed(2)+" "+s.toFixed(2));
        }
        process.exit();
    });
}