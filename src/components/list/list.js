import React from 'react';

import ListItem from '../list-item';

import './list.css';

const List = ({ items, onRemove, onToggleDone }) => {
  const renderItems = () => {
    return items.map((item) => {
      const { id, label } = item;

      return (
        <li key={id}>
          <ListItem {...item} onRemove={onRemove} onToggleDone={onToggleDone} />
        </li>
      );
    });
  };

  return <ul>{renderItems()}</ul>;
};

export default List;
