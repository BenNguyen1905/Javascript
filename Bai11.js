{
    process.stdin.once("data", (input) => {
        var numbers = input.toString().split(" ");
        var a = parseInt(numbers[0]);
        var b = parseInt(numbers[1]);
        var c = parseInt(numbers[2]);
        var nums = [a,b,c];
        var max = Math.max.apply(Math, nums);
        console.log(max);
        process.exit();
    });
}