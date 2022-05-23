const getData = () => {
    fetch('../data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
}

getData()
