import ListDropdownButtonEntry from "../Components/ListDropdownButtonEntry"
import DropdownListTextEntry from "../Components/DropdownListTextEntry"
import DisplayHeaderEntry from "../Components/DisplayHeaderEntry"

function CustomerFavouritesHeader() {
    let bestSellers = [
        "Best Sellers",
        "Name A to Z",
        "Name Z to A",
        "Price low to high",
        "Price high to low",
        "Latest Products",
        "Relevance"
    ]

    let dropdownEntries = []

    for (let i = 0; i < bestSellers.length; i++) {
        let entry = <DropdownListTextEntry entryClassName = "DropdownListTextEntryMain" text = {bestSellers[i]}/>
        dropdownEntries.push(entry)
    }

    let dropdown = <ListDropdownButtonEntry entryClassName = "displayElementHeaderDropdownButton" containerClassName = "DropdownButtonContainerMain" buttonClassName = "DropdownButtonMain" title = "Best Sellers" dropdownClassName = "DropdownMain" listClassName = "DropdownListMain" listEntries = {dropdownEntries}/>

    return (
        <DisplayHeaderEntry headerClassName = "displayElementHeader" listClassName = "displayElementHeaderList" entryClassName = "DropdownListTextEntryMain" headerTextClassName = "displayElementHeaderText" emptySpaceClassName = "CustomerFavouritesSpace" text = "Customer Favourites" entries = {bestSellers} dropdown = {dropdown}/>
    )
}

export default CustomerFavouritesHeader