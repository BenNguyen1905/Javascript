{
    process.stdin.once("data", (input) => {
        var num = input;
        var i;
        if (num == 0) {
            i = 1;
        }
        if (num > 0) {
            for (i = 1; num >= 1; num--) {
                i = i * num;
            }
        }
        console.log(i);
        process.exit();
    });
}