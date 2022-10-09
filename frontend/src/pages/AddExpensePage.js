import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {useState} from 'react'

function AddExpensePage() {

    const [category, setCategory] = useState('house');
    const [amount, setAmount] = useState(0);

    const navigate = useNavigate();

    const addExpense = async () => {
        const newExpense = {category, amount};
        const response = await fetch('/expenses', {
            method: 'POST',
            body: JSON.stringify(newExpense),
            headers: {'Content-type':'application/json'}
        });
        if(response.status === 201) {
            alert('Successfully added the expense');
        } else {
            alert('Failed to add expense');
        }
        navigate('/')
    }

    return (
        
        <div>
            <h1>Add Expense</h1>
            <select value={category} onChange={e => setCategory(e.target.value)}>
                <option value ="salary">Salary</option>
                <option value ="house">House</option>
                <option value ="car">Car</option>
                <option value ="food">Food</option>
                <option value ="transportation">Transportation</option>
                <option value ="eating_out">Eating Out</option>
                <option value ="health">Health</option>
                <option value ="pets">Pets</option>
                <option value ="phone">Phone</option>
            </select>
            <input
                type="number"
                step="any"
                value = {amount}
                onChange={e => setAmount(e.target.value)}
            />
            <Button variant='primary' onClick={addExpense}>Add Expense</Button>
        </div>

    )
}
 export default AddExpensePage;