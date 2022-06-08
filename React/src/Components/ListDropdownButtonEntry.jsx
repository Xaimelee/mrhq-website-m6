import DropdownButton from "./DropdownButton";

function ListDropdownButtonEntry({entryClassName, containerClassName, buttonClassName, title, dropdownClassName, listClassName, listEntries}) {
    return (
        <li className = {entryClassName}><DropdownButton containerClassName = {containerClassName} buttonClassName = {buttonClassName} title = {title} dropdownClassName = {dropdownClassName} listClassName = {listClassName} listEntries = {listEntries}/></li>
    )
}

export default ListDropdownButtonEntry