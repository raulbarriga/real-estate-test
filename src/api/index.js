import axios from "axios";

const url = "https://realty-in-us.p.rapidapi.com/properties/list-for-sale";



export const getForSale = async (city, state) => {
  const options = {
    //   method: "GET",
    //   url: url,
      params: {
        state_code: state,
        city: city,
        offset: "0",
        limit: "200",
        sort: "relevance",
      },
      headers: {
        "X-RapidAPI-Host": "realty-in-us.p.rapidapi.com",
        "X-RapidAPI-Key": process.env.REACT_APP_REALTY_API_KEY,
      },
    };

  try {
    const { data } = await axios.get(url, options);
    // console.log(data);
    // console.log(response.data);

    return data;
  } catch (error) {
    console.log(error.message);
  }
};
