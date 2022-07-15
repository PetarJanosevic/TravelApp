// get the pixabay API key from server js
const getPixabayKey = async () => {
    const response = await fetch('http://localhost:8800/pixabay-api-key');
    try {
        const apiKEY = await response.text()
        return apiKEY
    } catch (error) {
        console.log("error", error);
    }
}


export { getPixabayKey }