import ListDropdownButtonEntry from "../Components/ListDropdownButtonEntry"
import DropdownListTextEntry from "../Components/DropdownListTextEntry"
import DisplayHeaderEntry from "../Components/DisplayHeaderEntry"

function TopBrandsHeader() {
    let brands = [
        "Acana",
        "Addiction",
        "Animals Like Us",
        "Black Hawk",
        "Eukanuba",
        "Glow",
        "Go! Solutions",
        "Hill's Prescription Diet",
        "Hill's Science Diet",
        "Iams"
    ]

    let dropdownEntries = []

    for (let i = 0; i < brands.length; i++) {
        let entry = <DropdownListTextEntry entryClassName = "DropdownListTextEntryMain" text = {brands[i]}/>
        dropdownEntries.push(entry)
    }

    let dropdown = <ListDropdownButtonEntry entryClassName = "displayElementHeaderDropdownButton" containerClassName = "DropdownButtonContainerMain" buttonClassName = "DropdownButtonMain" title = "Shop by brands" dropdownClassName = "DropdownMain" listClassName = "DropdownListMain" listEntries = {dropdownEntries}/>

    return (
        <DisplayHeaderEntry headerClassName = "displayElementHeader" listClassName = "displayElementHeaderList" entryClassName = "DropdownListTextEntryMain" headerTextClassName = "displayElementHeaderText" emptySpaceClassName = "TopBrandsSpace" text = "Top Brands" entries = {brands} dropdown = {dropdown}/>
    )
}

export default TopBrandsHeader