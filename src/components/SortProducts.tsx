import { MdNorth, MdSouth } from 'react-icons/md';
export enum SortProducts {
  ASC = 'Ascendent',
  DESC = 'Descendent',
}

export const SortProduct = ({ sort, setSort }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setSort(sort === SortProducts.ASC ? SortProducts.DESC : SortProducts.ASC);
  }
  
  return (
    <div className="sort-products">
      <button onClick={handleClick}>
        {sort === SortProducts.ASC ? <MdSouth /> : <MdNorth />}
      </button>
    </div>
  );
};

