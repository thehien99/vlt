import React from 'react';
import './App.css';  // Import file CSS
import { MoveImage } from './MoveImage';

const App = () => {
  return (
    <div className="background-motion">
      <div>
        <MoveImage />
      </div>
    </div>
  );
};

export default App;
