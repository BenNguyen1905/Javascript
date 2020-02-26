{
    process.stdin.once("data", (input) => {
        var n = parseInt(input);
        var sum = 0;
        for (let index = 1; index < n+1; index++) {
            sum = sum + index;
        }
        console.log(sum);
        process.exit();
    });
}