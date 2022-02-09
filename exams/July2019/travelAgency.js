function travelAgency(input) {

    let cityName = input.shift();
    let packetType = input.shift();
    let vipDiscount = input.shift();
    let daysOfStaying = Number(input.shift());
    let pricePerDay = 0;
    let totalPrice = 0;


    if (daysOfStaying > 7) {
        daysOfStaying--;
    }


    if (daysOfStaying < 1) {
        console.log("Days must be positive number!");
        return;
    }
    if (cityName !== "Bansko" && cityName !== "Borovets" && cityName !== "Varna" && cityName !== "Burgas") {
        console.log("Invalid input!");
        return;
    }
    if (packetType !== "noEquipment" && packetType !== "withEquipment" && packetType !== "withBreakfast" && packetType !== "noBreakfast") {
        console.log("Invalid input!");
        return;
    }

    switch (cityName) {
        case "Bansko":
        case "Borovets":
            if (packetType === "withEquipment") {
                pricePerDay = 100;
                if (vipDiscount === "yes") {
                    pricePerDay = pricePerDay * 0.90;
                }
                totalPrice = pricePerDay * daysOfStaying;

            } else {
                pricePerDay = 80;
                if (vipDiscount === "yes") {
                    pricePerDay = pricePerDay * 0.95;
                }
                totalPrice = pricePerDay * daysOfStaying;
            }
            break;
        case "Varna":
        case "Burgas":
            if (packetType === "withBreakfast") {
                pricePerDay = 130
                if (vipDiscount === "yes") {
                    pricePerDay = pricePerDay * 0.88;
                }
                totalPrice = pricePerDay * daysOfStaying;

            } else {
                pricePerDay = 100;
                if (vipDiscount === "yes") {
                    pricePerDay = pricePerDay * 0.93;
                }
                totalPrice = pricePerDay * daysOfStaying;

            }
            break;
    }
    console.log(`The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`);

}
travelAgency(["Borovets",
    "noEquipment",
    "yes",
    "6"
])