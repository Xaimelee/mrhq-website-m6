function ProductPricesLowToHighQuickSort(collection) {
    if (collection.length < 2) {
        return collection
    }

    let pivot = collection[0]
    let leftSplit = []
    let rightSplit = []

    for (let i = 1; i < collection.length; i++) {
        if (collection[i].price < pivot.price) {
            leftSplit.push(collection[i])
        } else {
            rightSplit.push(collection[i])
        }
    }

    return ProductPricesLowToHighQuickSort(leftSplit).concat(pivot, ProductPricesLowToHighQuickSort(rightSplit))
}

export default ProductPricesLowToHighQuickSort