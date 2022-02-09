function evenPowersOf2(input) {
    let numPower = Number(input[0]);
    for (let i = 0; i <= numPower; i += 2) {
        console.log(Math.pow(2, i));
    }

}
evenPowersOf2(["3"])