function vetParking(input) {

    let days = Number(input.shift());
    let hours = Number(input.shift());
    let totalPricePerDay = 0;
    let parkingPrice = 0;
    let totalPriceForAllDays = 0;

    for (let i = 1; i <= days; i++) {
        let currentDay = Number(i);
        for (let j = 1; j <= hours; j++) {
            let currentHour = Number(j);
            if (currentDay % 2 === 0 && currentHour % 2 !== 0) {
                parkingPrice = 2.50;
                totalPricePerDay += parkingPrice;
            } else if (currentDay % 2 !== 0 && currentHour % 2 === 0) {
                parkingPrice = 1.25;
                totalPricePerDay += parkingPrice;
            } else {
                parkingPrice = 1;
                totalPricePerDay += parkingPrice
            }
        }

        totalPriceForAllDays += totalPricePerDay;
        console.log(`Day: ${currentDay} - ${totalPricePerDay.toFixed(2)} leva`);
        totalPricePerDay = 0;
    }
    console.log(`Total: ${totalPriceForAllDays.toFixed(2)} leva`);

}
vetParking(["5",
    "2"
])