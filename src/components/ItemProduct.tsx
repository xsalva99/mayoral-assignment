import Image from 'next/image';
import { Product } from 'pages';
import styles from '../css/itemProduct.module.css';

export const ItemProduct = ({ product }: { product: Product }) => {
  const discount = product.discount ? <p className={styles.discount}>{product.discount}</p> : null;

  return (
    <li className={styles.item} key={product.id}>
      <div className={styles.headerContainer}>
        <div className={styles.image}>
          <Image src={product.image} alt={product.title} width={250} height={250} />
        </div>
        <h2 className={styles.title}>{product.title}</h2>
      </div>

      <div className={styles.priceContainer}>
        <p className={styles.price}>{product.price}</p>
        {discount}
      </div>

      <button className={styles.addButton} onClick={() => console.log('Añadido: ', product.title)}>
        AÑADIR
      </button>
    </li>
  );
};
