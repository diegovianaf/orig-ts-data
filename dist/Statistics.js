import countBy from "./countBy.js";
function filterAmountNumber(transaction) {
    return transaction.amountNumber !== null;
}
export default class Statistics {
    transactions;
    total;
    payment;
    status;
    constructor(transactions) {
        this.transactions = transactions;
        this.total = this.setTotal();
        this.payment = this.setPayment();
        this.status = this.setStatus();
    }
    setTotal() {
        return this.transactions.filter(filterAmountNumber).reduce((acc, item) => {
            return acc + item.amountNumber;
        }, 0);
    }
    setPayment() {
        return countBy(this.transactions.map(({ payment }) => payment));
    }
    setStatus() {
        return countBy(this.transactions.map(({ status }) => status));
    }
}
//# sourceMappingURL=Statistics.js.map