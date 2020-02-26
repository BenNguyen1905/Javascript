{
    var a, b;
    process.stdin.once("data", (input) => {
        var numbers = input.toString().split(" ");
        var a = parseInt(numbers[0]);
        var b = parseInt(numbers[1]);
        var chuVi = (a+b)*2;
        var dientich = a*b;
        console.log(chuVi + " " + dientich);
        process.exit();
    });
}