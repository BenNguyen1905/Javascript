{
    process.stdin.once("data", (input) =>{
        var n = parseInt(input);
        var result;
        new Fibo(n) {
            if (n == 1 || n == 2) {
                return result = 1;
            }
            if (n >= 3 && n <= 50) {
                return result = Fibo(n-1) + Fibo(n-2);
                
            }
        }
        console.log(result);
        process.exit();
    });
}