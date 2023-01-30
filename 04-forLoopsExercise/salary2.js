function salary(input) {
    //let tabsCount = Number(input[0]);
    let salaryBase = Number(input[1]);
    for (let i = 2; i <= input.length; i++) {
        let currTab = (input[i]);
        switch (currTab) {
            case "Facebook":
                salaryBase -= 150;
                break;
            case "Instagram":
                salaryBase -= 100;
                break;
            case "Reddit":
                salaryBase -= 50;
                break;
        }
        if (salaryBase <= 0) {
            console.log("You have lost your salary.");    
            return;
        }
    }
    
    console.log(salaryBase.toFixed(0));

}
salary(["3",
"500",
"Github.com",
"Stackoverflow.com",
"softuni.bg", "Facebook"])