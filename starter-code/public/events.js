
let arrLetters = ['s','c','l','z']
let arrAnimals = ['/croco.jpg','/gorilla.webp','/lion.jpg','/lizard.jpeg']
let arrBool = [{car:true,rep:true},{car:false,rep:false},{car:true,rep:false},{car:false,rep:true}]


let btn = document.getElementById('btnSearch')

btn.onclick = () => {
    let id = 0
    let car = false
    let rep = false
    let theName = document.getElementById('yourName').value
    console.log(theName)
    for(let i=0; i<theName.length; i++){
        if (theName[i] === 'r')
        {
            car = true
        }
        if (arrLetters.includes(theName[i]))
        {
            rep = true
        }
    }
    console.log({car:car,rep:rep})
    console.log(arrBool[1])
    for(let i=0; i<3; i++){id = arrBool.findIndex(obj => (obj.car===car)&&(obj.rep===rep))}
    console.log(id)
    let doc = document.querySelector('.centerblock')
    doc.innerHTML += `<div>Your tatem animal is:</div><a href="/photo"><img class="photo" src="/images${arrAnimals[id]}"></img></a>`
}
