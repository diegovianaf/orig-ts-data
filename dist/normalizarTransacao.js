import moedaParaNumero from './moedaParaNumero.js';
export default function normalizarTransacao(transacao) {
    return {
        nome: transacao.Nome,
        id: transacao.ID,
        data: transacao.Data,
        status: transacao.Status,
        email: transacao.Email,
        moeda: transacao['Valor (R$)'],
        valor: moedaParaNumero(transacao['Valor (R$)']),
        pagamento: transacao['Forma de Pagamento'],
        novo: Boolean(transacao['Cliente Novo']),
    };
}
//# sourceMappingURL=normalizarTransacao.js.map