import React from 'react';
import Container from "react-bootstrap/Container";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useState} from 'react';
import AddExpensePage from './pages/AddExpensePage';
import AddDepositPage from './pages/AddDepositPage';
import EditExpensePage from './pages/EditExpensePage';





function App() {

  const [expenseToUpdate, setExpenseToUpdate] = useState();

  return (
  <Container  className="my-4" >
    {/* <h1>MoneyTracker</h1>
    <HomePage setExpenseToUpdate={expenseToUpdate}/> */}

    <Router>
        <div className="App-header">
          <h1>MoneyTracker</h1>
          <Routes>
            <Route path="/" exact element={<HomePage setExpenseToUpdate={setExpenseToUpdate} />}></Route>
            <Route path="/add-expense" element={<AddExpensePage />}></Route>
            <Route path="/add-deposit" element={<AddDepositPage />}></Route>
            <Route path="/edit-expense" element={<EditExpensePage expenseToUpdate={expenseToUpdate} />}></Route>
          </Routes>  
        </div>
      </Router>
  </Container>
  );
}


export default App;