let url = "https://6a45064baab3faec3f694115.mockapi.io/Products"
let cartUrl = "https://6a479ca7abfcbaade118bcb3.mockapi.io/Restaurant/card"

let allProducts = document.querySelector(".allProducts")

async function get() {
    let response = await fetch(url)
    let data = await response.json()

    allProducts.innerHTML = ""
    data.forEach((product) => {
        let productDiv = document.createElement("div")
        productDiv.innerHTML = `
        <img src="${product.logoProduct}">
        <h1>${product.nameProduct}</h1>
        <p>${product.descriptionProduct}</p>
        <h3>${product.cookingTime} min</h3>
        <h3>$${product.priceProduct}</h3>
        <button class="addBtn">Add</button>
        `

        
        let addBtn = productDiv.querySelector(".addBtn")
        addBtn.onclick = () => {
            addCart(product)
        }

        allProducts.appendChild(productDiv)
    });
}
get()


async function addCart(product) {
    try {
        await fetch(cartUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nameProduct: product.nameProduct,
                logoProduct: product.logoProduct,
                priceProduct: product.priceProduct,
                descriptionProduct: product.descriptionProduct,
                cookingTime: product.cookingTime
            })
        })
    } catch (error) {
        console.error(error);
    }
}