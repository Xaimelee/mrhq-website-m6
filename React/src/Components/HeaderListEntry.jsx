import List from "./List"

function HeaderListEntry({entryClassName, listClassName, listEntries}) {
    return (
        <li className = {entryClassName}><List className = {listClassName} listEntries = {listEntries}/></li>
    )
}

export default HeaderListEntry