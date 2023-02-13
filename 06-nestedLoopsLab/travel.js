function travel(input) {
    let index = 0;
    let nextCommand = input[index];  
    while (nextCommand != "End") {
        let destination = input[index];
        index++;
        let moneyNeeded = Number(input[index]);
        let saved = 0;
        while (saved < moneyNeeded) {
            index ++;
            saved += Number(input[index]);
        }
        console.log(`Going to ${destination}!`);
        index++;
        nextCommand = input[index];
    }
}        
travel(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])