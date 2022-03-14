const loca = () => {
    if ('geolocation' in navigator) {
        console.log("geolocation is available")
        navigator.geolocation.getCurrentPosition(async position => {
            const lat = position.coords.latitude
            document.getElementById("lati").textContent = lat
            const long = position.coords.longitude
            document.getElementById("long").textContent = long
            // console.log(position);
            const date = Date()
            // console.log(date)
            const data = { lat, long, date }
            const opt = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
            const response = await fetch('/apicall', opt)
            const adata = await response.json()
            console.log(adata)
        });
    } else {
        console.log("geolocation is not available")

    }
}