const list_template = document.querySelector(".list_template")
const container = document.querySelector(".container")

fetch("http://localhost:3001/coffee/premium%20coffee")
    .then(res => res.json())
    .then(data => {
        data.forEach(coffeeshops => {
        const list = list_template.content.cloneNode(true).children[0]
        const image = list.querySelector('#store_image')
        const store_name = list.querySelector('#store_name')
        const city = list.querySelector('#city')
            console.log(list)

        image.src = coffeeshops.img[0]
        store_name.innerHTML = coffeeshops.store_name
        city.innerHTML = coffeeshops.address[0].city

        container.append(list)
        })
    })
