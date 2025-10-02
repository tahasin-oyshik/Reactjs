import DataFetch from './components/HOOKS/CustomHooks/DataFetch';

const App = () => {
  return (
    <div>
      <DataFetch />
    </div>
  );
};

export default App;

// 👍 Quick Flow
// 1. DataFetch() runs -> calls useFetch(url).
// 2. useFetch initializes state and return (data=null, isLoading=true, error=null).
// 3. First render: "Todos" + loading message (useEffect not run yet).
// 4. After render commit: useEffect runs -> fetch -> updates state, then return data=todos, isLoading=false, error=null
// 5. Re-render: isLoading=false, data filled -> "Todos" + todo list.

/* ----------------Full Execution Flow (DataFetch + useFetch) ----------------

 ⚡ Important: useEffect does NOT run during render.
 It only runs AFTER React commits the render to the DOM.

 ---------------- First Render ----------------

 1. React calls DataFetch()

 2. Inside DataFetch -> useFetch(url) is called
    - Initializes state with useState:
        data = null
        isLoading = true
        error = null
    - Registers useEffect for later (does not run yet).
    - Returns { data:null, isLoading:true, error:null } to DataFetch.

 3. DataFetch prepares variables:
    - loadingMessage, errorMessage, todosElement
    - todosElement = null (because data=null)

 4. DataFetch returns JSX:
    <h2>Todos</h2>         -> always rendered
    {error && ...}         -> null (error not set)
    {isLoading && ...}     -> shows loading <p>
    {todosElement}         -> null (data not ready)

 5. React commits this render to the DOM.
    -> You now see "Todos" + "todos is loading…"

 ---------------- After Commit ----------------

 6. useEffect (from useFetch) runs:
    - Triggers fetch(url)
    - On success -> setData(data), setIsLoading(false), setError(null)
    - On failure -> setError(error.message), setIsLoading(false)

 ---------------- Re-render ----------------

 7. State updates trigger a re-render of DataFetch
    - useFetch returns updated values:
        data = [todos array]
        isLoading = false
        error = null

 8. DataFetch prepares variables again:
    - loadingMessage ignored (isLoading=false)
    - errorMessage ignored (error=null)
    - todosElement = list of <p>{todo.title}</p>

 9. DataFetch returns JSX again:
    <h2>Todos</h2>         -> stays
    {error && ...}         -> null
    {isLoading && ...}     -> nothing
    {todosElement}         -> renders todo list

 10. React commits new render to DOM
     -> You now see "Todos" + full todo list

 ----------------------------------------------------------------------
 📝 Summary:
 - First render: shows header + loading
 - useEffect runs AFTER commit -> fetches data
 - Re-render: shows header + todos
 ----------------------------------------------------------------------
*/
