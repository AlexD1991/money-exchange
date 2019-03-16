module.exports = function makeExchange(currency) {
    let arr = [50, 25, 10, 5, 1];
    let obj = {};
    let currencyLeft = currency;
    if (currency < 0) return obj;
    if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    if (Math.floor(currencyLeft / arr[0])!==0) {
        obj.H=Math.floor(currencyLeft / arr[0]);
        currencyLeft -= obj.H * arr[0];
    }
    if (Math.floor(currencyLeft / arr[1])!==0) {
        obj.Q=Math.floor(currencyLeft / arr[1]);
        currencyLeft -= obj.Q * arr[1];
    }
    if (Math.floor(currencyLeft / arr[2])!==0) {
        obj.D=Math.floor(currencyLeft / arr[2]);
        currencyLeft -= obj.D * arr[2];
    }
    if (Math.floor(currencyLeft / arr[3])!==0) {
        obj.N=Math.floor(currencyLeft / arr[3]);
        currencyLeft -= obj.N * arr[3];
    }
    if (Math.floor(currencyLeft / arr[4])!==0) {
        obj.P=Math.floor(currencyLeft / arr[4]);
    }

    console.log(obj)
    return obj;
}