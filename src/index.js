import './style.css';
import { getGifs, getImages } from './fetchApi';
import { clone } from 'lodash';

const dispArea = document.querySelector('.displaySect');


const forGifs = document.querySelector(".gifsTag");
const forImage = document.querySelector(".imageTag");

let AnimePics = [];
let AnimeGifs = [];
const genArray = async () =>{

  for(let i=0; i<20; i++){
    AnimePics[i] = await getImages();
    console.log(AnimePics[i].artist_name);
  }
  return AnimePics;
}

const genArrayGifs = async () =>{

  for(let i=0; i<20; i++){
    AnimeGifs[i] = await getGifs();
   // console.log(AnimePics[i].artist_name);
  }
  return AnimeGifs;
}

const displayImages = async() =>{
  dispArea.innerHTML = '';
  let imageArray = await genArray();
  imageArray.forEach(animeImage => {
    const imageSect = `<div class='image'>
       <h3 class='artist'>${animeImage.artist_name}</h3>
       <img class="theImage" width=80% height=65% src= ${animeImage.url}>
       <div class="userInteract">
       
        <div class="comments">
         <i class="fa fa-comments" aria-hidden="true"></i>
        </div>

        <div class="Likes">
          <i class="fas fa-heart"></i>
          <span class="likeText">Likes</span>
        </div>
          
       </div>
    </div>`;

    dispArea.insertAdjacentHTML('beforeend',imageSect);
  });
}
//displayImages();

const displayGifs = async() =>{
  dispArea.innerHTML = '';
  let imgGifs = await genArrayGifs();
  imgGifs.forEach(animeImage => {
    const imageSect = `<div class='image'>
       <h3 class='artist'>${animeImage.anime_name}</h3>
       <img class="theImage" width=80% height=65% src= ${animeImage.url}>
       <div class="userInteract">
       
        <div class="comments">
         <i class="fa fa-comments" aria-hidden="true"></i>
        </div>

        <div class="Likes">
          <i class="fas fa-heart"></i>
          <span class="likeText">Likes</span>
        </div>
          
       </div>
    </div>`;

    dispArea.insertAdjacentHTML('beforeend',imageSect);
  });
}

forGifs.addEventListener('click',()=>{
    displayGifs();
});

forImage.addEventListener('click',()=>{
  displayImages();
});
displayImages();