import ListButtonEntry from "../Components/ListButtonEntry"
import DisplayEntry from "../Components/DisplayEntry"
import BrandOneImage from "../Images/4-top-brands/brand-1.png"
import BrandTwoImage from "../Images/4-top-brands/brand-2.png"
import BrandThreeImage from "../Images/4-top-brands/brand-3.png"
import BrandFourImage from "../Images/4-top-brands/brand-4.png"

function TopBrands() {
    let button = <ListButtonEntry entryClassName = "displayElementListEntry" buttonClassName = "cyanButton" text = "Shop now"/>
    
    let topBrandsImages = [
        BrandOneImage,
        BrandTwoImage,
        BrandThreeImage,
        BrandFourImage
    ]
    
    return (
        <DisplayEntry headerClassName = "displayElement" listClassName = "displayElementList" entryClassName = "displayElementListEntry" entryListClassName = "displayElementEntry" imageClassName = "displayElementListEntryImage" imageEntries = {topBrandsImages} button = {button}/>
    )
}

export default TopBrands