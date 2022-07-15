/* Function to POST data about picture. */
const postPicture = async ( url = '', data = {})=>{
    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),    
  });
    try {
      const newCoordinates = await response.text();
      return newCoordinates;
    }catch(error) {
    console.log("error", error);
    }
}

export { postPicture }