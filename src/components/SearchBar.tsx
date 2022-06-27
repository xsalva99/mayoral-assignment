import styles from '../css/searchBar.module.css';

export const SearchBar = ({ search,setSearch }) => {


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className={styles.search}>
      <input className={styles.search__input}type="text" value={search} onChange={handleChange} />
    </div>
  );
};
