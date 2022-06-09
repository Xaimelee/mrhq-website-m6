function ProductNamesQuickSort(collection) {
    if (collection.length < 2) {
        return collection
    }

    let pivot = collection[0]
    let leftSplit = []
    let rightSplit = []

    for (let i = 1; i < collection.length; i++) {
        if (collection[i].name.localeCompare(pivot.name) === -1) {
            leftSplit.push(collection[i])
        } else {
            rightSplit.push(collection[i])
        }
    }

    return ProductNamesQuickSort(leftSplit).concat(pivot, ProductNamesQuickSort(rightSplit))
}

export default ProductNamesQuickSort