import { useDispatch } from 'react-redux'
import { setState } from '../Features/searchState'

function NavigationProductListEntry({entryClassName, buttonClassName, imageClassName, image}) {
    const dispatch = useDispatch()
    
    function handleOnClick() {
        dispatch(setState())
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