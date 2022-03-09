const imageJuniper = document.querySelector('#card-image-Juniper')

document.addEventListener('DOM Content Loaded', ()=> {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => console.log(data));
    data.forEach((obj) =>{
        getImages(obj);  
    })
})

function getImages(obj){
    imageJuniper.src = obj.message;

}

