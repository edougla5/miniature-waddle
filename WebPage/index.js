let bullet = document.getElementById('dot')

let nameLabel = document.getElementById('boxLabel')
let email = document.getElementById('box2Label')
let phone = document.getElementById('box3Label')
let firstName = document.getElementById('box')
let submitBUtton = document.getElementById('formSubmit')
let login = document.getElementById('loginLabel')
let title = document.getElementById('title')

let nameValue
let emailValue
let phoneValue

let home = document.getElementById('labelText')

let myFunc = () => {
    firstName.style.display = 'none'
    nameLabel.style.display = 'none'
    email.style.display = 'none'
    phone.style.display = 'none'
    nameValue=firstName.value
    emailValue=email.value
    phoneValue=phone.value

    console.log(nameValue)
    console.log(phoneValue)
    console.log(emailValue)

    submitBUtton.style.display='none'
    title.style.display='none'

    login.style.display='block'
}

<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam alias nostrum exercitationem voluptas dolorem nobis, sunt ex quas laudantium rerum, rem obcaecati voluptatem dignissimos, doloribus dicta. Dolores esse necessitatibus voluptatem!</div>