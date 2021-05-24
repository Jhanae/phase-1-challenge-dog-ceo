document.addEventListener('DOMContentLoaded', function(){
    getImage()
    // renderObj()
    dogBreed()
    
})

function getImage(){
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  return fetch(imgUrl)
    .then(response => response.json())
    .then(imageData => {
        imageData.message.forEach(image => renderObj(image))
})
}
function renderObj (picUrl) {
    const img = document.querySelector('#dog-image-container')
    const imageTag = document.createElement('img')
    imageTag.src = picUrl
    img.appendChild(imageTag)
       
}
function dogBreed(){
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(res => res.json())
    .then(elem => {
        breed = Object.keys(elem.message)
        getBreed(breed)
        //updateBreed(breed)
    })
}
function getBreed(elem){
    const container = document.querySelector('#dog-breeds')
    let dropdown = document.querySelector('select#breed-dropdown')
    dropdown.addEventListener('change', updateBreed(elem))
    elem.forEach(breed => {
    const list = document.createElement('li')
    list.id = "dog-breed"
    list.innerHTML = breed
    //console.log(list.value)
    list.addEventListener('click', clickColor)
    
    })
    }
function updateBreed(elem){
    let dropdown = document.querySelector('#breed-dropdown')
    const container = document.querySelector('#dog-breeds')
    let choice = dropdown.value    
    removeBreed()
    elem.filter(breed => {
        const list = document.createElement('li')
        const letter = breed.charAt(0)
        console.log(choice)
        if(choice === letter)
        {
            list.append(breed)
            container.append(list)
        }
    })
    
}
function removeBreed(){
    let parent = document.querySelector("#dog-breeds")
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function clickColor(e){
    e.target.style.color = 'red'
}

function deleteBreed(element){
    let lastChild = element.lastChild
    while(lastChild)
    {
        element.removeChild(lastChild)
        lastChild = element.lastElementChild
    }
    // let list = document.querySelector('li#dog-breed')
    // list.forEach(elem => {
    //     list.removeChild(lastChild)
    // })
}
