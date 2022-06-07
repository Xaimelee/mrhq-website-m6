import List from "./List"

function HeaderList({headerClassName, listClassName, listEntries}) {
    return (
        <div className = {headerClassName}>
            <List className = {listClassName} listEntries = {listEntries}/>
        </div>
    )
}

export default HeaderList