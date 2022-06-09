import { useDispatch } from "react-redux"
import { setState } from "../Features/searchState"
import { setCategory } from "../Features/searchCategory"
import { resetInputCategory} from "../Features/searchInputCategory"
import { resetInputSubCategory } from "../Features/searchInputSubCategory"
import { resetInputPriceRange } from "../Features/searchInputPriceRange"
import { resetInputLifestage } from "../Features/searchInputLifestage"

function NavigationProductListEntry({entryClassName, buttonClassName, imageClassName, image, categoryIndex}) {
    const dispatch = useDispatch()

    function handleOnClick() {
        dispatch(setCategory(categoryIndex))
        dispatch(setState())
        dispatch(resetInputCategory())
        dispatch(resetInputSubCategory())
        dispatch(resetInputPriceRange())
        dispatch(resetInputLifestage())
    }

    return (
        <li className = {entryClassName}>
            <button type = "button" className = {buttonClassName} onClick = {() => handleOnClick()}>
                <img className = {imageClassName} src = {image} alt = "" />
            </button>
        </li>
    )
}

export default NavigationProductListEntry