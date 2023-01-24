import React from 'react';
import logo from './logo.svg';
import './App.css';
import {MyButton, MyInput} from "ui-kit-test-npm-lesson";

function App() {
  return (
    <div className="App">
        <MyButton color={'red'} big>
            Кнопка
        </MyButton>
        <MyInput placeholder={'Введите текст'} big={true} label={"Инпут"}/>
    </div>
  );
}

export default App;
