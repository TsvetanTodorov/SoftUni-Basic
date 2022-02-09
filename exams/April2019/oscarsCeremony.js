function oscarsCeremony(input) {

    let rent = Number(input[0]);
    let statuesPrice = rent * 0.70;
    let foodPrice = statuesPrice * 0.85;
    let soundsPrie = foodPrice / 2;

    let totalPrice = rent + statuesPrice + foodPrice + soundsPrie;
    console.log(totalPrice.toFixed(2));


}
oscarsCeremony(["3500"])