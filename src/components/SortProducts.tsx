import { MdNorth, MdSouth } from 'react-icons/md';
export enum SortProducts {
  ASC = 'Ascendent',
  DESC = 'Descendent',
}

export const SortProduct = ({ sort, setSort }) => {
  if (sort === SortProducts.ASC) {
    return (
      <div>
        <button onClick={() => setSort(SortProducts.DESC)}>
          <MdNorth />
        </button>
      </div>
    );
  }

  if (sort === SortProducts.DESC) {
    return (
      <div>
        <button onClick={() => setSort(SortProducts.ASC)}>
          <MdSouth />
        </button>
      </div>
    );
  }
};
