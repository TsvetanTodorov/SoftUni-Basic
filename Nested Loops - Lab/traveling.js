function traveling(input) {

    let destination = input.shift();
    let neededBudget = Number(input.shift());
    let allSavedMoney = 0

    while (destination !== "End") {
        while (allSavedMoney < neededBudget) {
            let savedMoney = Number(input.shift());
            allSavedMoney += savedMoney;
            if (allSavedMoney >= neededBudget) {
                allSavedMoney = 0;
                console.log(`Going to ${destination}!`);
                break;
            }

        }
        destination = input.shift();
        neededBudget = Number(input.shift());
    }

}
traveling(["France",
    "2000",
    "300",
    "300",
    "200",
    "400",
    "190",
    "258",
    "360",
    "Portugal",
    "1450",
    "400",
    "400",
    "200",
    "300",
    "300",
    "Egypt",
    "1900",
    "1000",
    "280",
    "300",
    "500",
    "End"
])