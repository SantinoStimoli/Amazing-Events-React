export function numberFormater(amount) {
    const numberFormat = new Intl.NumberFormat('en-US');

    return numberFormat.format(amount)
}