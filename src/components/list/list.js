import React from 'react';

import './list.css';

const List = ({ items }) => {
  const renderItems = () => {
    return items.map((item) => {
      const { id, label } = item;

      return <li key={id}>{label}</li>;
    });
  };

  return <ul>{renderItems()}</ul>;
};

export default List;
