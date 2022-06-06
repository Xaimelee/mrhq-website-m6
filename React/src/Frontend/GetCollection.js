function GetCollection(collection) {
    let url = 'http://127.0.0.1:9999/' + collection

    return fetch(url)
}

export default GetCollection