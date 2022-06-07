function List({className, listEntries}){
    let entries = []

    for (let i = 0; i < listEntries.length; i++) {
        entries.push(listEntries[i])
    }

    return (
        <ul className = {className}>
            {entries}
        </ul>
    )
}

export default List