let imageJuniper = document.querySelector('#card-image-Juniper')
let imageJesse = document.querySelector('#card-image-Jesse')
let imageJessup = document.querySelector('#card-image-Jessup')
let imageRain= document.querySelector('#card-image-Rain')
let imageIris= document.querySelector('#card-image-Iris')
let imageFern = document.querySelector('#card-image-Fern')
let likesJuniper = document.querySelector('#like-button-Juniper')
let likeCountJuniper = document.querySelector('#like-count-Juniper')
let likesJesse = document.querySelector('#like-button-Jesse')
let likeCountJesse = document.querySelector('#like-count-Jesse')
let likesFern = document.querySelector('#like-button-Fern')
let likeCountFern = document.querySelector('#like-count-Fern')
let likesJessup = document.querySelector('#like-button-Jessup')
let likeCountJessup = document.querySelector('#like-count-Jessup')
let likesRain = document.querySelector('#like-button-Rain')
let likeCountRain = document.querySelector('#like-count-Rain')
let likesIris = document.querySelector('#like-button-Iris')
let likeCountIris = document.querySelector('#like-count-Iris')
let commentsJuniper = document.querySelector('#details-Juniper')
let commentsJesse = document.querySelector('#details-Jesse')
let commentsFern = document.querySelector('#details-Fern')
let commentsJessup = document.querySelector('#details-Jessup')
let commentsRain = document.querySelector('#details-Rain')
let commentsIris = document.querySelector('#details-Iris')


document.addEventListener('DOMContentLoaded', ()=> {
fetch('https://dog.ceo/api/breeds/image/random')
.then((resp) => resp.json())
.then((data) => { 
Object.entries(data).forEach((obj) => {
getImagesJuniper(data)  
}); 
}) 
    });
function getImagesJuniper(item){
    imageJuniper.src = item.message;  
}
const accumulateLikes = (likeButton, likeCount) => {
let count = 0;
likeButton.addEventListener("click", function(){
count += 1;
likeCount.innerText = count + " " + "likes";
likeButton.style.color = "gold"
});
}
accumulateLikes(likesJuniper, likeCountJuniper);
accumulateLikes(likesJesse,likeCountJesse);
accumulateLikes(likesJessup,likeCountJessup);
accumulateLikes(likesFern,likeCountFern);
accumulateLikes(likesRain,likeCountRain);
accumulateLikes(likesIris,likeCountIris);

const clickMe = (image, detailSection, string ) => {
    image.addEventListener("click", () => {
        let description = document.createElement('p');
description.innerText = string
detailSection.append(description)
    })
}

clickMe(imageJuniper, commentsJuniper, 'Hi, I am the featured pup at the moment! Adopt me today!')
clickMe(imageJesse, commentsJesse, 'Hi my name is Jesse. I may be big, but I am one sweet lady!')
clickMe(imageFern, commentsFern, 'Hi my name is Fern, and I am as goofy as they come!')
clickMe(imageJessup, commentsJessup, 'Hi, my name is Jessup, and I am as sweet as I am cute!')
clickMe(imageRain, commentsRain, 'Hi, my name is Rain, and cuddling is my favorite!')
clickMe(imageIris, commentsIris, 'Hi my name is Iris, and I am very chill and loving.')
