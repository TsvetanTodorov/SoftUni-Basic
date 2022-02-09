function walking(input) {

    let targetSteps = 10000;
    index = 0
    let currentInput = input[index];
    let diffSteps = 0;
    let sumSteps = 0;

    while (currentInput !== "Going home") {
        let inputAsNumber = Number(currentInput);
        sumSteps += inputAsNumber;

        if (sumSteps >= targetSteps) {
            break;
        }
        index++;
        currentInput = input[index];
    }

    if (currentInput === "Going home") {
        index++;
        let moreSteps = Number(input[index]);
        sumSteps += moreSteps;

    }

    diffSteps = sumSteps - targetSteps;
    if (sumSteps < targetSteps) {
        console.log(`${Math.abs(diffSteps)} more steps to reach goal.`);
    } else {
        console.log("Goal reached! Good job!");
        console.log(`${Math.abs(diffSteps)} steps over the goal!`);
    }
}
walking(["1500",
    "300",
    "2500",
    "3000",
    "Going home",
    "200"
])