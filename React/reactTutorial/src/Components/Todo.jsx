// import React, { useState } from 'react';
// // import './App.css';

// function Apps() {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const [todos, setTodos] = useState([]);

//   const handleAddTodo = (e) => {
//     e.preventDefault();
//     if (!title.trim() || !content.trim()) return;

//     const newTodo = {
//       id: Date.now(),
//       title,
//       content,
//       isDone: false,
//     };
//     setTodos([newTodo, ...todos]);
//     setTitle('');
//     setContent('');
//   };

//   const handleDelete = (id) => {
//     setTodos(todos.filter(todo => todo.id !== id));
//   };

//   const handleToggle = (id) => {
//     setTodos(
//       todos.map(todo =>
//         todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
//       )
//     );
//   };

//   const workingTodos = todos.filter(todo => !todo.isDone);
//   const doneTodos = todos.filter(todo => todo.isDone);

//   return (
//     <div className="app">
//       <h1>📝 My Todo List</h1>

//       <form className="todo-form" onSubmit={handleAddTodo}>
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Content"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//         />
//         <button type="submit">Add</button>
//       </form>

//       <h2>🔥 Working</h2>
//       <div className="todo-list">
//         {workingTodos.map(todo => (
//           <div className="todo-item" key={todo.id}>
//             <h3>{todo.title}</h3>
//             <p>{todo.content}</p>
//             <button onClick={() => handleDelete(todo.id)}>Delete</button>
//             <button onClick={() => handleToggle(todo.id)}>Done</button>
//           </div>
//         ))}
//       </div>

//       <h2>✅ Done</h2>
//       <div className="todo-list">
//         {doneTodos.map(todo => (
//           <div className="todo-item" key={todo.id}>
//             <h3>{todo.title}</h3>
//             <p>{todo.content}</p>
//             <button onClick={() => handleDelete(todo.id)}>Delete</button>
//             <button onClick={() => handleToggle(todo.id)}>Canceled</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Apps;
