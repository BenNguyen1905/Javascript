{
    process.stdin.once("data", (input) =>{
        var temp = input.toString().split(" ");
        var a = parseInt(temp[0]);
        var b = parseInt(temp[1]);
        if (b != 0) {
            var cong = a + b;
            var tru = a - b;
            var nhan = a * b;
            var chia = a / b;
            console.log(cong + " " + tru);
            console.log(nhan + " " + chia.toFixed(2));
        }    
        process.exit();
    });
}