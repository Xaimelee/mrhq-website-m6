import React, { useState, useEffect } from 'react'
import GetCollection from './GetCollection'
import QuickSort from "../Utilities/QuickSort"

function DisplayCollection({url}) {
    const [collection, setCollection] = useState(null);

    useEffect(() => {
      GetCollection(url)
        .then(res => res.json())
        .then(data => {
          setCollection(data)
        })
    }, [url]);

    let displayData = []

    if (collection) {
        let names = []

        for (let i = 0; i < collection.length; i++) {
            names.push(collection[i].name)
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

export default DisplayCollection