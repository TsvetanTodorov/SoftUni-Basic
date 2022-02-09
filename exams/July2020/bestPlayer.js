function bestPlayer(input) {

    let playerName = input.shift();
    let mostGoals = Number.MIN_SAFE_INTEGER;
    let bestFootballer = ''

    while (playerName !== "END") {
        let goals = Number(input.shift());
        if (goals > mostGoals) {
            mostGoals = goals;
            bestFootballer = playerName
        }
        if (goals >= 10) {
            break;
        }

        playerName = input.shift();

    }
    console.log(`${bestFootballer} is the best player!`);
    if (mostGoals >= 3) {
        console.log(`He has scored ${mostGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${mostGoals} goals.`);
    }


}
bestPlayer(["Rooney",
    "1",
    "Junior",
    "2",
    "Paolinio",
    "2",
    "END"
])