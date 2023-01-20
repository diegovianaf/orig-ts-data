import currencyToNumber from './currencyToNumber.js';
export default function normalizeTransaction(transaction) {
    return {
        nome: transaction.Nome,
        id: transaction.ID,
        data: transaction.Data,
        status: transaction.Status,
        email: transaction.Email,
        moeda: transaction['Valor (R$)'],
        valor: currencyToNumber(transaction['Valor (R$)']),
        pagamento: transaction['Forma de Pagamento'],
        novo: Boolean(transaction['Cliente Novo']),
    };
}
//# sourceMappingURL=normalizeTransaction.js.map