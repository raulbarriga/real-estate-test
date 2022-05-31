import React, { useState, useEffect } from "react";

import { getForSale } from "./api/index";
import Listings from "./components/Listings";

const App = () => {
  const [dataForSale, setDataForSale] = useState([]);
  const [dataLength, setDataLength] = useState(0);
  const [visibleItems, setVisibleItems] = useState(10);
  
  
  const ITEMS_PER_PAGE = 10; // only show 10 items per page

  const totalPages = Math.ceil(dataLength / ITEMS_PER_PAGE);

  useEffect(() => {
    fetchForSale();
  }, []);

  const fetchForSale = () => {
    getForSale()
      .then((data) => {
        setDataForSale(data.listings);
        setDataLength(data.listings.length);
      })
      .catch((err) => console.log(err.message));
  };
  console.log("propForSale: ", dataForSale);
  console.log("dataLength: ", dataLength);
    
  return (
    <>
    <Listings dataForSale={dataForSale} visibleItems={visibleItems} />
      {/* {visibleItems < items.length && (
        <div className="btn-container">
          <button onClick={loadMore}>Load More</button>
        </div>
      )} */}

    </>
  );
};

export default App;
