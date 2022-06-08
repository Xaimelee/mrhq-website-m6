function ListButtonEntry({entryClassName, buttonClassName, text}) {
    return (
        <li className = {entryClassName}><button className = {buttonClassName}>{text}</button></li>
    )
}

export default ListButtonEntry