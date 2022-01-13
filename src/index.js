import './style.css';
import { getImages } from './fetchApi';
import { clone } from 'lodash';

const dispArea = document.querySelector('.displaySect');

let AnimePics = [];

const genArray = async () =>{

  for(let i=0; i<20; i++){
    AnimePics[i] = await getImages();
    console.log(AnimePics[i].artist_name);
  }
  return AnimePics;
}

const displayImages = async() =>{
  dispArea.innerHTML = '';
  let imageArray = await genArray();
  imageArray.forEach(animeImage => {
    const imageSect = `<div class='image'>
       <h3 class='artist'>${animeImage.artist_name}</h3>
       <img class="theImage" width=80% height=65% src= ${animeImage.url}>
       <div class="userInteract">
          <button class="comments">Comment
          </button>

          <div class="Likes">
          <i class="fas fa-heart"></i>;
          </div>
          
       </div>
    </div>`;

    dispArea.insertAdjacentHTML('beforeend',imageSect);
  });
}
displayImages();