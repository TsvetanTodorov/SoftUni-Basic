function poolDay(input) {

    let peopleQuntity = Number(input.shift());
    let entranceCost = Number(input.shift());
    let chairCost = Number(input.shift());
    let umbrellaCost = Number(input.shift());

    let totalEntranceCost = peopleQuntity * entranceCost;
    let peopleWithChairs = Math.ceil(peopleQuntity * 0.75);
    let totalChairsPrice = peopleWithChairs * chairCost;
    let peopleWithUmbrellas = Math.ceil(peopleQuntity * 0.50);
    let totalUmbrellasPrice = peopleWithUmbrellas * umbrellaCost;

    let totalPrice = totalEntranceCost + totalChairsPrice + totalUmbrellasPrice;
    console.log(`${totalPrice.toFixed(2)} lv.`);







}
poolDay(["21",
    "5.50",
    "4.40",
    "6.20"
])