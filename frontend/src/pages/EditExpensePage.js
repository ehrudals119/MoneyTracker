import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';

function EditExpensePage({expenseToUpdate}) {

    
    const [category, setCategory] = useState(expenseToUpdate.category);
    const [amount, setAmount] = useState(expenseToUpdate.amount);

    const navigate = useNavigate();

    const updateExpense = async () => {
        const updatedExpense = {category, amount};
        const response = await fetch(`/expenses/${expenseToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify(updatedExpense),
            headers: {'Content-type' : 'application/json'}
        });
        if(response.status === 200){
            alert("Successfully updated the exercise");
        } else {
            alert(`Failed to update exercise`);
        }
        navigate('/');
    }

    return (
        <div>
            <h1>Edit Expense</h1>
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
            <Button variant='primary' onClick={updateExpense}>Update Expense</Button>
        </div>
    )
}
 export default EditExpensePage;