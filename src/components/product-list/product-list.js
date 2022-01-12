import React, { useState, useEffect } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://vue-study.skillbox.cc/api/products')
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.items);
      });
  }, []);

  const renderProducts = () => {
    return products.map((product) => <li key={product.id}>{product.title}</li>);
  };

  return (
    <section>
      <h3>ProductList</h3>
      <ul>{renderProducts()}</ul>
    </section>
  );
};

export default ProductList;
