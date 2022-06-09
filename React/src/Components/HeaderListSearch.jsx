import List from "./List"
import DropdownButtonEntry from "./DropdownButtonEntry"
import ListDropdownButtonEntry from "./ListDropdownButtonEntry"
import SearchButton from "./SearchButton"
import { useSelector } from "react-redux"
import { searchCategories } from "../Frontend/SearchInputs"
import { searchRanges } from "../Frontend/SearchInputs"
import { searchLifestages } from "../Frontend/SearchInputs"

function HeaderListSearch({headerClassName, listClassName, listEntries}) {
    const state = useSelector(state => state.searchState.value)
    const category = useSelector(productIndex => productIndex.searchCategory.value)
    const categoryInputValue = useSelector(categoryInputValue => categoryInputValue.searchInputCategory.value)
    const subCategoryInputValue = useSelector(subCategoryInputValue => subCategoryInputValue.searchInputSubCategory.value)
    const priceRangeInputValue = useSelector(priceRangeInputValue => priceRangeInputValue.searchInputPriceRange.value)
    const lifestageInputValue = useSelector(lifestageInputValue => lifestageInputValue.searchInputLifestage.value)

    const entryClassName = "ProductSearchDropdownButton"
    const containerClassName = "DropdownButtonContainerMain"
    const buttonClassName = "ProductSearchInputButton"
    const dropdownClassName = "ProductSearchInputDropdown"
    const dropdownListClassName = "ProductSearchInputDropdownList"

    let categoryDropdownEntries = []
    let subCategoryDropdownEntries = []
    let priceRangeDropdownEntries = []
    let lifestageDropdownEntries = []

    for (let a = 0; a < searchCategories[category].categories.length; a++) {
        categoryDropdownEntries.push(<DropdownButtonEntry entryClassName = "ProductSearchInputListEntries" buttonClassName = "ProductSearchInputListButtonEntries" value = {searchCategories[category].categories[a].category} index = {0}/>)
        for (let b = 0; b < searchCategories[category].categories[a].subCategories.length; b++) {
            subCategoryDropdownEntries.push(<DropdownButtonEntry entryClassName = "ProductSearchInputListEntries" buttonClassName = "ProductSearchInputListButtonEntries" value = {searchCategories[category].categories[a].subCategories[b]} index = {1}/>)
        }
    }

    for (let i = 0; i < searchRanges.length; i++) {
        priceRangeDropdownEntries.push(<DropdownButtonEntry entryClassName = "ProductSearchInputListEntries" buttonClassName = "ProductSearchInputListButtonEntries" value = {searchRanges[i].range} index = {2}/>)
    }

    for (let i = 0; i < searchLifestages.length; i++) {
        for (let a = 0; a < searchLifestages[i].stages.length; a++) { 
            lifestageDropdownEntries.push(<DropdownButtonEntry entryClassName = "ProductSearchInputListEntries" buttonClassName = "ProductSearchInputListButtonEntries" value = {searchLifestages[i].stages[a]} index = {3}/>)
        }
    }

    let searchWindow = 
        <div className = "ProductSearchContainer">
            {state &&
                <div className = "ProductSearchWindow">
                    <div className = "ProductSearchWindowContents">
                        <div className = "ProductSearchWindowHeader">Shop All {searchCategories[category].type}</div>
                        <ul className = "ProductSearchInputs">
                            <ListDropdownButtonEntry entryClassName = {entryClassName} containerClassName = {containerClassName} buttonClassName = {buttonClassName} title = {categoryInputValue} dropdownClassName = {dropdownClassName} listClassName = {dropdownListClassName} listEntries = {categoryDropdownEntries}/>
                            <ListDropdownButtonEntry entryClassName = {entryClassName} containerClassName = {containerClassName} buttonClassName = {buttonClassName} title = {subCategoryInputValue} dropdownClassName = {dropdownClassName} listClassName = {dropdownListClassName} listEntries = {subCategoryDropdownEntries}/>
                            <ListDropdownButtonEntry entryClassName = {entryClassName} containerClassName = {containerClassName} buttonClassName = {buttonClassName} title = {"$" + priceRangeInputValue[0] + " - $" + priceRangeInputValue[1]} dropdownClassName = {dropdownClassName}listClassName = {dropdownListClassName} listEntries = {priceRangeDropdownEntries}/>
                            <ListDropdownButtonEntry entryClassName = {entryClassName} containerClassName = {containerClassName} buttonClassName = {buttonClassName} title = {lifestageInputValue} dropdownClassName = {dropdownClassName} listClassName = {dropdownListClassName} listEntries = {lifestageDropdownEntries}/>          
                        </ul>
                        <SearchButton className = "ProductSearchButtonHeader" buttonClassName = "ProductSearchButton" isWindow = {true}/>
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