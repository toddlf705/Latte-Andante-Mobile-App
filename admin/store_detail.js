const store_info = document.querySelector(".store_info")
const container = document.querySelector("#container")


async function loadDetails () {
    try {
        const response = await axios.get('http://localhost:3001/coffee')
            console.log(response)
        const name = document.querySelector('#name')
        const street = document.querySelector('#street')
        const city = document.querySelector('#city')
        const state = document.querySelector('#state')
        const zipcode = document.querySelector('#zipcode')
        const rating = document.querySelector('#rating')
        const mainpic = document.querySelector('#mainpic')
    

        name.innerHTML = response.data[0].store_name
        street.innerHTML = response.data[0].address[0].street
        city.innerHTML = response.data[0].address[0].city
        state.innerHTML = response.data[0].address[0].state
        zipcode.innerHTML = response.data[0].address[0].zipcode
        rating.innerHTML = response.data[0].rating
        mainpic.src = response.data[0].img[0]


        container.append(list)
    } catch {}

}

loadDetails()

const initSlider = () => {
    const imageList = document.querySelector(".slider .image-list")
    const slideButtons = document.querySelectorAll(".slider .arrow")
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "left_arrow" ? -1 : 1
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({left: scrollAmount, behavior: "smooth"})
        })
    })

    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block"
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block"
    }

    imageList.addEventListener("scroll", () => {
        handleSlideButtons()
    })
}

window.addEventListener("load", initSlider)