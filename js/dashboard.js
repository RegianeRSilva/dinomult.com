// Dashboar 

var menuItem = document.querySelectorAll('.menu-item')

function selectLink(){
    menuItem.forEach((item)=>
       item.classList.remove('ativo') 
    )
    this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectLink)
)