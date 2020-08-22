import React from 'react';
import DefaultLayout from './layout/DefaultLayout';
import CardGroup from './CardGroup/index';
import './App.css';
import db from './db/db.json';

function App() {
  return (
    <div className="App">
      <DefaultLayout header="Ты сегодня покормил кота?">
          <CardGroup data={db.data} />
      </DefaultLayout>
    </div>
  );
}

export default App;
