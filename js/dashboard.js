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

// Expandir menu botao

var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.side-menu')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expand')
})