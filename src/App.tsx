import React from 'react';
import { JobFilter } from './components/JobFilter.tsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Поиск вакансий</h1>
      </header>
      <main>
        <JobFilter />
      </main>
    </div>
  );
}

export default App; 