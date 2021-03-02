console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

document.addEventListener("DOMContentLoaded", contentLoaded)

function contentLoaded() {
    const imgDiv = document.getElementById("dog-image-container")
    fetch(imgUrl)
.then(function(response) {
  return response.json();
})
.then(function(json){
const dogImageURLArray = json.message 
dogImageURLArray.forEach(url => {
    let dogImage = document.createElement("img");
    dogImage.src = url;
    imgDiv.append(dogImage);
});
})
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const dogList = document.getElementById("dog-breeds")

fetch(breedUrl)
.then(function(response) {
  return response.json();
})
.then(function(json){
const breedURLArray = json.message 
console.log(typeof breedURLArray);
for (const property in breedURLArray) {
    console.log(`${property}: ${object[property]}`);
  }
})
}





