{
    process.stdin.once("data", (input) => {
        var numbers = input.toString().split(" ");
        var n = parseInt(numbers[0]);
        var m = parseInt(numbers[1]);
        for (let index = 0; index < m; index++) {
            for (let index1 = 0; index1 < n; index1++) {
                if (index == 0 || index1 == n - 1 || index1 == 0 || index1 == m - 1) {
                    console.log("*");
                }
            }
            //console.log("");
        }
        process.exit();
    });
}