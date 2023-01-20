import fetchData from './fetchData.js';
import normalizeTransaction from './normalizeTransaction.js';
async function handleData() {
    const data = await fetchData('https://api.origamid.dev/json/transacoes.json?');
    if (!data)
        return;
    const transacoes = data.map(normalizeTransaction);
    console.log(transacoes);
}
handleData();
//# sourceMappingURL=script.js.map