import React from "react";

const SearchBox = ({ searchText, setSearchText, search }) => {

  

  return (
    <div className="input-group">
      <input
        type="text"
        name="text"
        value={searchText}
        className="form-control"
        placeholder="City, State"
      />
      <div className="input-group-append">
        <button
          onClick={() => search()}
          className="btn btn-secondary"
          type="button"
        >
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
