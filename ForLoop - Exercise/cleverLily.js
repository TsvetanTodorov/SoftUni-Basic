function cleverLily(input) {

    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let singleToyPrice = Number(input[2]);

    let toyCounter = 0;
    let savedMoney = 0;
    let money = 10;

    for (let i = 1; i <= age; i++) {
        if (i % 2 !== 0) {
            toyCounter++;
        } else {
            savedMoney += money;
            money += 10;
            savedMoney -= 1;
        }
    }
    savedMoney += toyCounter * singleToyPrice;
    let diff = Math.abs(savedMoney - washingMachinePrice);

    if (savedMoney >= washingMachinePrice) {
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${diff.toFixed(2)}`);
    }
}
cleverLily(["10",
    "170.00",
    "6"
])