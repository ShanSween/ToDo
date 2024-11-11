function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    }        
  ])
const addTodo = value => {
  const newTodos = [...todos, {text:value, isCompleted: false}];
  setTodos(newTodos);
}

const removeTodo = e => {
  const index = Number(e.target.id);
  let temp = [...todos];
  temp.splice(index,1);
  setTodos(temp);
}

return(
    <>
      {todos.map((todo, i) => <div className = "todo" id={i}  onClick={removeTodo} key={i}>{todo.text}</div>)}
      <TodoForm addTodo={addTodo}/>
    </>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
