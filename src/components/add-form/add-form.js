import React, { useState } from 'react';

import './add-form.css';

const AddForm = ({ onAddedTask }) => {
  const [label, setLabel] = useState('');

  const onChangeInput = (e) => {
    setLabel(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    if (label) {
      onAddedTask(label);
      setLabel('');
    }
  };

  return (
    <form onSubmit={onSubmitForm}>
      <input type="text" value={label} onChange={onChangeInput} />

      <button type="submit">Добавить</button>
    </form>
  );
};

export default AddForm;
