import React from "react";
import Autosuggest from "react-autosuggest";
import { dataGlosario } from "../dataGlosario";
import { Link } from "react-router-dom";
import "../styles/Search.css"

const getSuggestions = (value) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : dataGlosario.filter(
        (search) => search.term.toLowerCase().slice(0, inputLength) === inputValue
      );
};

const getSuggestionValue = (suggestion) => suggestion.term;

const renderSuggestion = (suggestion) => <div><Link to={`/que-es/${suggestion.urlName}`} style={{textDecoration: 'none', color:'#999999'}}> {suggestion.term} </Link></div>;

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      suggestions: [],
    };
  }
  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });
  };
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),
    });
  };
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Ej. automation",
      value,
      onChange: this.onChange,
    };
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
      
    );
  }
}
export default Search;
