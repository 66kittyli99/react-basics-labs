import './App.css';
import Task from './components/Task';

function App() {
  const [ taskState, setTaskState ] = useState({
    tasks: [
      { title:"Dishes", description: "Empty dishwasher", deadline: "Today" },
      { title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow" },
      { title: "Tidy up", deadline: "Today" }
    ]
  });

  return (
    <div className="container">

      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" description= "Empty Dishwasher"/>


      <Task title="Laundry" deadline="Tomorrow" description="Fold laundry and put it away" />
        <Task title="Tidy" deadline="Today" />

        import React, { useState } from 'react';


    </div>
  );
}

export default App;

