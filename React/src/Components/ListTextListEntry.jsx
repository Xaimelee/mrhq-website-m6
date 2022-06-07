function ListTextListEntry({listClassName, listEntries}) {
    return (
        <ul className = {listClassName}>
           {listEntries}
        </ul>
    )
}

export default ListTextListEntry