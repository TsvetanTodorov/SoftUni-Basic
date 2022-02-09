function vacation(input) {

    let moneyForVacation = Number(input[0]);
    let currentMoney = Number(input[1]);
    let index = 2;
    let actionType = input[index];
    let spendOrSaveMoney = Number[input[index]];
    let daysSpendCounter = 0;
    let totalDaysCounter = 0;

    while (currentMoney < moneyForVacation) {
        totalDaysCounter++;
        index++;
        spendOrSaveMoney = Number(input[index]);
        if (actionType === "spend") {
            daysSpendCounter++;
            currentMoney -= spendOrSaveMoney;
            if (daysSpendCounter === 5) {
                console.log("You can't save the money.");
                console.log(totalDaysCounter);
                break;
            }

        } else {
            daysSpendCounter = 0;
            currentMoney += spendOrSaveMoney;
            if (currentMoney >= moneyForVacation) {
                console.log(`You saved the money for ${totalDaysCounter} days.`);
                break;

            }

        }
        index++;
        actionType = input[index];
        if (currentMoney < 0) {
            currentMoney = 0;

        }

    }

}
vacation(["2000",
    "1000",
    "spend",
    "1200",
    "save",
    "2000"
])