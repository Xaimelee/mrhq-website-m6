import List from "./List"
import { useSelector } from 'react-redux'

function HeaderListSearch({headerClassName, listClassName, listEntries}) {
    const state = useSelector(state => state.searchState.value)
    
    let searchWindow = 
        <div className = "ProductSearchContainer">
            {state &&
                <div className = "ProductSearchBox">
                    <div className = "ProductSearchBoxContents">
                        <button className = "cyanButton"></button>
                        <button className = "cyanButton"></button>
                        <button className = "cyanButton"></button>
                        <button className = "cyanButton"></button>
                    </div>
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