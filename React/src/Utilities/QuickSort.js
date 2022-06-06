function QuickSort(collection) {
    if (collection.length < 2) {
        return collection
    }

    let pivot = collection[0]
    let leftSplit = []
    let rightSplit = []

    for (let i = 1; i < collection.length; i++) {
        if (collection[i].localeCompare(pivot) === -1) {
            leftSplit.push(collection[i])
        } else {
            rightSplit.push(collection[i])
        }
    }

    return QuickSort(leftSplit).concat(pivot, QuickSort(rightSplit))
}

export default QuickSort