import HeaderList from "../Components/HeaderList"
import ListTextEntry from "../Components/ListTextEntry"
import ListDropdownButtonEntry from "../Components/ListDropdownButtonEntry"
import DropdownListTextEntry from "../Components/DropdownListTextEntry"

function TopBrandsHeader() {
    let dropdownEntries = [
        <DropdownListTextEntry entryClassName = "DropdownListTextEntryMain" text = "Acana"/>,
        <DropdownListTextEntry entryClassName = "DropdownListTextEntryMain" text = "Addiction"/>,
        <DropdownListTextEntry entryClassName = "DropdownListTextEntryMain" text = "Animals Like Us"/>,
        <DropdownListTextEntry entryClassName = "DropdownListTextEntryMain" text = "Black Hawk"/>,
        <DropdownListTextEntry entryClassName = "DropdownListTextEntryMain" text = "Eukanuba"/>,
        <DropdownListTextEntry entryClassName = "DropdownListTextEntryMain" text = "Glow"/>,
        <DropdownListTextEntry entryClassName = "DropdownListTextEntryMain" text = "Go! Solutions"/>,
        <DropdownListTextEntry entryClassName = "DropdownListTextEntryMain" text = "Hill's Prescription Diet"/>,
        <DropdownListTextEntry entryClassName = "DropdownListTextEntryMain" text = "Hill's Science Diet"/>,
        <DropdownListTextEntry entryClassName = "DropdownListTextEntryMain" text = "Iams"/>
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