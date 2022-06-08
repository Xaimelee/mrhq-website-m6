import ListButtonEntry from "../Components/ListButtonEntry"
import DisplayEntry from "../Components/DisplayEntry"
import ProductOneImage from "../Images/6-customer-favourites/product-1.png"
import ProductTwoImage from "../Images/6-customer-favourites/product-2.png"
import ProductThreeImage from "../Images/6-customer-favourites/product-3.png"
import ProductFourImage from "../Images/6-customer-favourites/product-4.png"

function CustomerFavourites() {
    let button = <ListButtonEntry entryClassName = "displayElementListEntry" buttonClassName = "redButton" text = "Shop now"/>
    
    let topProductImages = [
        ProductOneImage,
        ProductTwoImage,
        ProductThreeImage,
        ProductFourImage
    ]
    
    return (
        <DisplayEntry headerClassName = "displayElement" listClassName = "displayElementList" entryClassName = "displayElementListEntry" entryListClassName = "displayElementEntry" imageClassName = "displayElementListEntryImage" imageEntries = {topProductImages} button = {button}/>
    )
}

export default CustomerFavourites