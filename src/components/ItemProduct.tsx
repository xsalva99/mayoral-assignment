import Image from 'next/image';
import { Product } from 'pages';
import styles from '../css/itemProduct.module.css'; // IMPORTAMOS ESTILOS

// Con className
export const ItemProduct = ({ product }: { product: Product }) => {
  return (
    <li className={styles.item} key={product.id}>
      <div className={styles.image}>
        <Image src={product.image} alt={product.title} width={500} height={500} />
      </div>
      <h2 className={styles.title}>{product.title}</h2>
      <p className={styles.description}>{product.description}</p>
      <p className={styles.price}>{product.price}</p>
      <p className={styles.category}>{product.category}</p>
      <button onClick={() => console.log('Añadido: ', product.title)}>AÑADIR</button>
    </li>
  );
};
