import style from './todo.module.css';

const Todo = ({ id, todo, onRemoveItem }) => {
  const { title, desc } = todo;

  const handleClick = (id) => {
    onRemoveItem(id);
  };

  return (
    <article className={style.todo}>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <div>
        <button
          className={style.btn}
          onClick={() => {
            handleClick(id);
          }}
        >
          <i className="fa fa-trash fa-2x"></i>
        </button>
      </div>
    </article>
  );
};

export default Todo;
