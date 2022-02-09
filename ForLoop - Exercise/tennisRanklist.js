function tennisRanklist(input) {
    let index = 0;
    let tournamentsQuantity = Number(input[index]);
    index++;
    let startPoints = Number(input[index]);
    index++;

    let point = 0;
    let wonTournaments = 0;

    for (let i = 0; i < tournamentsQuantity; i++) {
        let currentPlace = input[index];
        index++
        if (currentPlace === "W") {
            wonTournaments++
            point += 2000;

        } else if (currentPlace === "F") {
            point += 1200;

        } else {
            point += 720;

        }
    }

    let totalPoint = startPoints + point;
    console.log(`Final points: ${totalPoint}`);

    let avgPoints = Math.floor(point / tournamentsQuantity);
    console.log(`Average points: ${avgPoints}`);

    let totalWins = wonTournaments / tournamentsQuantity * 100;
    console.log(`${totalWins.toFixed(2)}%`)

}
tennisRanklist(["5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"
])