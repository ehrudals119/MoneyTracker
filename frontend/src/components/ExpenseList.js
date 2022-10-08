import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Expense from './Expense'


function ExpenseList({expenses, onDelete, onEdit}) {
    return (
    <ListGroup>
      {expenses.map((expense, i) => <Expense expense={expense}  onDelete={onDelete} onEdit={onEdit} key={i}></Expense>)}
    </ListGroup>
    )
}

export default ExpenseList;