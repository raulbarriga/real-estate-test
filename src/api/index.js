import axios from "axios";

const url = "https://realty-in-us.p.rapidapi.com/properties/list-for-sale";

const options = {
//   method: "GET",
//   url: url,
  params: {
    state_code: "CA",
    city: "Redwood City",
    offset: "0",
    limit: "200",
    sort: "relevance",
  },
  headers: {
    "X-RapidAPI-Host": "realty-in-us.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.REACT_APP_REALTY_API_KEY,
  },
};

export const getForSale = async () => {
  try {
    const { data } = await axios.get(url, options);
    // console.log(data);
    // console.log(response.data);

    return data;
  } catch (error) {
    console.log(error.message);
  }
};
