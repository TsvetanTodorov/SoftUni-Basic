function moving(input) {

    let widthFreeSpace = Number(input[0]);
    let lengthFreeSpace = Number(input[1]);
    let height = Number(input[2]);
    let index = 3;
    let currentInput = input[index];
    let sumMeters = 0;
    let maxSpace = widthFreeSpace * lengthFreeSpace * height;
    let diff = 0;


    while (currentInput !== "Done") {

        let inputAsNumber = Number(currentInput);
        sumMeters += inputAsNumber;
        index++;
        currentInput = input[index];

        if (currentInput === "Done") {
            diff = Math.abs(maxSpace - sumMeters);
            console.log(`${diff} Cubic meters left.`);
            break;
        }

        if (maxSpace < sumMeters) {
            diff = Math.abs(maxSpace - sumMeters);
            console.log(`No more free space! You need ${diff} Cubic meters more.`);
            break;
        }
    }
}
moving(["10",
    "1",
    "2",
    "4",
    "6",
    "Done"
])