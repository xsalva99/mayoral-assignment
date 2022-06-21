import axios from 'axios';
import { ListProduct } from 'components/ListProduct';
import { SearchBar } from 'components/SearchBar';
import { SortProduct, SortProducts } from 'components/SortProducts';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}

const options = {
  method: 'GET',
  url: 'https://fakestoreapi.com/products',
};

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
  * //TODO: cambiar por un spinner
 */
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.request(options);
      if (products.length === 0) {
        setProducts(response.data);
        setData(response.data);
      }
      // if (data.length === 0) {
      // }
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  /** Se usa para filtrar los productos, en caso de llegar el string vacío mostraremos todos los products
   * Si no mostraremos el .filter
   */

  useEffect(() => {
    if (products.length === 0 || data.length === 0 || search === '') {
      fetchData();
    }
    const filteredData = products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase()),
    );
    setData(filteredData);
  }, [search]);

  useEffect(() => {
    const sortedData = data.sort((a, b) => {
      if (sort === SortProducts.ASC) {
        return a.price - b.price;
      }
      if (sort === SortProducts.DESC) {
        return b.price - a.price;
      }
      return 0;
    });
    setData(sortedData);
  }, [sort]);

  return (
    <div>
      <SearchBar search={search} setSearch={setSearch} />
      <SortProduct sort={sort} setSort={setSort} />
      {loading && <p>Loading...</p>}
      <ListProduct data={data}></ListProduct>
    </div>
  );
};

export default HomePage;
