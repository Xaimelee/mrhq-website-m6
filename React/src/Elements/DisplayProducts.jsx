import ProductBrandsQuickSort from "../Utilities/ProductBrandsQuickSort"
import ProductNamesQuickSort from "../Utilities/ProductNamesQuickSort"
import ProductPricesLowToHighQuickSort from "../Utilities/ProductPricesLowToHighQuickSort"
import ProductPricesHighToLowQuickSort from "../Utilities/ProductPricesHighToLowQuickSort"
import ListDropdownButtonEntry from "../Components/ListDropdownButtonEntry"
import DropdownButtonEntry from "../Components/DropdownButtonEntry"
import { useSelector } from "react-redux"
import { productSortTypes } from "../Frontend/ProductSorts"
import ProductEntry from "../Components/ProductEntry"
import List from "../Components/List"

function DisplayProducts() {
    const searchCollection = useSelector(searchCollection => searchCollection.searchCollection.value)
    const productsSort = useSelector(productsSort => productsSort.productsSort.value)

    const entryClassName = "ProductSearchDropdownButton"
    const containerClassName = "DropdownButtonContainerMain"
    const buttonClassName = "ProductSearchInputButton"
    const dropdownClassName = "ProductSearchInputDropdown"
    const dropdownListClassName = "ProductSearchInputDropdownList"

    let sortTypesDropdownEntries = []
    let productEntries = []
    let collection = []

    for (let i = 0; i < productSortTypes.length; i++) {
        for (let a = 0; a < productSortTypes[i].types.length; a++) { 
            sortTypesDropdownEntries.push(<DropdownButtonEntry entryClassName = "ProductSearchInputListEntries" buttonClassName = "ProductSearchInputListButtonEntries" value = {productSortTypes[i].types[a]} index = {4}/>)
        }
    }

    if (searchCollection) {
        for (let a = 0; a < searchCollection.length; a++) {
            collection.push(searchCollection[a])
        }

        if (productsSort === productSortTypes[0].types[0]) {
            collection = ProductBrandsQuickSort(collection)
        } else if (productsSort === productSortTypes[0].types[1]) {
            collection = ProductNamesQuickSort(collection)
        }  else if (productsSort === productSortTypes[0].types[2]) {
            collection = ProductPricesHighToLowQuickSort(collection)
        } else if (productsSort === productSortTypes[0].types[3]) {
            collection = ProductPricesLowToHighQuickSort(collection)
        }

        for (let i = 0; i < collection.length; i++) {
            productEntries.push(<ProductEntry id = {collection[i]._id} image = {collection[i].imageurl} brand = {collection[i].brand} name = {collection[i].name} price = {collection[i].price}/>)
        }
    }

    return (
        <>
        <ul className = "ProductSortButton"><ListDropdownButtonEntry entryClassName = {entryClassName} containerClassName = {containerClassName} buttonClassName = {buttonClassName} title = {productsSort} dropdownClassName = {dropdownClassName} listClassName = {dropdownListClassName} listEntries = {sortTypesDropdownEntries}/></ul>
        <List className = "ProductList" listEntries = {productEntries}/>
        </>
    ) 
}

export default DisplayProducts