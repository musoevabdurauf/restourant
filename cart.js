let cartUrl = "https://6a479ca7abfcbaade118bcb3.mockapi.io/Restaurant/card"

let allCart = document.querySelector(".allCart")
let DELIVERY_FEE = 5.99
let TAX_RATE = 0.08

async function get() {
    let response = await fetch(cartUrl)
    let data = await response.json()

    allCart.innerHTML = ""
    let subtotal = 0

    data.forEach((product) => {
        let productDiv = document.createElement("div")
        productDiv.innerHTML = `
        <img src="${product.logoProduct}">
        <h1>${product.nameProduct}</h1>
        <p>${product.descriptionProduct}</p>
        <h3>$${product.priceProduct}</h3>
        `

        allCart.appendChild(productDiv)

        subtotal = subtotal + parseFloat(product.priceProduct)
    });

    let taxes = subtotal * TAX_RATE
    let total = subtotal + DELIVERY_FEE + taxes

    document.getElementById("item-count").innerText = data.length
    document.getElementById("subtotal").innerText = "$" + subtotal.toFixed(2)
    document.getElementById("taxes").innerText = "$" + taxes.toFixed(2)
    document.getElementById("total").innerText = "$" + total.toFixed(2)
}
get()