document.addEventListener('keyup', logkey)

function logkey(e) {
    e.preventDefault()
    console.log(e)
}

const node=document.createElement('li')
const textnode=document.createTextNode('water')
node.appendChild(textnode)
node.className='myNode'
node.style.color = 'white'
document.getElementById('backgroundAnimation').appendChild(node)
console.log(node.className)