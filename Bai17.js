{
    process.stdin.once("data", (input) =>{
        var num = parseInt(input);
        if (num <= 200000000 && num % 50000 == 0) {
            var value1 = parseInt(num / 500000);
            var value2 = parseInt((num - (value1 * 500000))/200000);
            var value3 = parseInt((num - (value1 * 500000) - (value2 * 200000))/100000);
            var value4 = parseInt((num - (value1 * 500000) - (value2 * 200000) - (value3 * 100000))/50000);
            if (value1 != 0) {
                console.log("500K "+value1);
            }
            if (value2 != 0) {
                console.log("200K "+value2);
            }
            if (value3 != 0) {
                console.log("100K "+value3);
            }
            if (value4 != 0) {
                console.log("50K "+value4);
            }
        } else {
            console.log("INVALID");
        }
        process.exit();
    });
}