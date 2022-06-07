import DropdownButton from "./DropdownButton";

function ListDropdownButtonEntry({entryClassName, title}) {
    return (
        <li className = {entryClassName}><DropdownButton title = {title}/></li>
    )
}

export default ListDropdownButtonEntry