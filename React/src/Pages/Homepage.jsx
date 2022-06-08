import SlideShow from "../Elements/SlideShow"
import InformationBanner from "../Elements/InformationBanner"
import TopBrandsHeader from "../Elements/TopBrandsHeader"
import TopBrands from "../Elements/TopBrands"

function Homepage() {
    return (
        <>
            <SlideShow />
            <InformationBanner />
            <TopBrandsHeader />
            <TopBrands />
        </>
    )
}

export default Homepage