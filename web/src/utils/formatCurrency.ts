export function formatCurrency(amount: Number) {
    const currency = Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    })

    return currency.format(amount).replace("R$", "")
}