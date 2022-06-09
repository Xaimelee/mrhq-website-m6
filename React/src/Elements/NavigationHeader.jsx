import HeaderListSearch from "../Components/HeaderListSearch"
import PetLogo from "../Images/1-nav-bar/logo.png"
import ListImageEntry from "../Components/ListImageEntry"
import NavigationProductList from "./NavigationProductList"
import NavigationAccountList from "./NavigationAccountList"

function NavigationHeader() {
    let listEntries = [
        <>
        <ListImageEntry entryClassName = "NavigationHeaderListEntry" imageClassName = "NavigationHeaderListLogo" image = {PetLogo}/>
        <NavigationProductList entryClassName = "NavigationHeaderListEntry" />
        <NavigationAccountList entryClassName = "NavigationHeaderListEntry" />
        </>
    ]

    return (
        <HeaderListSearch headerClassName = "NavigationHeader" listClassName = "NavigationHeaderList" listEntries = {listEntries}/>
    )
}

export default NavigationHeader