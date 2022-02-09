function cinemaVoucher(input) {
    let voucher = input.shift();
    let movieticket = 0;
    let elseticket = 0;
    let currentSum = 0;
    let totalSum = 0;
    let command = input.shift();

    while (command !== "End") {
        let letter1 = command[0];
        letter1 = letter1.charCodeAt();
        let letter2 = command[1];
        letter2 = letter2.charCodeAt();
        if (command.length > 8) {
            currentSum = letter1 + letter2;
            totalSum = voucher - currentSum;
            if (currentSum > voucher) {
                console.log(`${movieticket}\n${elseticket}`);
                return;
            }
            movieticket++;
        } else {
            currentSum = letter1;
            totalSum = voucher - currentSum;
            if (currentSum > voucher) {
                console.log(`${movieticket}\n${elseticket}`);
                return;
            }
            elseticket++;
        }
        voucher = voucher - currentSum;
        command = input.shift();
    }
    console.log(`${movieticket}\n${elseticket}`);
}
cinemaVoucher(["300",
    "Captain Marvel",
    "popcorn",
    "Pepsi"
])