"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.length > 1) {
        const res = await fetch(`/api/users/searchOther?query=${query}`);
        const data = await res.json();
        setSuggestions(data);
      } else {
        setSuggestions([]);
      }
    };

    fetchSuggestions();
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?query=${query}`);
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <form onSubmit={handleSearch} className="flex">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by city or country..."
          className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
        >
          Search
        </button>
      </form>
      {suggestions.length > 0 && (
        <ul className="absolute left-0 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-48 overflow-y-auto z-10">
          {suggestions.slice(0, 3).map((suggestion, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-100 cursor-pointer text-black"
              onClick={() =>
                router.push(
                  `/search?query=${
                    suggestion.travelCity || suggestion.travelCountry
                  }`
                )
              }
            >
              {suggestion.name} - {suggestion.travelCity},{" "}
              {suggestion.travelCountry}
            </li>
          ))}
          {suggestions.length > 3 && (
            <li
              className="p-2 hover:bg-gray-100 cursor-pointer text-blue-500"
              onClick={() => router.push(`/search?query=${query}`)}
            >
              View all results
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
