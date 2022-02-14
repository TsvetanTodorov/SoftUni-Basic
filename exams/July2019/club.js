function club(input) {

    let neededMoney = Number(input.shift());
    let cocktailType = input.shift();
    let totalMoney = 0;
    let currentCocktailTotalPrice = 0;

    while (cocktailType !== "Party!") {
        let currentCocktailPrice = cocktailType.length;
        let currentCocktailQuantity = Number(input.shift());
        currentCocktailTotalPrice = currentCocktailPrice * currentCocktailQuantity;

        if (currentCocktailTotalPrice % 2 !== 0) {
            currentCocktailTotalPrice *= 0.75;
        }
        totalMoney += currentCocktailTotalPrice;
        if (totalMoney >= neededMoney) {
            console.log("Target acquired.");
            console.log(`Club income - ${totalMoney.toFixed(2)} leva.`);
            return;
        }
        cocktailType = input.shift();

    }
    let diffMoney = Math.abs(totalMoney - neededMoney)
    console.log(`We need ${diffMoney.toFixed(2)} leva more.`);
    console.log(`Club income - ${totalMoney.toFixed(2)} leva.`);



}
club(["100",
    "Sidecar",
    "7",
    "Mojito",
    "5",
    "White Russian",
    "10"
])