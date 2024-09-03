import React from "react";
import ListItem from "../atoms/ListItem";

const SuggestionsList = ({ suggestions, onSelectSuggestion }) => {
  return (
    <ul>
      {suggestions.map((suggestion, index) => (
        <ListItem key={index} onClick={() => onSelectSuggestion(suggestion)}>
          {suggestion}
        </ListItem>
      ))}
    </ul>
  );
};

export default SuggestionsList;
