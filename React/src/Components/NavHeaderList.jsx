import List from "./List"

function NavHeaderList({headerClassName, listClassName, listEntries}) {
    return (
        <nav className = {headerClassName}>
            <List className = {listClassName} listEntries = {listEntries}/>
        </nav>
    )
}

export default NavHeaderList