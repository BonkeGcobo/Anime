//const BaseUrl ='https://nekos.best/api/v1/';

export const getImages = async(imageNum)=>{
    const response = await fetch(`https://nekos.best/api/v1/nekos`);
    return response.json();
}
