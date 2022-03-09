let imageJuniper = document.querySelector('#card-image-Juniper')
let imageJesse = document.querySelector('#card-image-Jesse')
document.addEventListener('DOMContentLoaded', ()=> {
// Promise.all([
// fetch('https://dog.ceo/api/breeds/image/random'),
// fetch('https://dog.ceo/api/breeds/image/random'),
// fetch('https://dog.ceo/api/breeds/image/random'),
// fetch('https://dog.ceo/api/breeds/image/random'),
// fetch('https://dog.ceo/api/breeds/image/random'),
// fetch('https://dog.ceo/api/breeds/image/random'),
// ])
fetch('https://dog.ceo/api/breeds/image/random')
.then((resp) => resp.json())
.then((data) => {
    // const response1 = resp[0].message
    // const response2 = resp[1].message
    // const response3 = resp[2].message
    // const response4 = resp[3].message
    // const response5 = resp[4].message
    // const response6 = resp[5].message

        Object.entries(data).forEach((obj) => {
            getImagesJuniper(data)
        // getImagesJuniper(response1);
        // getImagesJesse(response2);
}); 
        })
    
    });





function getImagesJuniper(item){
    imageJuniper.src = item.message;
}
function getImagesJesse(item){
    imageJesse.src = item.message;
}
