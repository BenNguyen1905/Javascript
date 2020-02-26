{
    process.stdin.once("data", (input)=>{
        var r = input;
        var dienTich = 4*3.14*Math.pow(r,2);
        var theTich = (4/3)*3.14*Math.pow(r,3);
        console.log(dienTich.toFixed(2) + " " + theTich.toFixed(2));
        process.exit();
    });
}