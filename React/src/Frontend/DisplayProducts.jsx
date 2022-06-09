import QuickSort from "../Utilities/QuickSort"
import { useSelector } from 'react-redux'
import ProductEntry from "../Components/ProductEntry"
import List from "../Components/List"

function DisplayProducts() {
    const searchCollection = useSelector(searchCollection => searchCollection.searchCollection.value)

    let productEntries = []

    if (searchCollection) {
        

        for (let i = 0; i < searchCollection.length; i++) {
            productEntries.push(<ProductEntry image = {searchCollection[i].imageurl} brand = {searchCollection[i].brand} name = {searchCollection[i].name} price = {searchCollection[i].price}/>)
        }

        // names = QuickSort(names)

        // for (let i = 0; i < names.length; i++) {
        //     let name = names[i]
        //     displayData.push( <p key={i}>{name}</p> )
        // }
    }

    return (
        <List className = "ProductList" listEntries = {productEntries}/>
    ) 
}

export default DisplayProducts