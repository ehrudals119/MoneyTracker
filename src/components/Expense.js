import React from 'react';
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import {MdModeEdit, MdDelete} from 'react-icons/md';
import Stack from 'react-bootstrap/Stack';


function Expense({expense}) {
    return (
        <ListGroupItem>
            <Stack direction='horizontal' gap='3'>
                {expense.category} ${expense.amount} <MdModeEdit /> <MdDelete/>
            </Stack>
            
        </ListGroupItem>
    );
}

export default Expense;