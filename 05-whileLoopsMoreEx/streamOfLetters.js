function letters(input) {
    let index = 0;
    let currChar = (input[index]);
    index++;
    let nCounter = 0;
    let cCounter = 0;
    let oCounter = 0;
    let hiddenWord = "";
    let hiddenMessage = "";
    while (currChar != "End") {
        switch (currChar) {   //<------------------------------ capital
            case "c":
                if (cCounter === 0) {
                    cCounter += 1;
                } else {
                    hiddenWord += "c";
                }
                break;
            case "n":
                if (nCounter === 0) {
                    nCounter += 1;
                } else {
                    hiddenWord += "n";
                }
                break;
            case "o":
                if (oCounter === 0) {
                    oCounter += 1;
                } else {
                    hiddenWord += "o";
                }
                break;
            default:
                if (currChar.length === 1 && currChar.match(/[a-z]/i)) { // length <------------------------
            hiddenWord += currChar;
                }
                break;
        }
            if (nCounter === 1 && cCounter === 1 && oCounter === 1) { 
            hiddenWord += " ";
            hiddenMessage += hiddenWord;
            nCounter = 0;
            cCounter = 0;
            oCounter = 0;
            hiddenWord = "";
            }
        currChar = input[index];
        index++;
    }
    console.log(hiddenMessage);
}
letters(["%",
    "!",
    "c",
    "^",
    "B",
    "`",
    "o",
    "%",
    "o",
    "o",
    "M",
    ")",
    "{",
    "n",
    "\\",
    "A",
    "D",
    "End"
    ])