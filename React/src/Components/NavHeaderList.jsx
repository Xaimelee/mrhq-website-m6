import List from "./List"

function NavHeaderList({headerClassName, listClassName, listEntries}) {
    return (
        <nav className = {headerClassName}>
            <List className = {listClassName} entries = {listEntries}/>
        </nav>
    )
}

export default NavHeaderList