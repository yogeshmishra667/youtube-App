import React, { useState } from "react";

const SearchBar = props => {
  const [term, setTerm] = useState("");

  function onInputChange(event) {
    setTerm(event.target.value);
  }

  function onFormSubmit(event) {
    event.preventDefault();

    //TODo : make sure we call
    //callback from parent component
    this.props.onFormSubmit(term);
  }

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Video Search </label>
          <input type="text" value={term} onChange={onInputChange} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
