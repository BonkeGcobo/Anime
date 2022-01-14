//const BaseUrl ='https://nekos.best/api/v1/';

export const getImages = async()=>{
    const response = await fetch(`https://nekos.best/api/v1/nekos`);
    return response.json();
}


export const getGifs = async()=>{
    const response = await fetch(`https://nekos.best/api/v1/dance`);
    return response.json();
}