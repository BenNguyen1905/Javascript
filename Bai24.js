{
    process.stdin.once("data", (input) => {
        var num = parseInt(input);
        var s ="";
        for (let index = 0; index <= num; index++) {
            s = s + "*";
        }
        for (let index = 1; index <= num; index++) {
            s = s.replace("*","");
            console.log(s);
        }
        process.exit();
    });
}