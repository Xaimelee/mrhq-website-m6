function List({className, entries}){
    let listEntries = []

    for (let i = 0; i < entries.length; i++) {
        listEntries.push(entries[i])
    }

    return (
        <ul className = {className}>
            {listEntries}
        </ul>
    )
}

export default List