function weddingSeats(input) {
    let endSector = input[0];
    let endSectorAsc = Number(endSector.charCodeAt());
    let rowsPerSector = Number(input[1]);
    let seatsPerRow = Number(input[2]) + 96;
    let totalSeats = 0;

        for (let sector = 65; sector <= endSectorAsc; sector++) {
            for (let row = 1; row <= rowsPerSector; row++) {
                if (row % 2 === 0) {
                    seatsPerRow += 2;
                }
                for (let seat = 97; seat <= seatsPerRow; seat++) {
                    let seatLetter = String.fromCharCode(seat);
                    let sectorLetter = String.fromCharCode(sector);
                    console.log(`${sectorLetter}${row}${seatLetter}`);
                    totalSeats++;                   
                }
                seatsPerRow = Number(input[2]) + 96;
            }
            rowsPerSector++;
        }
    console.log(totalSeats);
}
weddingSeats(["B","3","2"])