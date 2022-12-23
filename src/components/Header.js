import React from "react";

const Header = (props) => {
  return (
    <div className="jumbotron">
      <h1 className="display-1">
        {" "}
        <i class="fa fa-cutlery foodicon" aria-hidden="true"></i>
        Food Recipe App
      </h1>
      <div class="input-group w-50 mx-auto pt-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search your recipe"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={props.search}
          onChange={props.onInptChange}
        />
        <div>
          <span class="ml-5">
          <button type="button" class="btn btn-success" onClick={props.onSearch}>Search</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
