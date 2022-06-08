import HeaderList from "../Components/HeaderList"
import ListTextEntry from "../Components/ListTextEntry"
import ListDropdownButtonEntry from "../Components/ListDropdownButtonEntry"
import DropdownListTextEntry from "../Components/DropdownListTextEntry"

function TopBrandsHeader() {
    let dropdownEntries = [
        <DropdownListTextEntry entryClassName = "DropdownListTextEntryMain" text = "Hello There"/>
    ]

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