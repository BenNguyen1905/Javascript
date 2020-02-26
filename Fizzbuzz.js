{
    var n = 100;
    for (let index = 1; index <= n; index++) {
        // if (index % 3 == 0) {
        //     console.log("Sphinx");
        // }else if (index % 5 == 0) {
        //     console.log("Software");
        // }else if (index % 3 == 0 && index % 5 == 0) {
        //     console.log("Sphinx Software");
        // }else {
        //     console.log(index);
        // }   

        if (index % 3 == 0 && index % 5 == 0) {
            console.log("Sphinx Software");
        } else if (index % 3 == 0) {
            console.log("Sphinx");
        } else if (index % 5 == 0) {
            console.log("Software");
        } else {
            console.log(index);
        }
    
    }
}