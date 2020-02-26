{
    process.stdin.once("data", (input) => {
        var temp = input.toString().split(" ");
        var temp1 = temp[0].toString().length;
        var temp2 = temp[1].toString().length;
        var ngay, thang, nam;
        if (temp1 == 1) {
            ngay = "0"+temp[0];
        }else
        {
            ngay = temp[0];
        }
        if (temp2 == 1) {
            thang = "0"+temp[1];
        }else
        {
            thang = temp[1];
        }
        nam = temp[2];
        var ngayThang = (ngay+"/"+thang+"/"+nam);
        console.log(ngayThang);
        process.exit();
    });
}