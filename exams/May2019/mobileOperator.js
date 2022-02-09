function mobileOperator(input) {

    let contractTerm = input[0];
    let contractType = input[1];
    let mobileInternet = input[2];
    let monthsToPay = Number(input[3]);
    let pricePerMonth = 0;

    switch (contractTerm) {
        case "one":
            if (contractType === "Small") {
                pricePerMonth = 9.98;
            } else if (contractType === "Middle") {
                pricePerMonth = 18.99;
            } else if (contractType === "Large") {
                pricePerMonth = 25.98;
            } else {
                pricePerMonth = 35.99;
            }
            if (mobileInternet === "yes" && pricePerMonth <= 10) {
                pricePerMonth += 5.50;
            } else if (mobileInternet === "yes" && pricePerMonth <= 30) {
                pricePerMonth += 4.35;
            } else if (mobileInternet === "yes" && pricePerMonth > 30) {
                pricePerMonth += 3.85;
            }
            break;
        case "two":
            if (contractType === "Small") {
                pricePerMonth = 8.58;
            } else if (contractType === "Middle") {
                pricePerMonth = 17.09;
            } else if (contractType === "Large") {
                pricePerMonth = 23.59;
            } else {
                pricePerMonth = 31.79;
            }
            if (mobileInternet === "yes" && pricePerMonth <= 10) {
                pricePerMonth += 5.50;
            } else if (mobileInternet === "yes" && pricePerMonth <= 30) {
                pricePerMonth += 4.35;
            } else if (mobileInternet === "yes" && pricePerMonth > 30) {
                pricePerMonth += 3.85;
            }
            break;
    }


    if (contractTerm === "two") {
        pricePerMonth = pricePerMonth * 0.9625
    }
    let totalPrice = pricePerMonth * monthsToPay;
    console.log(`${totalPrice.toFixed(2)} lv.`)


}
mobileOperator(["two",
    "Large",
    "no",
    "10"
])