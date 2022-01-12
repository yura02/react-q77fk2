import React from 'react';

const ListItem = ({ id, label, done, onRemove, onToggleDone }) => {
  return (
    <span>
      <span onClick={() => onToggleDone(id)}>{label}</span>
      <button type="button" onClick={() => onRemove(id)}>
        x
      </button>

      {done ? <span>Готово</span> : ''}
    </span>
  );
};

export default ListItem;
