type TransactionAmountNumber = Transaction & { amountNumber: number }
function filterAmountNumber(transaction: Transaction): transaction is TransactionAmountNumber {
  return transaction.amountNumber !== null
}

export default class Statistics {
  private transactions
  total
  constructor(transactions: Transaction[]) {
    this.transactions = transactions
    this.total = this.setTotal()
  }
  private setTotal() {
    return this.transactions.filter(filterAmountNumber).reduce((acc, item) => {
      return acc + item.amountNumber
    }, 0)
  }
}
