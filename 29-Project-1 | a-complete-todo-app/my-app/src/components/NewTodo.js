import { useState } from 'react';
import style from './newtodo.module.css';

const EMPTY_TODO = { title: '', desc: '' };

const NewTodo = ({ onAddTodo }) => {
  const [form, setForm] = useState(EMPTY_TODO);
  const { title, desc } = form;

  const handleFieldChange = (e) => {
    const name = e.target.name;
    setForm((previousForm) => {
      return { ...previousForm, [name]: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo(form);
    setForm(EMPTY_TODO);
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style['form-field']}>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          placeholder="Enter todo title"
          onChange={handleFieldChange}
        />
      </div>
      <div className={style['form-field']}>
        <label htmlFor="desc">Desc: </label>
        <textarea
          type="text"
          id="desc"
          name="desc"
          value={desc}
          placeholder="Enter todo description"
          onChange={handleFieldChange}
        />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
