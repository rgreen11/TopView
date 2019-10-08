let priceQuantity = {}

class Operations {
    constructor(price) {
        this.price = price;
    }

    add = e => {
        let copyPriceQuantity = { ...priceQuantity };
        if (copyPriceQuantity.hasOwnProperty(e.target.name)) {
            copyPriceQuantity[e.target.name].quantity += 1;
            priceQuantity = copyPriceQuantity;
            return copyPriceQuantity;
        } else {
            return Object.assign(priceQuantity, copyPriceQuantity, {
                [e.target.name]: { price: this.price, quantity: 1 }
            });
        }
    };

    subtract = (event, name) => {
        event.preventDefault();
        let copyPriceQuantity = { ...priceQuantity };
        if (copyPriceQuantity.hasOwnProperty(name)) {
            if (copyPriceQuantity[name].quantity === 1) {
                delete copyPriceQuantity[name]
                priceQuantity = copyPriceQuantity;
                return copyPriceQuantity;
            }
            copyPriceQuantity[name].quantity -= 1;
            return copyPriceQuantity;
        }
    }

}

function addZeros(num) {
    let value = Number(num)
    let res = num.toString().split(".");
    if (res.length === 1 || (res[1].length < 3)) {
        value = value.toFixed(2);
    }
    return value
}



export { Operations, addZeros };