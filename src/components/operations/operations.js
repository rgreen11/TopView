let copyPriceQuantity = {};

class Operations {
    constructor(price) {
        this.price = price;

    }


    add = e => {
        if (copyPriceQuantity.hasOwnProperty(e.target.name)) {
            copyPriceQuantity[e.target.name].quantity += 1;
        } else {
            Object.assign(copyPriceQuantity, {
                [e.target.name]: { price: this.price, quantity: 1 }
            });
        }

        return copyPriceQuantity
    };
}

export default Operations;