import NavHeaderList from "../Components/NavHeaderList"
import NavListEntry from "../Components/NavListEntry"

function InformationHeader() {
    const entriesClassName = "InformationHeaderListEntry"
    const linksClassName = "InformationHeaderListEntryLink"

    let listEntries = [
        <NavListEntry entryClassName = {entriesClassName} linkClassName = {linksClassName} link = "/" text = "24/7 Help"/>,
        <NavListEntry entryClassName = {entriesClassName} linkClassName = {linksClassName} link = "/" text = "Articles"/>,
        <NavListEntry entryClassName = {entriesClassName} linkClassName = {linksClassName} link = "/" text = "Store Finder"/>
    ]

    return (
        <NavHeaderList headerClassName = "InformationHeader" listClassName = "InformationHeaderList" listEntries = {listEntries} />
    )
}

export default InformationHeader