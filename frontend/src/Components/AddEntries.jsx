import React, { useState } from 'react';
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
    return ( 
        <div>
            <form>
                <label>Habit</label>
                <input type='number' value={habit} onChange={(event) => setHabit(event.target.value)}/>
                <label>Date</label>
                <input type='date' value={date} onChange={(event) => setDate(event.target.value)}/>
                <label>Amount</label>
                <input type='number' value={amount} onChange={(event) => setAmount(event.target.value)}/>
            </form>
        </div>
     );
}
 
export default AddEntries;