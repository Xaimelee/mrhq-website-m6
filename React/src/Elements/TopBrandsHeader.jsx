import HeaderList from "../Components/HeaderList"
import ListTextEntry from "../Components/ListTextEntry"
import ListDropdownButtonEntry from "../Components/ListDropdownButtonEntry"
import DropdownListTextEntry from "../Components/DropdownListTextEntry"

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

    let listEntries = [
        <li className = "space"></li>,
        <ListTextEntry className = "TopBrandsHeaderText" text = "Top Brands"/>,
        <ListDropdownButtonEntry entryClassName = "TopBrandsHeaderDropdownButton" containerClassName = "DropdownButtonContainerMain" buttonClassName = "DropdownButtonMain" title = "Shop by brands" dropdownClassName = "DropdownMain" listClassName = "DropdownListMain" listEntries = {dropdownEntries}/>
    ]

    return (
        <HeaderList headerClassName = "TopBrandsHeader" listClassName = {"TopBrandsHeaderList"} listEntries = {listEntries}/>
    )
}

export default TopBrandsHeader