import React from 'react';
import logo from './logo.svg';
import LoginForm from './LoginForm'
import './App.css';
import UserProfileForm from './UserProfileForm';
import FuelQuoteForm from './FuelQuoteForm';
import FuelQuoteHistoryForm from './FuelQuoteHistoryForm';

function App() {
  return (
    <div className="App">
      <div className="container">
        <LoginForm/>
        <UserProfileForm/>
        <FuelQuoteForm/>
        <FuelQuoteHistoryForm/>
      </div>
    </div>
  );
}

export default App;
