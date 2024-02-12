import axios from "axios";

// Get Api
export const myApi = async (endpoint, query) => {
  let link = "https://newsapi.org/v2";
  let apiKey = "&apiKey=8305bf3c2b134f3ea706f4c482890234";
  try {
    const response = await axios.get(link + endpoint + query + apiKey);
    const data = response.data;
    return data;
    // console.log(data);
  } catch (error) {
    console.error("Error : ", error.response?.data || error.message || error);
  }
};
