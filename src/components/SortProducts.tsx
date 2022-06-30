import { MdNorth, MdSouth } from 'react-icons/md';
import styles from '../css/sortProduct.module.css';

export enum SortProducts {
  ASC = 'Ascendent',
  DESC = 'Descendent',
}

export const SortProduct = ({ sort, setSort }) => {
  
  const handleClick = (e) => {
    e.preventDefault();
    setSort(sort === SortProducts.ASC ? SortProducts.DESC : SortProducts.ASC);
  };

  return (
    <div className={styles.sort}>
      <button onClick={handleClick} className={styles.sort__button}>
        {sort === SortProducts.ASC ? <MdSouth /> : <MdNorth />}
      </button>
    </div>
  );
};
