function godzillaVsKong(input) {

    let budget = Number(input[0]);
    let actorsQuantity = Number(input[1]);
    let suitPriceFor1Actor = Number(input[2]);
    let totalSuitPrice = actorsQuantity * suitPriceFor1Actor;
    let allCosts = 0;
    let decorPrice = budget * 0.10;
    let diffMoney = 0;

    if (actorsQuantity > 150) {
        totalSuitPrice = totalSuitPrice * 0.90;

    }
    allCosts = totalSuitPrice + decorPrice;
    diffMoney = Math.abs(budget - allCosts);


    if (allCosts > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${diffMoney.toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${diffMoney.toFixed(2)} leva left.`);

    }


}
godzillaVsKong(["15437.62",
    "186",
    "57.99"
])