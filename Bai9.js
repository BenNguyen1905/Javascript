{
    process.stdin.once("data", (input) => {
        var s = parseInt(input);
        var hour = parseInt(s/3600);
        var minute = parseInt(s/60 - (hour*60));
        var second = parseInt(s - (hour * 3600 + minute * 60));
        var trueHour = hour.toString().length;
        var trueMinute = minute.toString().length;
        var trueSecond = second.toString().length;
        if (trueHour == 1) {
            hour = "0" + hour;
        }
        if (trueMinute == 1) {
            minute = "0" + minute;
        }
        if (trueSecond == 1) {
            second = "0" + second;
        }
        console.log(hour+":"+minute+":"+second);
        process.exit();
    });
}