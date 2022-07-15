/* function to post the weather onto the website */
const postWeather = async ( url = '', data = {})=>{
    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),    
  });
    try {
      const newWeather = await response.json();
      return newWeather;
    }catch(error) {
    console.log("error", error);
    }
}

export { postWeather }