import fetchData from './fetchData.js'
import normalizeTransaction from './normalizeTransaction.js'

async function handleData() {
  const data = await fetchData<TransactionAPI[]>(
    'https://api.origamid.dev/json/transacoes.json?'
  )
  if (!data) return
  const transactions = data.map(normalizeTransaction)
  fillTable(transactions)
}

function fillTable(transactions: Transaction[]): void {
  const table = document.querySelector('#transactions tbody')
  if (!table) return
  transactions.forEach((transaction) => {
    table.innerHTML += `
      <tr>
        <td>${transaction.fullName}</>
        <td>${transaction.email}</>
        <td>R$: ${transaction.amount}</>
        <td>${transaction.payment}</>
        <td>${transaction.status}</>
      </tr>
    `
  })
}

handleData()
