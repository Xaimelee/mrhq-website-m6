import List from "./List"

function HeaderList({headerClassName, listClassName, listEntries}) {
    return (
        <nav className = {headerClassName}>
            <List className = {listClassName} listEntries = {listEntries}/>
        </nav>
    )
}

export default HeaderList