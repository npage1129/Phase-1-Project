let imageJuniper = document.querySelector('#card-image-Juniper')
let imageJesse = document.querySelector('#card-image-Jesse')
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
function accumulateLikes(likeButton, likeCount){
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



