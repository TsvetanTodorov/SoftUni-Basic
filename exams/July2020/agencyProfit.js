function agencyProfit(input) {

    let companyName = input[0];
    let ticketsQuantityForAdults = Number(input[1]);
    let ticketsQuantityForChildren = Number(input[2]);
    let ticketPriceForAdult = Number(input[3])
    let tax = Number(input[4]);

    let ticketPriceForChildren = ticketPriceForAdult * 0.3;
    let ticketPriceForAdultWithTax = ticketPriceForAdult + tax;
    let ticketPriceForChildrenWithTax = ticketPriceForChildren + tax;
    let totalPrice = (ticketsQuantityForAdults * ticketPriceForAdultWithTax) + (ticketsQuantityForChildren * ticketPriceForChildrenWithTax);
    let profit = totalPrice * 0.2;
    console.log(`The profit of your agency from ${companyName} tickets is ${profit.toFixed(2)} lv.`);

}
agencyProfit(["WizzAir", "15", "5", "120", "40"])