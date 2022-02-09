function cinemaTickets(input) {

    let movieName = input.shift();
    let studentTicket = 0;
    let standardTicket = 0;
    let kidTicket = 0;

    while (movieName !== "Finish") {
        let emptySeats = Number(input.shift());
        let totalTickets = 0;
        while (totalTickets <= emptySeats) {
            let typeOfTicket = input.shift();
            switch (typeOfTicket) {
                case "student":
                    totalTickets++;
                    studentTicket++;
                    break;
                case "standard":
                    totalTickets++;
                    standardTicket++;
                    break;
                case "kid":
                    totalTickets++;
                    kidTicket++;
                    break;
            }
            if (totalTickets >= emptySeats || typeOfTicket === "End") {
                let percentageFull = (totalTickets / emptySeats) * 100;
                console.log(`${movieName} - ${percentageFull.toFixed(2)}% full.`);
                break;
            }

        } // End of Inner Loop
        movieName = input.shift();

    } // End of Outter loop
    let allTickets = studentTicket + standardTicket + kidTicket;
    console.log(`Total tickets: ${allTickets}`);
    console.log(`${((studentTicket / allTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standardTicket/ allTickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidTicket / allTickets) * 100).toFixed(2)}% kids tickets.`);

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
    "Finish"
])