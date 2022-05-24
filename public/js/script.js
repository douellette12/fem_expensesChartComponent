let response = await fetch('../data.json')
let json = await response.json()

const formatData = (data) => {
    let total = 0
    data.map((item, index) => {
        total = total + item.amount
        let totalElement = document.getElementById("total")
        totalElement.innerHTML = "$" + total.toString()
        let day = document.getElementById(item.day)
        let amount = item.amount
        let percentage = amount*1.5
        if (percentage > 100) percentage = 100;
        percentage = percentage.toString() + 'px'
        day.style.height = percentage;
    })
}

formatData(json)

const bars = document.querySelectorAll(".trend__graph-bar")

bars.forEach(element => {
    element.addEventListener("mouseover", (event) => {
        let tag = element.querySelector('#' + event.target.id.toString() + '-tag')
        json.map((item) => {
            if (item.day === event.target.id) tag.innerHTML = '$' + item.amount.toString()
        })
        tag.classList.add('trend__amount-tag--visible')
        })
    element.addEventListener("mouseout", (event) => {
        let tag = element.querySelector('#' + event.target.id.toString() + '-tag')
        tag.classList.remove('trend__amount-tag--visible')
    })
});