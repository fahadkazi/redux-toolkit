import React, { useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from './containers/Users/usersSlice'

const App = () => {
  const dispacth = useDispatch()
  const { users } = useSelector(state => state.users)
  useEffect(() => {
    dispacth(getUsers())
  }, [dispacth])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {users && users.map((user, i) => <h1 key={i}>{user.name}</h1>)}
      </header>
    </div>
  );
}

export default App;
