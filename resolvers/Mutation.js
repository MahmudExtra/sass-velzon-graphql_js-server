exports.Mutation={
    addBuyos : (parent, args, context, info) => {
        const {name, price, quantity} = args;
        const buyos = {name, price, quantity};
        buyosArray.push(buyos);
        return buyos;
    }
};
