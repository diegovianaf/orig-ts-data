import currencyToNumber from './currencyToNumber.js';
import stringToDate from './stringToDate.js';
export default function normalizeTransaction(transaction) {
    return {
        fullName: transaction.Nome,
        id: transaction.ID,
        date: stringToDate(transaction.Data),
        status: transaction.Status,
        email: transaction.Email,
        amount: transaction['Valor (R$)'],
        amountNumber: currencyToNumber(transaction['Valor (R$)']),
        payment: transaction['Forma de Pagamento'],
        novo: Boolean(transaction['Cliente Novo']),
    };
}
//# sourceMappingURL=normalizeTransaction.js.map