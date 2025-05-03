import css from "./SearchBox.module.css";

const SearchBox = ({ filterValue, setFilterValue }) => {
  return (
    <div className={css.searchBox}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        type="text"
        id="search"
        name="input"
        value={filterValue}
        onChange={(e) => setFilterValue(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
