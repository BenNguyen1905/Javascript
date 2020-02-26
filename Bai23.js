{
    process.stdin.once("data", (input) => {
        var numbers = input.toString().split(" ");
        var chieuCao = parseInt(numbers[0]);
        var chieuDai = parseInt(numbers[1]);
        var s = "";
        for(i = 1 ; i <= chieuDai ; i++){
            s = s +"*";
        }
        for(i = 1 ; i <= chieuCao ; i++){
    
            console.log(s);
        }
        process.exit();
    });
}