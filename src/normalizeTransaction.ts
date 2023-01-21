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
    fullName: string
    id: number
    date: Date
    status: TransactionStatus
    email: string
    amount: string
    amountNumber: number | null
    payment: TransactionPayment
    novo: boolean
  }
}

export default function normalizeTransaction(
  transaction: TransactionAPI
): Transaction {
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
  }
}
