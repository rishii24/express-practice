getData()
async function getData() {
    const response = await fetch('/apicall')
    const data = await response.json()
    console.log(data)

    for (item of data) {
        const root = document.createElement('div')
        const geo = document.createElement('div')
        geo.textContent = `you're here : ${item.lat, item.long}`
        const time = document.createElement('div')
        time.textContent = `at : ${item.date}`
        root.append(geo, time)
        document.body.append(root)
    }
}