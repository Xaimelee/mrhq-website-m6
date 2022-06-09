function NavigationProductListEntry({entryClassName, buttonClassName, imageClassName, image}) {
    function handleOnClick() {
        //
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