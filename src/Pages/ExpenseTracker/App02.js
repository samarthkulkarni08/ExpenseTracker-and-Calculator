import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import './App02.css';
import BackBtn from './components/BackBtn';
import { Link } from "react-router-dom";

function App02() {
  return (
    <>
      <Link to="/"><BackBtn/></Link>
      <Header />
      <GlobalProvider>
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </GlobalProvider>
    </>
  );
}

export default App02;
