import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Expense from './Expense'


function ExpenseList({expenses}) {
    return (
    <ListGroup>
      {expenses.map((expense, i) => <Expense expense={expense} key={i}></Expense>)}
    </ListGroup>
    )
}

export default ExpenseList;