import Todo from "../todo/Todo";
import "./todoList.css";

function TodoList({
  todos,
  removeTodo,
  completeTodo,
  toggleEditMode,
  editTodo,
  editTodoId,
  onChange,
  onSubmit,
}) {
  const renderTodos = () => {
    if (todos.length > 0) {
      return todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
            toggleEditMode={toggleEditMode}
            editTodo={editTodo}
            editTodoId={editTodoId}
            onChange={onChange}
            onSubmit={onSubmit}
          />
        );
      });
    }
    return <p className="errMessage">There are no todos</p>;
  };
  return <div className="todolist-container">{renderTodos()}</div>;
}

export default TodoList;
