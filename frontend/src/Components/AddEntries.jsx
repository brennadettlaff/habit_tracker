import React, { useState } from 'react';
import axios from 'axios';

const AddEntries = () => {
    const [habit, setHabit] = useState(0);
    const [date, setDate] = useState('');
    const [amount, setAmount] = useState(0);

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            habit: habit,
            date: date,
            amount: amount,
        }
        console.log(newEntry)
    }

    async function addNewEntry(newEntry) {
        let response = await axios.post('http://127.0.0.1:8000/api/entry/get/', newEntry)

    }

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <label>Habit</label>
                <input type='number' value={habit} onChange={(event) => setHabit(event.target.value)}/>
                <label>Date</label>
                <input type='date' value={date} onChange={(event) => setDate(event.target.value)}/>
                <label>Amount</label>
                <input type='number' value={amount} onChange={(event) => setAmount(event.target.value)}/>
                <button type='submit'>Add</button>
            </form>
        </div>
     );
}
 
export default AddEntries;