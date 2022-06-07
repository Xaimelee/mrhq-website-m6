import ListImageEntry from "../Components/ListImageEntry"
import HeaderListEntry from "../Components/HeaderListEntry"
import CartIcon from "../Images/1-nav-bar/cart-icon.png"
import SearchIcon from "../Images/1-nav-bar/search-icon.png"
import AccountIcon from "../Images/1-nav-bar/account-icon.png"

function NavigationAccountList({entryClassName}) {
    const listEntryClassName = "NavigationHeaderAccountListEntry"
    const imageEntryClassName = "NavigationHeaderAccountListImage"

    let listEntries = [
        <>
        <ListImageEntry entryClassName = {listEntryClassName} imageClassName = {imageEntryClassName} image = {CartIcon}/>
        <ListImageEntry entryClassName = {listEntryClassName} imageClassName = {imageEntryClassName} image = {SearchIcon}/>
        <ListImageEntry entryClassName = {listEntryClassName} imageClassName = {imageEntryClassName} image = {AccountIcon}/>
        </>
    ]

    return (
        <HeaderListEntry entryClassName = {entryClassName} listClassName = "NavigationHeaderAccountList" listEntries = {listEntries}/>
    )
}

export default NavigationAccountList