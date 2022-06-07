import PetLogo from "../Images/1-nav-bar/logo.png"
import HeaderList from "../Components/HeaderList"
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
        <HeaderList headerClassName = "NavigationHeader" listClassName = "NavigationHeaderList" listEntries = {listEntries}/>
    )
}

export default NavigationHeader