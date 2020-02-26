{
    process.stdin.once("data", (input) => {
        var numbers = input.toString().split(" ");
        var a = parseInt(numbers[0]);
        var b = parseInt(numbers[1]);
        var max = 0;
        if (a > b) {
            max = a;
        } else {
            max = b;
        }
        console.log(max);
        process.exit();
    });
}