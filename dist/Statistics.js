import countBy from "./countBy.js";
function filterAmountNumber(transaction) {
    return transaction.amountNumber !== null;
}
export default class Statistics {
    transactions;
    total;
    payment;
    status;
    week;
    bestDay;
    constructor(transactions) {
        this.transactions = transactions;
        this.total = this.setTotal();
        this.payment = this.setPayment();
        this.status = this.setStatus();
        this.week = this.setWeek();
        this.bestDay = this.setBestDay();
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
    setWeek() {
        const week = {
            ['Domingo']: 0,
            ['Segunda']: 1,
            ['Terça']: 2,
            ['Quarta']: 3,
            ['Quinta']: 4,
            ['Sexta']: 5,
            ['Sábado']: 6,
        };
        for (let i = 0; i < this.transactions.length; i++) {
            const day = this.transactions[i].date.getDay();
            if (day === 0)
                week['Domingo'] += 1;
            if (day === 1)
                week['Segunda'] += 1;
            if (day === 2)
                week['Terça'] += 1;
            if (day === 3)
                week['Quarta'] += 1;
            if (day === 4)
                week['Quinta'] += 1;
            if (day === 5)
                week['Sexta'] += 1;
            if (day === 6)
                week['Sábado'] += 1;
        }
        return week;
    }
    setBestDay() {
        return Object.entries(this.week).sort((a, b) => {
            return b[1] - a[1];
        })[0];
    }
}
//# sourceMappingURL=Statistics.js.map