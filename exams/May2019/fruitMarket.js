function fruitMarket(input) {

    let strawberriesPrice = Number(input[0]);
    let bananasQuantity = Number(input[1]);
    let orangesQuantity = Number(input[2]);
    let raspberriesQuantity = Number(input[3]);
    let strawberriesQuantity = Number(input[4]);

    let totalStrawberriesPrice = strawberriesPrice * strawberriesQuantity;
    let raspberriesPrice = strawberriesPrice / 2;
    let totalRasberriesPrice = raspberriesPrice * raspberriesQuantity;
    let orangesPrice = raspberriesPrice - (raspberriesPrice * 0.4);
    let totalOrangesPrice = orangesPrice * orangesQuantity;
    let bananasPrice = raspberriesPrice - (raspberriesPrice * 0.8);
    let totalBananasPrice = bananasPrice * bananasQuantity;

    let totalPrice = totalStrawberriesPrice + totalRasberriesPrice + totalOrangesPrice + totalBananasPrice;
    console.log(totalPrice.toFixed(2));

}
fruitMarket(["48", "10", "3.3", "6.5", "1.7"]);