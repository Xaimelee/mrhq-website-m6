import HeaderList from "./HeaderList"
import ListTextEntry from "./ListTextEntry"
import DropdownListTextEntry from "./DropdownListTextEntry"

function DisplayHeaderEntry({headerClassName, listClassName, entryClassName, headerTextClassName, emptySpaceClassName, text, entries, dropdown}) {
    let dropdownEntries = []

    for (let i = 0; i < entries.length; i++) {
        let entry = <DropdownListTextEntry entryClassName = {entryClassName} text = {entries[i]}/>
        dropdownEntries.push(entry)
    }

    let listEntries = [
        <li className = {emptySpaceClassName}></li>,
        <ListTextEntry className = {headerTextClassName} text = {text}/>,
    ]

    return (
        <HeaderList headerClassName = {headerClassName} listClassName = {listClassName} listEntries = {[listEntries, dropdown]}/>
    )
}

export default DisplayHeaderEntry