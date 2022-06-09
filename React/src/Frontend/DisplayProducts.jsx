import QuickSort from "../Utilities/QuickSort"
import { useSelector } from 'react-redux'

function DisplayProducts() {
    const searchCollection = useSelector(searchCollection => searchCollection.searchCollection.value)

    let displayData = []

    if (searchCollection) {
        let names = []

        for (let i = 0; i < searchCollection.length; i++) {
            names.push(searchCollection[i].name)
        }

        names = QuickSort(names)

        for (let i = 0; i < names.length; i++) {
            let name = names[i]
            displayData.push( <p key={i}>{name}</p> )
        }
    }

    return (
        displayData
    ) 
}

export default DisplayProducts