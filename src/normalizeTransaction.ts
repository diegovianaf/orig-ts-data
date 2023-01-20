import currencyToNumber from './currencyToNumber.js'
import stringToDate from './stringToDate.js'

declare global {
  type TransactionPayment = 'Boleto' | 'Cartão de Crédito'
  type TransactionStatus =
    | 'Paga'
    | 'Recusada pela operadora de cartão'
    | 'guardando pagamento'
    | 'Estornada'

  interface TransactionAPI {
    Nome: string
    ID: number
    Data: string
    Status: TransactionStatus
    Email: string
    Valor: string
    ['Valor (R$)']: string
    ['Forma de Pagamento']: TransactionPayment
    ['Cliente Novo']: number
  }

  interface Transaction {
    nome: string
    id: number
    data: string
    status: TransactionStatus
    email: string
    moeda: string
    valor: number | null
    pagamento: TransactionPayment
    novo: boolean
  }
}

export default function normalizeTransaction(transaction: TransactionAPI) {
  return {
    nome: transaction.Nome,
    id: transaction.ID,
    data: stringToDate(transaction.Data),
    status: transaction.Status,
    email: transaction.Email,
    moeda: transaction['Valor (R$)'],
    valor: currencyToNumber(transaction['Valor (R$)']),
    pagamento: transaction['Forma de Pagamento'],
    novo: Boolean(transaction['Cliente Novo']),
  }
}
