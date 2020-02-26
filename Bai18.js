{
    process.stdin.once("data", (input) => {
        var n = parseInt(input);
        var s=0;
        for (let index = 1; index < n+1; index++) {
            s = s + index+ " ";
        }
        console.log(s);
        process.exit();
    });
}