import { useDispatch } from "react-redux"
import { setState } from "../Features/searchState"
import { resetInputCategory} from "../Features/searchInputCategory"
import { resetInputSubCategory } from "../Features/searchInputSubCategory"
import { resetInputPriceRange } from "../Features/searchInputPriceRange"
import { resetInputLifestage } from "../Features/searchInputLifestage"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { setCollection } from "../Features/searchCollection"
import GetCollection from "../Frontend/GetCollection"

function SearchButton({className, buttonClassName, isWindow}) {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const categoryInputValue = useSelector(categoryInputValue => categoryInputValue.searchInputCategory.value)
    const subCategoryInputValue = useSelector(subCategoryInputValue => subCategoryInputValue.searchInputSubCategory.value)
    const priceRangeInputValue = useSelector(priceRangeInputValue => priceRangeInputValue.searchInputPriceRange.value)
    const lifestageInputValue = useSelector(lifestageInputValue => lifestageInputValue.searchInputLifestage.value)

    function handleOnClick() {
        let canNavigate = true
        let url = ""

        if (categoryInputValue === "Category") {
            canNavigate = false
        }

        if (subCategoryInputValue === "Sub Category") {
            canNavigate = false
        }

        if (lifestageInputValue === "Lifestage") {
            canNavigate = false
        }

        if (subCategoryInputValue === "Dry Food") {
            url = "getDryDogFood"
        }

        if (canNavigate) {
            GetCollection(url)
            .then(res => res.json())
            .then(data => {
              dispatch(setCollection(data))
            })

            navigate("/Products")
            if (isWindow) {
                dispatch(setState())
            }
            dispatch(resetInputCategory())
            dispatch(resetInputSubCategory())
            dispatch(resetInputPriceRange())
            dispatch(resetInputLifestage())
        }
    }

    return (
        <div className = {className}><button type = "button" className = {buttonClassName} onClick={() => handleOnClick()}>Search</button></div>
    )
}

export default SearchButton