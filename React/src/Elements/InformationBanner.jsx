import InformationBannerEntry from "../Components/InformationBannerEntry"
import ListTextEntry from "../Components/ListTextEntry"
import HeaderList from "../Components/HeaderList"
import LocalShippingImage from "../Images/3-dark-grey-info-banner/local_shipping.png"
import AutoShipImage from "../Images/3-dark-grey-info-banner/auto-ship.png"
import QuestionImage from "../Images/3-dark-grey-info-banner/question.png"

function InformationBanner() {
    const textHeaderClassName = "InformationBannerEntryTextHeader"
    const textSecondaryClassName = "InformationBannerEntryTextSecondary"
    const textClassName = "InformationBannerEntryText"

    let bannerOneText = [
        <ListTextEntry className = {textHeaderClassName} text = "Free Shipping"/>,
        <ListTextEntry className = {textSecondaryClassName} text = "Nationwide Over $39"/>,
        <ListTextEntry className = {textClassName} text = "Delivery delays message"/>
    ]

    let bannerTwoText = [
        <ListTextEntry className = {textHeaderClassName} text = "Auto Ship"/>,
        <ListTextEntry className = {textSecondaryClassName} text = "Get up to 20% off your delivery every month"/>,
        <ListTextEntry className = {textClassName} text = "Get your pet's favourite products easier"/>
    ]

    let bannerThreeText = [
        <ListTextEntry className = {textHeaderClassName} text = "Got a question?"/>,
        <ListTextEntry className = {textSecondaryClassName} text = "Contact us"/>,
        <ListTextEntry className = {textClassName} text = "We are here for you"/>
    ]

    let listEntries = [
        <InformationBannerEntry image = {LocalShippingImage} listEntries = {bannerOneText}/>,
        <InformationBannerEntry image = {AutoShipImage} listEntries = {bannerTwoText}/>,
        <InformationBannerEntry image = {QuestionImage} listEntries = {bannerThreeText}/>
    ]

    return (
        <HeaderList headerClassName = "InformationBannerHeader" listClassName = {"InformationBannerHeaderList"} listEntries = {listEntries}/>
    )
}

export default InformationBanner