import InformationBannerEntry from "../Components/InformationBannerEntry"
import ListTextEntry from "../Components/ListTextEntry"
import HeaderList from "../Components/HeaderList"
import LocalShippingImage from "../Images/3-dark-grey-info-banner/local_shipping.png"
import AutoShipImage from "../Images/3-dark-grey-info-banner/auto-ship.png"
import QuestionImage from "../Images/3-dark-grey-info-banner/question.png"

function InformationBanner() {
    let bannersClasses = [
        "InformationBannerEntryTextHeader",
        "InformationBannerEntryTextSecondary",
        "InformationBannerEntryText"
    ]

    let banners = [
        {
            text: ["Free Shipping", "Nationwide Over $39", "Delivery delays message"],
            image: LocalShippingImage
        },
        {
            text: ["Auto Ship", "Get up to 20% off your delivery every month", "Get your pet's favourite products easier"],
            image: AutoShipImage
        },
        {
            text: ["Got a question?", "Contact us", "We are here for you"],
            image: QuestionImage
        }
    ]

    let listEntries = []

    for (let i = 0; i < banners.length; i++) {
        let textEntries = []

        for (let a = 0; a < bannersClasses.length; a++) {
            textEntries.push(<ListTextEntry className = {bannersClasses[a]} text = {banners[i].text[a]}/>)
        }

        let entry = <InformationBannerEntry image = {banners[i].image} listEntries = {textEntries}/>
        listEntries.push(entry)
    }

    return (
        <HeaderList headerClassName = "InformationBannerHeader" listClassName = {"InformationBannerHeaderList"} listEntries = {listEntries}/>
    )
}

export default InformationBanner