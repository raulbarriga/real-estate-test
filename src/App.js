import React, { useState, useEffect } from "react";

import { getForSale } from "./api/index";
import Listings from "./components/Listings";
import Pagination from "./components/Pagination";
import SearchBox from "./components/SearchBox";

const App = () => {
  const [propertiesForSale, setPropertiesForSale] = useState([]);
  const [dataLength, setDataLength] = useState(0);
  // only show 10 properties per page
  const [propertiesPerPage, setPropertiesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");

  // useEffect(() => {
  //   fetchForSale();
  // }, []);

  const fetchForSale = (city, state) => {
    getForSale(city, state)
      .then((data) => {
        setPropertiesForSale(data.listings);
        setDataLength(data.listings.length);
      })
      .catch((err) => console.log(err.message));
  };
  console.log("propertiesForSale: ", propertiesForSale);
  console.log("dataLength: ", dataLength);

  // get current properties
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = propertiesForSale.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );

  // change pagination page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const submitHandler = (e) => {
    e.preventDefault();
    // var lowerCase = e.target.value.toLowerCase();
    // setSearchText(lowerCase)

    // const str = "Redwood City, CA";

    const str = searchText.split(",");
    const city = str[0];
    const state = str[1].replace(/\s/g, "");
    fetchForSale(city, state); //receive(city, state)
    setCurrentPage(1);
    console.log(city);
    console.log(state);
  };

    console.log("searchText: ", searchText);

  return (
    <>
      {/* <SearchBox
        searchText={searchText}
        setSearchText={setSearchText}
        onChange={handleChange}
        // fetchForSale={fetchForSale}
      /> */}
      <form onSubmit={submitHandler}>
        <div className="form-group input-group w-25 m-3">
        {/* <div className="col-xs-4"> */}
          <input
          name="text"
          type="search"
          // value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="form-control"
          placeholder="City, State"
        />
        <div className="input-group-append">
          <button
            className="btn btn-primary"
            type="submit"
          >
            Search
            {/* <i className="fa fa-search"></i> */}
          </button>
        </div>
        {/* </div> */}
      </div>
      </form>
      
      <Listings
        currentProperties={currentProperties}
        propertiesPerPage={propertiesPerPage}
      />
      {/* {propertiesPerPage < items.length && (
        <div className="btn-container">
          <button onClick={loadMore}>Load More</button>
        </div>
      )} */}
      <Pagination
        propertiesPerPage={propertiesPerPage}
        dataLength={dataLength}
        currentPage={currentPage}
        paginate={paginate}
      />
    </>
  );
};

export default App;
