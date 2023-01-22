import countBy from "./countBy.js"

type TransactionAmountNumber = Transaction & { amountNumber: number }
function filterAmountNumber(transaction: Transaction): transaction is TransactionAmountNumber {
  return transaction.amountNumber !== null
}

export default class Statistics {
  private transactions
  total
  payment
  status

  constructor(transactions: Transaction[]) {
    this.transactions = transactions
    this.total = this.setTotal()
    this.payment = this.setPayment()
    this.status = this.setStatus()
  }

  private setTotal() {
    return this.transactions.filter(filterAmountNumber).reduce((acc, item) => {
      return acc + item.amountNumber
    }, 0)
  }

  private setPayment() {
    return countBy (this.transactions.map(({ payment }) => payment))
  }

  private setStatus() {
    return countBy (this.transactions.map(({ status }) => status))
  }
}
