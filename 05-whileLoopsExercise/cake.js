function cake(input) {
    let index = 0;
    let cakeLength = Number(input[index]);
    index++;
    let cakeWidth = (input[index]);
    index++;
    let totalPieces = cakeLength * cakeWidth;
    let piecesTaken = 0;
    let nextPieces = input[index];
    while (piecesTaken <= totalPieces) {
        if (nextPieces === "STOP") {
            break;
        }
        nextPieces = Number(input[index]);
        piecesTaken += nextPieces;
        index++;
        nextPieces = input[index];
    }
    if (piecesTaken <= totalPieces) {
        console.log(`${totalPieces - piecesTaken} pieces are left.`);
    } else {
        console.log(`No more cake left! You need ${piecesTaken - totalPieces} pieces more.`);        
    }
}
cake(["10",
"2",
"2",
"4",
"6",
"STOP"])