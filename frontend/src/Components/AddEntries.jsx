import React, { useState } from 'react';
const AddEntries = () => {
    const [habit, setHabit] = useState(0);
    const [date, setDate] = useState('');
    const [amount, setAmount] = useState(0);

    return ( 
        <div>
            <form>
                <label>Habit</label>
                <input type='number' value={habit} />
                <label>Date</label>
                <input type='date' value={date} />
                <label>Amount</label>
                <input type='number' value={amount} />
            </form>
        </div>
     );
}
 
export default AddEntries;