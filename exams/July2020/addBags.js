function addBags(input) {

    let lugagePrice = Number(input[0]);
    let kilos = Number(input[1]);
    let daysToFly = Number(input[2]);
    let lugageQuantity = Number(input[3]);
    let tax = 0;


    if (kilos < 10) {
        tax = lugagePrice * 0.20;

    } else if (kilos >= 10 && kilos <= 20) {
        tax = lugagePrice * 0.50;
    } else {
        tax = lugagePrice;
    }

    if (daysToFly > 30) {
        tax = tax * 1.10;

    } else if (daysToFly >= 7 && daysToFly <= 30) {
        tax = tax * 1.15;

    } else {
        tax = tax * 1.40;
    }
    let totalPrice = tax * lugageQuantity
    console.log(`The total price of bags is: ${totalPrice.toFixed(2)} lv.`);

}
addBags(["30", "18", "15", "2"])