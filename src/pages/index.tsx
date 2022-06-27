// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { ListProduct } from 'components/ListProduct';
import { SearchBar } from 'components/SearchBar';
import { SortProduct, SortProducts } from 'components/SortProducts';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import styles from '../css/index.module.css';

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  discount?: string;
}

export interface Rating {
  rate: number;
  count: number;
}

const HomePage: NextPage = () => {
  //TODO la primera llamada HTTP se hace 2 veces

  /** Son los productos que se estan mostrando */
  const [data, setData] = useState<Product[]>([]);
  /** Son los productos totales (recibidos y guardados en la primera llamada) */
  const [products, setProducts] = useState<Product[]>([]);
  /**  Se usa para el SearchBar, recibimos el string del input para filtrar*/
  const [search, setSearch] = useState('');
  /** Se usa para ordenar, por precio ascendente o descendente
   * Depende de lo que estemos mostrando cambia el icono
   */
  const [sort, setSort] = useState(SortProducts.ASC);
  /**
   *Indicamos que estan cargando los datos para mostrar un texto
   */
  const [loading, setLoading] = useState<boolean>(false);

  function sortProducts(data: Product[], sort: SortProducts) {
    switch (sort) {
      case SortProducts.ASC:
        return data.sort((a, b) => a.price - b.price);
      case SortProducts.DESC:
        return data.sort((a, b) => b.price - a.price);
      default:
        return data;
    }
  }

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      const list = sortProducts(data, sort);

      setData(list);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (search === '') {
      fetchData();
    }

    const filteredData = products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase()),
    );

    setData([...filteredData]);
  }, [search]);

  useEffect(() => {
    const sortedData = sortProducts(products, sort);
    setData([...sortedData]);
  }, [sort]);

  return (
    <div className={styles.app}>
      <header className={styles.search_container}>
        <SearchBar search={search} setSearch={setSearch} />
        <SortProduct sort={sort} setSort={setSort} />
      </header>
      {loading && <p>Loading...</p>}
      {data.length !== 0 ? (
        <ListProduct
          data={data.map((product, index) => {
            if (index % 2 === 0) {
              return { ...product, discount: (product.price * 1.2).toFixed(2) };
            }
            return { ...product };
          })}
        ></ListProduct>
      ) : (
        <div>No hay productos disponibles</div>
      )}
    </div>
  );
};

export default HomePage;
