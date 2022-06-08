import HeaderList from "../Components/HeaderList"
import ListButtonEntry from "../Components/ListButtonEntry"
import ListImageEntry from "../Components/ListImageEntry"
import List from "../Components/List"
import BrandOneImage from "../Images/4-top-brands/brand-1.png"
import BrandTwoImage from "../Images/4-top-brands/brand-2.png"
import BrandThreeImage from "../Images/4-top-brands/brand-3.png"
import BrandFourImage from "../Images/4-top-brands/brand-4.png"

function TopBrands() {
    let button = <ListButtonEntry entryClassName = "TopBrandsListEntry" buttonClassName = "TopBrandsButton" text = "Shop now"/>
    
    let topBrandsImages = [
        BrandOneImage,
        BrandTwoImage,
        BrandThreeImage,
        BrandFourImage
    ]
    
    let listEntries = []

    for (let i = 0; i < topBrandsImages.length; i++) {
        let topBrand = <ListImageEntry entryClassName = "TopBrandsListEntry" imageClassName = "TopBrandsListEntryImage" image = {topBrandsImages[i]}/>
        let listEntry = <List className = "TopBrandsEntry" listEntries = {[topBrand, button]}/>
        listEntries.push(listEntry)
    }
    
    return (
        <HeaderList headerClassName = "TopBrands" listClassName = "TopBrandsList" listEntries = {listEntries}/>
    )
}

export default TopBrands