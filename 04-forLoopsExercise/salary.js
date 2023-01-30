function salary(input) {
    let tabsCount = Number(input[0]);
    let salaryBase = Number(input[1]);
    let fine = 0;
    for (let i = 2; i <= tabsCount + 1; i++) {
        let currTab = (input[i]);
        switch (currTab) {
            case "Facebook":
                fine += 150;
                break;
            case "Instagram":
                fine += 100;
                break;
            case "Reddit":
                fine += 50;
                break;
        }
    }
    if (fine >= salaryBase) {
        console.log("You have lost your salary.");
    } else {
        console.log(Math.floor(salaryBase - fine));
    }
}
salary(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])