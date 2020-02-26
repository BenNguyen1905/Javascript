{
    process.stdin.once("data", (input) =>{
        var temp = input.toString().split(" ");
        var a = parseInt(temp[0]);
        var b = parseInt(temp[1]);
        var tong = a+b;
        console.log(tong);
        process.exit();
    });
}