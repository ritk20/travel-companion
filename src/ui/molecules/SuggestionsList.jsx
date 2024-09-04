import React from "react";
import ListItem from "../atoms/ListItem";

const SuggestionsList = ({ suggestions, onSelectSuggestion }) => {
  return (
    <ul className="absolute bg-white border border-gray-300 rounded-md mt-1 w-full max-h-60 overflow-y-auto shadow-lg z-10">
      {suggestions.map((suggestion, index) => (
        <ListItem
          key={index}
          onClick={() => onSelectSuggestion(suggestion.name)}
        >
          <div className="flex justify-between items-center p-2 hover:bg-gray-100">
            <span>{suggestion.name}</span>
            <span className="text-gray-500 text-sm">
              {suggestion.travelCity}, {suggestion.travelCountry}
            </span>
          </div>
        </ListItem>
      ))}
    </ul>
  );
};

export default SuggestionsList;
