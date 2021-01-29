import React from 'react';
import style from './App.module.css';

function App() {
  return (
    <div className={style.card}>
      <div className={style['card--container']}>
        <h4 className={style['card--title']}>ChitChat</h4>
        <p className={style['card--text']}>You have a new message!</p>
      </div>
    </div>
  )
}

export default App;