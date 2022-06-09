import ShoppingCartIcon from "../Images/add_shopping_cart.png"

function ProductEntry({image, brand, name, price}) {
    const productListEntryClassName = "ProductEntry"

    return (
        <li className = "ProductListEntry">
            <ul className = "Product">
                <li className = {productListEntryClassName}><img className = "ProductImage" src = {image} alt = ""/></li>
                <li className = {productListEntryClassName}>{brand}</li>
                <li className = {productListEntryClassName}>{name}</li>
                <li className = {productListEntryClassName}>From {price}</li>
                <li className = {productListEntryClassName}><img className = "ProductShoppingCartIcon" src = {ShoppingCartIcon} alt = ""/></li>
            </ul>
        </li>
    )
}

export default ProductEntry