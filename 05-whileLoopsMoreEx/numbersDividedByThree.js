function numbers() {
    for (let index = 1; index <= 100; index++) {
        let num = Number(index);
        if (num % 3 === 0) {
            console.log(num);
        }
        
    }
}
numbers()