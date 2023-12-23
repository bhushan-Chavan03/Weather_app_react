const baseURL="https://api.weatherapi.com/v1/current.json?key=b04affd1b27c4ccab8c141435232112"

export const getWeatherDataForCity =async (city)=>{
    const response=await fetch(`${baseURL}&q=${city}&aqi=yes`)
    // console.log(response);
    return await response.json();
};

export const getWeatherDataForLocation =async (lat,long)=>{
    const response=await fetch(`${baseURL}&q=${lat},${long}&aqi=yes`)
    // console.log(response);
    return await response.json();
};