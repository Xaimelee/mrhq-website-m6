import SlideShow from "../Elements/SlideShow"
import InformationBanner from "../Elements/InformationBanner"
import TopBrandsHeader from "../Elements/TopBrandsHeader"
import TopBrands from "../Elements/TopBrands"
import BestSellersHeader from "../Elements/BestSellersHeader"
import BestSellers from "../Elements/BestSellers"
import CustomerFavouritesHeader from "../Elements/CustomerFavouritesHeader"
import CustomerFavourites from "../Elements/CustomerFavourites"

function Homepage() {
    return (
        <>
            <SlideShow />
            <InformationBanner />
            <TopBrandsHeader />
            <TopBrands />
            <BestSellersHeader />
            <BestSellers />
            <CustomerFavouritesHeader />
            <CustomerFavourites />
        </>
    )
}

export default Homepage