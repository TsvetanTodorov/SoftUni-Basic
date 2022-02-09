function cake(input) {

    let cakeWidth = input.shift();
    let cakeLength = input.shift();
    let index = 0;
    let currentInput = input[index];
    let totalCake = cakeWidth * cakeLength;


    while (currentInput !== "STOP") {
        let currentInputAsNumber = Number(currentInput);
        totalCake -= currentInputAsNumber;
        index++;
        currentInput = input[index];

        if (currentInput === "STOP") {
            console.log(`${totalCake} pieces are left.`);
            break;

        }
        if (totalCake < 0) {
            console.log(`No more cake left! You need ${Math.abs(totalCake)} pieces more.`);
            break;


        }

    }

}
cake(["10",
    "2",
    "2",
    "4",
    "6",
    "STOP"
])










function cake(input) {

    let index = 0;
    let lenght = Number(input[index]);
    index++;
    let width = Number(input[index]);
    index++;
    let cake = lenght * width;

    let command = input[index];
    index++

    while (command !== "STOP") {
        let takenPieces = Number(command);

        cake -= takenPieces;

        if (cake < 0) {
            console.log(`No more cake left! You need ${Math.abs(cake)} pieces more.`);
            break
        }
        command = input[index]
        index++
    }

    if (command === "STOP") {
        console.log(`${Math.abs(cake)} pieces are left.`);
    }
}