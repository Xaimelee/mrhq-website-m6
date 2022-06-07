import HeaderList from "../Components/HeaderList"
import ListTextEntry from "../Components/ListTextEntry"
import ListDropdownButtonEntry from "../Components/ListDropdownButtonEntry"

function TopBrandsHeader() {
    let listEntries = [
        <li className = "space"></li>,
        <ListTextEntry className = "TopBrandsHeaderText" text = "Top Brands"/>,
        <ListDropdownButtonEntry entryClassName = "TopBrandsHeaderDropdownButton" title = "Shop by brands"/>
    ]

    return (
        <HeaderList headerClassName = "TopBrandsHeader" listClassName = {"TopBrandsHeaderList"} listEntries = {listEntries}/>
    )
}

export default TopBrandsHeader