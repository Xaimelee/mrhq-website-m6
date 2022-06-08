import HeaderList from "../Components/HeaderList"
import ListImageEntry from "../Components/ListImageEntry"
import BrandOneImage from "../Images/5-best-sellers/brand-1.png"
import BrandTwoImage from "../Images/5-best-sellers/brand-2.png"
import BrandThreeImage from "../Images/5-best-sellers/brand-3.png"
import BrandFourImage from "../Images/5-best-sellers/brand-4.png"
import BrandFiveImage from "../Images/5-best-sellers/brand-5.png"
import BrandSixImage from "../Images/5-best-sellers/brand-6.png"

function BestSellers() {
    let bestSellersImages = [
        BrandOneImage,
        BrandTwoImage,
        BrandThreeImage,
        BrandFourImage,
        BrandFiveImage,
        BrandSixImage
    ]
    
    let listEntries = []

    for (let i = 0; i < bestSellersImages.length; i++) {
        let listEntry = <ListImageEntry entryClassName = "BestSellersListEntry" imageClassName = "BestSellersListEntryImage" image = {bestSellersImages[i]}/>
        listEntries.push(listEntry)
    }

    return (
        <HeaderList headerClassName = "BestSellers" listClassName = "BestSellersList" listEntries = {listEntries}/>
    )
}

export default BestSellers