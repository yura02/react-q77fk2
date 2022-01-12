import React, { useState } from 'react';

import List from '../list';
import AddForm from '../add-form';

import './app.css';

export default () => {
  const [items, setItems] = useState([
    { id: 1, label: 'Test 1' },
    { id: 2, label: 'Test 2' },
  ]);

  const onAddedTask = (label) => {
    let biggestId = 0;

    items.forEach((item) => {
      biggestId = item.id > biggestId ? item.id : biggestId;
    });

    setItems([...items, { id: biggestId + 1, label: label }]);
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>

      <List items={items} />

      <AddForm onAddedTask={onAddedTask} />
    </div>
  );
};
