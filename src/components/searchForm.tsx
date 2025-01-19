import React from "react";
import Form from "next/form";
import SearchFormRest from "../components/searchFormRest";

interface SearchFormProps {
  query: string; // Expect `query` as a string prop
}

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="Search Startups"
      />
      <div className="flex gap-2">{query && <SearchFormRest />}</div>
      <button type="submit" className="reset-button">
        Search
      </button>
    </Form>
  );
};

export default SearchForm;
