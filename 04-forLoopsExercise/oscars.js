function oscars(input) {
    let actorName = input[0];
    let academyPionts = Number(input[1]);
    //let juryCount = Number(input[2]);
    let totalPoits = academyPionts;
    for (let i = 3; i < input.length; i += 2) {
        let juryName = input[i];
        let juryMemNameCount = juryName.length;
        let currMemPionts = Number(input[i + 1]);
        totalPoits += juryMemNameCount * currMemPionts / 2;
        if (totalPoits > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${totalPoits.toFixed(1)}!`);
            return;
        }
    }
    console.log(`Sorry, ${actorName} you need ${(1250.5 - totalPoits).toFixed(1)} more!`);
}
oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])