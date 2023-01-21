function filterAmountNumber(transaction) {
    return transaction.amountNumber !== null;
}
export default class Statistics {
    transactions;
    total;
    constructor(transactions) {
        this.transactions = transactions;
        this.total = this.setTotal();
    }
    setTotal() {
        return this.transactions.filter(filterAmountNumber).reduce((acc, item) => {
            return acc + item.amountNumber;
        }, 0);
    }
}
//# sourceMappingURL=Statistics.js.map