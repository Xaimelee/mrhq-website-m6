import List from "./List"

function HeaderListSearch({headerClassName, listClassName, listEntries}) {
    let show = true
    
    let searchWindow = <div className = "DropdownButtonContainerMain">
                {show &&
                    <div className = "ProductSearchBox">
                        Test?
                    </div>
                }
            </div>
    
    return (
        <div className = {headerClassName}>
            <List className = {listClassName} listEntries = {listEntries}/>
            {searchWindow}
        </div>
    )
}

export default HeaderListSearch