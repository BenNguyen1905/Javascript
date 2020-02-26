{
    process.stdin.once("data", (input) => {
        var  temp = input.toString().Trim().split("\n");
        process.exit();
    });
}