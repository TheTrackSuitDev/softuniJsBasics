function moving(input) {
    let index = 0;
    let spaceLength = Number(input[index]);
    index++;
    let spaceWidth = Number(input[index]);
    index++;
    let spaceHeight = Number(input[index]);
    index++;
    let totalSpace = spaceLength * spaceHeight * spaceWidth;
    let spaceTaken = 0;
    let nextPackage = input[index];
    while (spaceTaken <= totalSpace) {
        if (nextPackage === "Done") {
            break;
        }
        nextPackage = Number(input[index]);
        spaceTaken += nextPackage;
        index++;
        nextPackage = input[index];
    }
    if (spaceTaken <= totalSpace) {
        console.log(`${totalSpace - spaceTaken} Cubic meters left.`);
    } else {
        console.log(`No more free space! You need ${spaceTaken - totalSpace} Cubic meters more.`);        
    }
}
moving(["10",
"10",
"2",
"20",
"20",
"20",
"20",
"122"])