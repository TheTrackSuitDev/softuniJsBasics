function cinemaTickets(input) {
    let index = 0;
    let command = input[index];
    index++;
    let totalTickets = 0;
    let studentCount = 0;
    let standardCount = 0;
    let kidCount = 0;
    while (command !== "Finish") {
        let currMovie = command;
        let currentCapacity = Number(input[index]);
        index++;
        let nextTicket = input[index];
        index++;
        let seatsTaken = 0;
        while (nextTicket !== "End") {
           if (seatsTaken === currentCapacity) {
            index--;
            break;
           }
           totalTickets++;
           switch (nextTicket) {
            case "student":
                seatsTaken++;
                studentCount++;
                break;
            case "standard":
                seatsTaken++;
                standardCount++;
                break;
            case "kid":
                seatsTaken++;
                kidCount++;
                break;
           }
           nextTicket = input[index];
           index++;
        } 
        let capacityPercentage = seatsTaken / currentCapacity * 100;
        console.log(`${currMovie} - ${capacityPercentage.toFixed(2)}% full.`); 
        command = input[index];
        index++;
    }
    let studentPercentage = studentCount / totalTickets * 100;
    let standardPercentage = standardCount / totalTickets * 100;
    let kidPercentage = kidCount / totalTickets * 100;
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${studentPercentage.toFixed(2)}% student tickets.`);
    console.log(`${standardPercentage.toFixed(2)}% standard tickets.`);
    console.log(`${kidPercentage.toFixed(2)}% kids tickets.`);
}
cinemaTickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])