function oscarsWeekInCinema(input) {

    let movieName = input.shift();
    let roomType = input.shift();
    let boughtTickets = Number(input.shift());
    let ticketPrice = 0;
    let totalMoney = 0;

    switch (movieName) {
        case "A Star Is Born":
            if (roomType === "normal") {
                ticketPrice = 7.50;
            } else if (roomType === "luxury") {
                ticketPrice = 10.50;
            } else {
                ticketPrice = 13.50;
            }
            break;
        case "Bohemian Rhapsody":
            if (roomType === "normal") {
                ticketPrice = 7.35;
            } else if (roomType === "luxury") {
                ticketPrice = 9.45;
            } else {
                ticketPrice = 12.75;
            }
            break;
        case "Green Book":
            if (roomType === "normal") {
                ticketPrice = 8.15;
            } else if (roomType === "luxury") {
                ticketPrice = 10.25;
            } else {
                ticketPrice = 13.25;
            }
            break;
        case "The Favourite":
            if (roomType === "normal") {
                ticketPrice = 8.75;
            } else if (roomType === "luxury") {
                ticketPrice = 11.55;
            } else {
                ticketPrice = 13.95;
            }
            break;
    }
    totalMoney = boughtTickets * ticketPrice;
    console.log(`${movieName} -> ${totalMoney.toFixed(2)} lv.`);



}
oscarsWeekInCinema(["A Star Is Born",
    "luxury",
    "42"
])