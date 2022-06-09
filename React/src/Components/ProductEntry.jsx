import ShoppingCartIcon from "../Images/add_shopping_cart.png"

function ProductEntry({id, image, brand, name, price}) {
    const productListEntryClassName = "ProductEntry"

    const productID = id;

    return (
        <li className = "ProductListEntry">
            <ul className = "Product">
                <li className = {productListEntryClassName}><img className = "ProductImage" src = {image} alt = ""/></li>
                <li className = "ProductEntryBrand">{brand}</li>
                <li className = "ProductEntryName">{name}</li>
                <li className = "ProductEntryPrice">From ${price}</li>
                <li className = {productListEntryClassName}><button className = "ProductShoppingCartButton"><img className = "ProductShoppingCartIcon" src = {ShoppingCartIcon} alt = ""/></button></li>
            </ul>
        </li>
    )
}

export default ProductEntry