{
    process.stdin.once("data", (input)=>{
        if (input <= 100) {
            var a = input;
        }
        var aa = Math.pow(a,2);
        var aaa = Math.pow(a,3);
        var aaaa = Math.pow(a,4);
        console.log(aa + " " + aaa + " " + aaaa);
        process.exit();
    });
}