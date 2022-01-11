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
       <img class="theImage" width=80% height=65% src= ${animeImage.url}>
       <h3 class='artist'>${animeImage.artist_name}</h3>
    </div>`;

    dispArea.insertAdjacentHTML('beforeend',imageSect);
  });
}
displayImages();