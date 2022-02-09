function touristShop(input) {

    let budget = Number(input.shift());
    let productName = input.shift();
    let productCounter = 0;
    let totalPrice = 0;

    while (productName !== "Stop") {
        productCounter++;
        let productPrice = Number(input.shift());
        if (productCounter % 3 === 0) {
            productPrice /= 2;
        }
        totalPrice += productPrice;
        budget -= productPrice;
        if (budget < 0) {
            console.log("You don't have enough money!");
            console.log(`You need ${(Math.abs(budget)).toFixed(2)} leva!`);
            return;
        }

        productName = input.shift();
    }

    console.log(`You bought ${productCounter} products for ${totalPrice.toFixed(2)} leva.`);

}
touristShop(["153.20",
    "Backpack",
    "25.20",
    "Shoes",
    "54",
    "Sunglasses",
    "30",
    "Stop"
])