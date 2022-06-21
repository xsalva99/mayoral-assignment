import { ItemProduct } from 'components/ItemProduct';
import { Product } from 'pages';
import styles from '../css/listProduct.module.css';

export const ListProduct = ({ data }: { data: Product[] }) => {
  return (
    <ul className={styles.grid}>
      {data.map((product, index) => (
        <ItemProduct product={product} key={index}></ItemProduct>
      ))}
    </ul>
  );
};
