function coins(input) {
    let money = Number(input[0]);
    money = Math.floor(money * 100)
    let moneyCounter = 0;


    while (money > 0) {
        if (money >= 200) {
            moneyCounter++;
            money -= 200;
        } else if (money >= 100) {
            moneyCounter++;
            money -= 100;
        } else if (money >= 50) {
            moneyCounter++;
            money -= 50;
        } else if (money >= 20) {
            moneyCounter++;
            money -= 20;
        } else if (money >= 10) {
            moneyCounter++;
            money -= 10;
        } else if (money >= 5) {
            moneyCounter++;
            money -= 5
        } else if (money >= 2) {
            moneyCounter++;
            money -= 2;
        } else {
            moneyCounter++;
            money -= 1;
        }
        if (money === 0) {
            console.log(moneyCounter);
            break;
        }
    }

}
coins(["0.56"])