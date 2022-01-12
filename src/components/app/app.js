import React, { useState } from 'react';

import List from '../list';
import AddForm from '../add-form';
import ProductList from '../product-list';

import './app.css';

export default () => {
  const [items, setItems] = useState([
    { id: 1, label: 'Test 1', done: true },
    { id: 2, label: 'Test 2', done: false },
  ]);

  const onAddedTask = (label) => {
    let biggestId = 0;

    items.forEach((item) => {
      biggestId = item.id > biggestId ? item.id : biggestId;
    });

    setItems((items) => [
      ...items,
      { id: biggestId + 1, label: label, done: false },
    ]);
  };

  const onRemove = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const onToggleDone = (id) => {
    setItems((items) =>
      items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            done: !item.done,
          };
        }

        return {
          ...item,
        };
      })
    );
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>

      {items.length ? (
        <List items={items} onRemove={onRemove} onToggleDone={onToggleDone} />
      ) : (
        <span>Ничего не найдено</span>
      )}

      <AddForm onAddedTask={onAddedTask} />

      <ProductList />
    </div>
  );
};
