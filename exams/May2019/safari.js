function safari(input) {

    let budget = Number(input[0]);
    let neededFuel = Number(input[1]);
    let dayOfTheWeek = input[2];

    let pricePer1LiterFuel = 2.10;
    let guide = 100;

    let totalFuelPrice = pricePer1LiterFuel * neededFuel;
    let totalPrice = guide + totalFuelPrice;

    if (dayOfTheWeek === "Saturday") {
        totalPrice = totalPrice * 0.9;
    } else {
        totalPrice = totalPrice * 0.8;
    }
    let diffMoney = Math.abs(budget - totalPrice);
    if (budget >= totalPrice) {
        console.log(`Safari time! Money left: ${diffMoney.toFixed(2)} lv.`);
    } else {
        console.log(`Not enough money! Money needed: ${diffMoney.toFixed(2)} lv.`);
    }

}
safari(["120",
    "30",
    "Saturday"
])