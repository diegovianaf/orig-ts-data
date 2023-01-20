/**
 * Recebe string '1.200,50' retorna number: 1200.50
 */
export default function currencyToNumber(moeda: string): number | null {
  const amountNumber = Number(moeda.replaceAll('.', '').replace(',', '.'))
  return isNaN(amountNumber) ? null : amountNumber
}
