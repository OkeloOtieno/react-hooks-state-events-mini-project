import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
 const [tasks, setTasks] = useState(TASKS);
 const [selectedCategory, setSelectedCategory] = useState("All");

 const handleCategoryChange = (category) => {
    setSelectedCategory(category);
 };

 const filteredTasks = selectedCategory === "All" ? tasks : tasks.filter(task => task.category === selectedCategory);

 const handleDelete = (text) => {
   setTasks(tasks => tasks.filter(task => task.text !== text));
};


 return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onCategoryChange={handleCategoryChange} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={(newTask) => setTasks([...tasks, newTask])} />
      <TaskList tasks={filteredTasks} onDelete={handleDelete}/>
    </div>
 );
}

export default App;
