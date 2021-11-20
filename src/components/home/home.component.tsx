import React, { useEffect, useState } from 'react';
import MortgageCard from './mortgage-card.component';
import { getProducts } from '../../services/mortgage.api';

const Home = (): React.ReactElement => {
  const [products, setProducts] = useState('');

  useEffect(() => {
    getProducts().then((res) => setProducts(res.data));
  }, []);

  const groupArrayOfObjects = (list: any, key: string) => {
    return list.reduce(function (rv: any, x: any) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

  let sortedProducts;

  if (products.length) {
    sortedProducts = groupArrayOfObjects(products, 'type');
  }

  return (
    <section className='c-home'>
      <h3>Variable</h3>
      <div>
        {sortedProducts && (
          <MortgageCard product={sortedProducts['VARIABLE'][0]} />
        )}
      </div>
      <h3>Fixed</h3>
      <div>
        {sortedProducts && (
          <MortgageCard product={sortedProducts['FIXED'][0]} />
        )}
      </div>
    </section>
  );
};

export default Home;
