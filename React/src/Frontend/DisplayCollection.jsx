function DisplayCollection({collection}) {
    if (collection) {
        let displayData = []

        for (let i = 0; i < collection.length; i++) {
            let name = collection[i].name
            displayData.push( <p key={i}>{name}</p> )
        }

        return (
            displayData
        ) 
    }
}

export default DisplayCollection