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

function accumulateLikesJuniper(){
    let count = 0;
    likesJuniper.addEventListener("click", function () {
count += 1;
likeCountJuniper.innerText = count + " " + "likes";

});

}
accumulateLikesJuniper()

function accumulateLikesJesse(){
    let count = 0;
    likesJesse.addEventListener("click", function () {
count += 1;
likeCountJesse.innerText = count + " " + "likes";

});

}
accumulateLikesJesse()

function accumulateLikesFern(){
    let count = 0;
    likesFern.addEventListener("click", function () {
count += 1;
likeCountFern.innerText = count + " " + "likes";

});

}
accumulateLikesFern()

function accumulateLikesJessup(){
    let count = 0;
    likesJessup.addEventListener("click", function () {
count += 1;
likeCountJessup.innerText = count + " " + "likes";

});

}
accumulateLikesJessup()

function accumulateLikesRain(){
    let count = 0;
    likesRain.addEventListener("click", function () {
count += 1;
likeCountRain.innerText = count + " " + "likes";

});

}
accumulateLikesRain()

function accumulateLikesIris(){
    let count = 0;
    likesIris.addEventListener("click", function () {
count += 1;
likeCountIris.innerText = count + " " + "likes";

});

}
accumulateLikesIris()
changeColorJuniper()

function changeColorJuniper(){
likesJuniper.addEventListener("click", function(){
likesJuniper.style.color = "gold";
})
}
changeColorJesse()

function changeColorJesse(){
likesJesse.addEventListener("click", function () {
likesJesse.style.color = "gold";

})
}
changeColorFern()
function changeColorFern(){
    likesFern.addEventListener("click", function () {
    likesFern.style.color = "gold";
    
    })
    }
    changeColorJessup()
    function changeColorJessup(){
        likesJessup.addEventListener("click", function () {
        likesJessup.style.color = "gold";
        
        })
        }
        changeColorRain()
        function changeColorRain(){
            likesRain.addEventListener("click", function () {
            likesRain.style.color = "gold";
            
            })
            }
            changeColorIris()
        function changeColorIris(){
            likesIris.addEventListener("click", function () {
            likesIris.style.color = "gold";
            
            })
            }