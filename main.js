
// Modal
const buyBtns = document.querySelectorAll('.js-buy-tickets') 
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
const modalClose = document.querySelector('.js-modal-close')

function showBuyTickets() {
    modal.classList.add('open')
}

function hideBuyTickets() {
    modal.classList.remove('open')
}

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)
}

modalClose.addEventListener('click', hideBuyTickets)

 modal.addEventListener('click', hideBuyTickets)

 modalContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})

// Mobile 

// open mobile menu
const header = document.getElementById('header')
const mobileMenu = document.getElementById('mobile-menu')
const headerHeight = header.clientHeight

mobileMenu.onclick = function () {
    var isClose = header.clientHeight 
    if (isClose === headerHeight) {
        header.style.height = 'auto'
    } else {
        header.style.height = null
    }
}

// auto hide when chose menu
var menuItems = document.querySelectorAll('#nav li a')
        
for (var menuItem of menuItems) {
    menuItem.onclick = function(event) {
        // chose "more" by using the different is "in li tag have a tag and ul tag with class subnav"
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav')
        if (isParentMenu) {
            event.preventDefault() // fix more item 
        } else {
            header.style.height = null
        }
    }
}
