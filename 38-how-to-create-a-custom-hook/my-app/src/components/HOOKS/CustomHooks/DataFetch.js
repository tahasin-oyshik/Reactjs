import useFetch from './useFetch';

const DataFetch = () => {
  const { data, isLoading, error } = useFetch('https://jsonplaceholder.typicode.com/todos');

  const loadingMessage = <p>todos is loading</p>;
  const errorMessage = <p>{error}</p>;

  const todosElement =
    data &&
    data.map((todo) => {
      return <p key={todo.id}>{todo.title}</p>;
    });

  return (
    <div>
      <h2>Todos</h2>
      {error && errorMessage}
      {isLoading && loadingMessage}
      {todosElement}
    </div>
  );
};

export default DataFetch;
