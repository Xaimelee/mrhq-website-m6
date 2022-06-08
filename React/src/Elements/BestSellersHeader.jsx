import HeaderList from "../Components/HeaderList"
import ListTextEntry from "../Components/ListTextEntry"

function BestSellersHeader() {
    let listEntries = [
        <ListTextEntry className = "BestSellersHeaderText" text = "Check out some of our best sellers!"/>,
    ]

    return (
        <HeaderList headerClassName = "BestSellersHeader" listClassName = {"BestSellersHeaderList"} listEntries = {listEntries}/>
    )
}

export default BestSellersHeader