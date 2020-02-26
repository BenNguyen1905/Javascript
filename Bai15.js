{
    process.stdin.once("data", (input) => {
        var num = parseInt(input);
        if (num == 1 || num == 3 || num == 5 || num == 7 || num == 8 || num == 10 || num == 12) {
            console.log("31");
        } else if (num == 4 || num == 6 || num == 9 || num == 11) {
            console.log("30");
        } else if (num == 2) {
            console.log("28");
        } else {
            console.log("NOT FOUND");
        }
        process.exit();
    });
}