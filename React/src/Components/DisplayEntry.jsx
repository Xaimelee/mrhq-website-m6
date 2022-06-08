import HeaderList from "./HeaderList"
import ListImageEntry from "./ListImageEntry"
import List from "./List"

function DisplayEntry({headerClassName, listClassName, entryClassName, entryListClassName, imageClassName, imageEntries, button}) {  
    let listEntries = []

    for (let i = 0; i < imageEntries.length; i++) {
        let topBrand = <ListImageEntry entryClassName = {entryClassName} imageClassName = {imageClassName} image = {imageEntries[i]}/>
        let listEntry = <List className = {entryListClassName} listEntries = {[topBrand, button]}/>
        listEntries.push(listEntry)
    }
    
    return (
        <HeaderList headerClassName = {headerClassName} listClassName = {listClassName} listEntries = {listEntries}/>
    )
}

export default DisplayEntry