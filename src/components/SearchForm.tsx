import { useState } from "react";
import "./SearchForm.css";

export declare interface SearchFormProps {
  onSubmit: (city: string) => void;
}

export const SearchForm = (props: SearchFormProps) => {
  const { onSubmit } = props;
  const [search, setSearch] = useState("");

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const city = data.get("search") as string;
    return onSubmit(city);
  };

  return (
    <div className="search-form">
      <form onSubmit={(event) => submitForm(event)}>
        <label htmlFor="search">City</label>
        <input
          name="search"
          type="text"
          value={search}
          placeholder="Enter your city"
          onChange={(event) => setSearch(event.target.value)}
        />
        <button name="submit">Search</button>
      </form>
    </div>
  );
};
