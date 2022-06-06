import HeaderList from "../Components/HeaderList"
import ListTextEntry from "../Components/ListTextEntry"

function InformationHeader() {
    const entriesClassName = "InformationHeaderListEntry"

    let entries = [
        <ListTextEntry className = {entriesClassName} text = "24/7 Help"/>,
        <ListTextEntry className = {entriesClassName} text = "Articles"/>,
        <ListTextEntry className = {entriesClassName} text = "Store Finder"/>
    ]

    return (
        <HeaderList headerClassName = "InformationHeader" listClassName = "InformationHeaderList" listEntries = {entries} />
    )
}

export default InformationHeader