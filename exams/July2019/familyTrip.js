function familyTrip(input) {

    let budget = Number(input.shift());
    let nightsQuantity = Number(input.shift());
    let pricePerNight = Number(input.shift());
    let extraCosts = Number(input.shift());

    if (nightsQuantity > 7) {
        pricePerNight = pricePerNight * 0.95;
    }

    let totalPriceForNights = pricePerNight * nightsQuantity;
    let costs = budget * extraCosts / 100
    let totalMoney = totalPriceForNights + costs;

    let diff = Math.abs(budget - totalMoney);

    if (totalMoney <= budget) {
        console.log(`Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${diff.toFixed(2)} leva needed.`);
    }

}
familyTrip(["800.50",
    "8",
    "100",
    "2"
])