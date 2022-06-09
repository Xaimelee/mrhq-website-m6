import DisplayProducts from "../Elements/DisplayProducts"
import InformationBanner from "../Elements/InformationBanner"
import ProductSearchHeader from "../Elements/ProductSearchHeader"

function Products() {
    return (
        <>
        <ProductSearchHeader />
        <DisplayProducts />
        <InformationBanner />
        </>
    )
}

export default Products