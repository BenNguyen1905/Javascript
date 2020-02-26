{
    process.stdin.once("data", (input) => {
        var num = parseInt(input);
        var soTien;
        if (num <= 50) {
            soTien = 25000 + (num * 600);
            console.log("So tien = "+soTien);
        } else if (num > 50 && num <= 200) {
            soTien = 25000 + 30000 + ((num - 50)*400);
            console.log("So tien = "+soTien);
        } else {
            soTien = 25000 + (50 * 600) +(150 * 400) + ((num - 200)*200);
            console.log("So tien = "+soTien);
        }
        process.exit();
    });
}