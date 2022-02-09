function balls(input) {


    let ballsAmount = Number(input.shift());
    let index = 0;
    let redBallCounter = 0;
    let orangeBallCounter = 0;
    let yellowBallCounter = 0;
    let whiteBallCounter = 0;
    let blackBallCounter = 0;
    let otherBallCounter = 0;
    let points = 0;
    let totalPoints = 0;

    for (let i = 1; i <= ballsAmount; i++) {
        let currentBall = input[index];
        index++;

        if (currentBall === "red") {
            redBallCounter++;
            points = 5;
            totalPoints += points

        } else if (currentBall === "orange") {
            orangeBallCounter++;
            points = 10;
            totalPoints += points

        } else if (currentBall === "yellow") {
            yellowBallCounter++;
            points = 15;
            totalPoints += points
        } else if (currentBall === "white") {
            whiteBallCounter++;
            points = 20;
            totalPoints += points
        } else if (currentBall === "black") {
            blackBallCounter++;
            totalPoints = Math.floor(totalPoints / 2);
        } else {
            otherBallCounter++;
        }
        currentBall = input[index]
    }
    console.log(`Total points: ${totalPoints}`);
    console.log(`Red balls: ${redBallCounter}`);
    console.log(`Orange balls: ${orangeBallCounter}`);
    console.log(`Yellow balls: ${yellowBallCounter}`);
    console.log(`White balls: ${whiteBallCounter}`);
    console.log(`Other colors picked: ${otherBallCounter}`);
    console.log(`Divides from black balls: ${blackBallCounter}`);
}
balls(["3", "white", "black", "pink"])