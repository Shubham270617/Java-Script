const URL = "https://api.thecatapi.com/v1/images/search?limit=10";



const getFacts = async () => {
    let response= await fetch(URL);
    console.log(response); //JSON formate
    let data = await response.json();
    console.log(data)
}