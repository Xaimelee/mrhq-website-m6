import QuickSort from "../Utilities/QuickSort"

function DisplayCollection({collection}) {
    if (collection) {
        let names = []

        for (let i = 0; i < collection.length; i++) {
            names.push(collection[i].name)
        }

        names = QuickSort(names)

        let displayData = []

        for (let i = 0; i < names.length; i++) {
            let name = names[i]
            displayData.push( <p key={i}>{name}</p> )
        }

        return (
            displayData
        ) 
    }
}

export default DisplayCollection