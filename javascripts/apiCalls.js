async function fetchCatBreeds() {
    try {
        const response = await fetch("https://catfact.ninja/breeds")    
        const CatBreedData = await response.json();
        console.log(CatBreedData.data);
    } catch (error) {
        
    }
}

fetchCatBreeds();

fetch("https://catfact.ninja/breeds")
    .then(response => response.json())
    .then(CatBreedData => console.log(CatBreedData.data))
    .catch(error => console.log(error));