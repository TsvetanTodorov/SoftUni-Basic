function aluminumJoinery(input) {

    let joineryQuantity = Number(input[0]);
    let joineryType = input[1];
    let recieving = input[2];
    let diffJoineryPrice = 0;
    let totalPrice = 0;


    switch (joineryType) {
        case "90X130":
            diffJoineryPrice = 110;
            totalPrice = diffJoineryPrice * joineryQuantity;
            if (joineryQuantity > 30 && joineryQuantity <= 60) {
                totalPrice = totalPrice * 0.95;
            } else if (joineryQuantity > 60) {
                totalPrice = totalPrice * 0.92;
            }
            break;
        case "100X150":
            diffJoineryPrice = 140;
            totalPrice = diffJoineryPrice * joineryQuantity;
            if (joineryQuantity > 40 && joineryQuantity <= 80) {
                totalPrice = totalPrice * 0.94;
            } else if (joineryQuantity > 80) {
                totalPrice = totalPrice * 0.90;
            }
            break;
        case "130X180":
            diffJoineryPrice = 190;
            totalPrice = diffJoineryPrice * joineryQuantity
            if (joineryQuantity > 20 && joineryQuantity <= 50) {
                totalPrice = totalPrice * 0.93;
            } else if (joineryQuantity > 50) {
                totalPrice = totalPrice * 0.88;
            }
            break;
        case "200X300":
            diffJoineryPrice = 250;
            totalPrice = diffJoineryPrice * joineryQuantity;
            if (joineryQuantity > 25 && joineryQuantity <= 50) {
                totalPrice = totalPrice * 0.91;
            } else if (joineryQuantity > 50) {
                totalPrice = totalPrice * 0.86;
            }
            break;
    }


    if (recieving === "With delivery") {
        totalPrice = totalPrice + 60;
    }

    if (joineryQuantity > 99) {
        totalPrice = totalPrice * 0.96;
    }


    if (joineryQuantity < 10) {
        console.log("Invalid order");

    } else {
        console.log(`${totalPrice.toFixed(2)} BGN`);
    }
}
aluminumJoinery(["2", "130X180", "With delivery"])