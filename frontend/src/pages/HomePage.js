import ExpenseList from '../components/ExpenseList';
import { useState, useEffect} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/esm/Stack';

function Homepage({setExpenseToUpdate}) {
    const [expenses, setExpenses] = useState([{'id': 1, 'category': 'House', 'amount' : 900,},
    {'id': 2,'category': 'Salary', 'amount' : 2000,},
    {'id': 3,'category': 'Movies', 'amount' : 22,},
    {'id': 4,'category': 'Eating Out', 'amount' : 60,},]);

    const navigate = useNavigate()

    const onDelete = async (_id) => {
        const response = await fetch(`/expenses/${_id}`, {method: 'DELETE'});
        
        if (response.status === 204) {
            const newExpenses = expenses.filter(expense => expense._id !== _id);
            setExpenses(newExpenses)
        } else {
            console.error('Failed to delete expense with _id =  , status code = ');
        }
    }

    const onEdit = (expense) => {
        setExpenseToUpdate(expense);
        navigate('/edit-expense');
    }
        
    

    const loadExpenses = async () => {
        // const response = await fetch('/expenses');
        // const data = await response.json();
        // setExpenses(data);
        setExpenses(expenses)
    }

    useEffect( () => {
        loadExpenses()
    }, []);

    return (
        <>
            <ExpenseList expenses = {expenses} onDelete={onDelete} onEdit={onEdit}></ExpenseList>
            <Stack direction="horizontal" gap="2" className="my-4">
                <Link to='/add-deposit'><Button variant="success">Add Deposit</Button> </Link>
                <Link to='/add-expense'><Button variant="danger">Add Expense</Button> </Link> 
            </Stack>
        </>
    );
}

export default Homepage;