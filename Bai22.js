{
    process.stdin.once("data", (input) => {
        var n = parseInt(input);
        var sum = 0;
        for (var index = 1; index<= n; index++) {
            var sum = sum + 1/index;
        }
        console.log(sum.toFixed(6));
        process.exit();
    });
}