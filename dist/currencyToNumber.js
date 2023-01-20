export default function currencyToNumber(moeda) {
    const amountNumber = Number(moeda.replaceAll('.', '').replace(',', '.'));
    return isNaN(amountNumber) ? null : amountNumber;
}
//# sourceMappingURL=currencyToNumber.js.map