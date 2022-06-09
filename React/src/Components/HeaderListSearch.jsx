import List from "./List"
import { useSelector } from 'react-redux'

function HeaderListSearch({headerClassName, listClassName, listEntries}) {
    const state = useSelector(state => state.searchState.value)
    
    let searchWindow = <div className = "DropdownButtonContainerMain">
                            {state &&
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