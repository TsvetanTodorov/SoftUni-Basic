function coffeeMachine(input) {


    let drinkType = input.shift();
    let sugar = input.shift();
    let drinksQuantity = Number(input.shift());
    let totalMoney = 0;
    let pricePerDrink = 0;

    switch (drinkType) {
        case "Espresso":
            if (sugar === "Without") {
                pricePerDrink = 0.90;
                totalMoney = pricePerDrink * drinksQuantity;
            } else if (sugar === "Normal") {
                pricePerDrink = 1;
                totalMoney = pricePerDrink * drinksQuantity;
            } else {
                pricePerDrink = 1.20;
                totalMoney = pricePerDrink * drinksQuantity;
            }
            break;
        case "Cappuccino":
            if (sugar === "Without") {
                pricePerDrink = 1;
                totalMoney = pricePerDrink * drinksQuantity;
            } else if (sugar === "Normal") {
                pricePerDrink = 1.20;
                totalMoney = pricePerDrink * drinksQuantity;
            } else {
                pricePerDrink = 1.60;
                totalMoney = pricePerDrink * drinksQuantity;
            }
            break;
        case "Tea":
            if (sugar === "Without") {
                pricePerDrink = 0.50;
                totalMoney = pricePerDrink * drinksQuantity;
            } else if (sugar === "Normal") {
                pricePerDrink = 0.60;
                totalMoney = pricePerDrink * drinksQuantity;
            } else {
                pricePerDrink = 0.70;
                totalMoney = pricePerDrink * drinksQuantity;
            }
            break;
    }
    if (sugar === "Without") {
        totalMoney = totalMoney * 0.65;
    }
    if (drinkType === "Espresso" && drinksQuantity >= 5) {
        totalMoney = totalMoney * 0.75;
    }
    if (totalMoney > 15) {
        totalMoney = totalMoney * 0.80;
    }
    console.log(`You bought ${drinksQuantity} cups of ${drinkType} for ${totalMoney.toFixed(2)} lv.`);

}
coffeeMachine(["Tea",
    "Extra",
    "3"
])