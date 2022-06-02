function GetCollection({collection}) {
    let url = 'http://127.0.0.1:9999/' + collection

    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}

export default GetCollection