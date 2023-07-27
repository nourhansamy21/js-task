var allProducts = document.querySelectorAll(".card")
var content = document.querySelector("#content")
var show = document.querySelector("#show")
var btn = document.querySelector("#btn1")
var btn2 = document.querySelector("#btn2")
var totalPrice = 0

allProducts.forEach(function (item) {
    item.onclick = function () {
        totalPrice += +(item.getAttribute("price"))
        content.innerHTML += item.textContent+ ", "
    }
})

btn.onclick = function () {
    show.innerHTML = ""
    show.innerHTML += totalPrice
}

btn2.onclick = function () {
    content.innerHTML = ""
    show.innerHTML = ""
}
