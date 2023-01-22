import fetchData from './fetchData.js';
import normalizeTransaction from './normalizeTransaction.js';
import Statistics from './Statistics.js';
async function handleData() {
    const data = await fetchData('https://api.origamid.dev/json/transacoes.json?');
    if (!data)
        return;
    const transactions = data.map(normalizeTransaction);
    fillTable(transactions);
    fillStatistics(transactions);
}
function fillList(list, containerId) {
    const containerElement = document.getElementById(containerId);
    if (containerElement) {
        Object.keys(list).forEach((key) => {
            containerElement.innerHTML += `<p>${key}: ${list[key]}</p>`;
        });
    }
}
function fillStatistics(transactions) {
    const data = new Statistics(transactions);
    const totalElement = document.querySelector('#total span');
    if (totalElement) {
        totalElement.innerText = data.total.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
        });
    }
    fillList(data.payment, 'payment');
    fillList(data.status, 'status');
    const dayElement = document.querySelector('#day span');
    if (dayElement)
        dayElement.innerText = data.bestDay[0];
}
function fillTable(transactions) {
    const table = document.querySelector('#transactions tbody');
    if (!table)
        return;
    transactions.forEach((transaction) => {
        table.innerHTML += `
      <tr>
        <td>${transaction.fullName}</>
        <td>${transaction.email}</>
        <td>R$: ${transaction.amount}</>
        <td>${transaction.payment}</>
        <td>${transaction.status}</>
      </tr>
    `;
    });
}
handleData();
//# sourceMappingURL=script.js.map