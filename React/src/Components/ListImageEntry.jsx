function ListImageEntry({entryClassName, imageClassName, image}) {
    return (
        <li className = {entryClassName}><img className = {imageClassName} src = {image} alt = "" /></li>
    )
}

export default ListImageEntry