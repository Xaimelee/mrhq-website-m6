import { useDispatch } from "react-redux"
import { setInputCategory } from "../Features/searchInputCategory"
import { setInputSubCategory } from "../Features/searchInputSubCategory"
import { setInputPriceRange } from "../Features/searchInputPriceRange"
import { setInputLifestage } from "../Features/searchInputLifestage"
import { setSort } from "../Features/productsSort"

function DropdownButtonEntry({entryClassName, buttonClassName, value, index}) {
    const dispatch = useDispatch()
    let buttonValue = value

    function handleOnClick() {
        if (index === 0) {
            dispatch(setInputCategory(buttonValue))
        } else if (index === 1) {
            dispatch(setInputSubCategory(buttonValue))
        } else if (index === 2) {
            dispatch(setInputPriceRange(buttonValue))
        } else if (index === 3) {
            dispatch(setInputLifestage(buttonValue))
        } else if (index === 4) {
            dispatch(setSort(buttonValue))
        }
    }

    let displayValue = value

    if (Array.isArray(value)) {
        displayValue = "$" + value[0] + " - $" + value[1]
    }

    return (
        <li className = {entryClassName}><button type = "button" className = {buttonClassName} onClick={() => handleOnClick()}>{displayValue}</button></li>
    )
}

export default DropdownButtonEntry