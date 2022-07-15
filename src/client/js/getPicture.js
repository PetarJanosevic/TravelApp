// get the picture from the API
const getPicture = async (key, destination) => {
    destination = destination.split(' ').join('+');
    const response = await fetch(`https://pixabay.com/api/?key=${key}&q=${destination}&orientation=horizontal&image_type=photo`);
    try {
        const pictureData = await response.json()
        return pictureData
    } catch (error) {
        console.log("error", error);
    }
}


export { getPicture }