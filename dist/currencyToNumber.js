export default function currencyToNumber(moeda) {
    const numero = Number(moeda.replaceAll('.', '').replace(',', '.'));
    return isNaN(numero) ? null : numero;
}
//# sourceMappingURL=currencyToNumber.js.map