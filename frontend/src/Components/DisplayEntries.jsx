import React, {useState, useEffect} from "react";
import axios from "axios";

const DisplayEntries = () => {
    const [entries, setEntries] = useState([])

    useEffect(() => {
        getEntries();
    }, [])

    async function getEntries(){
        let response = await axios.get('http://127.0.0.1:8000/api/entry/view/1/')
        setEntries(response.data)
        console.log("Test", response.data)
    }

    return ( 
        <div>
            <table>
                <thead>
                <tr>
                    <th>Habit</th>
                    <th>Date</th>
                    <th>Amount</th>
                </tr>
                </thead>
                <tbody>
                {entries.map((entry, index) => {
                    return (
                    <tr>
                        <td>{entry.habit}</td>
                        <td>{entry.date}</td>
                        <td>{entry.amount}</td>
                    </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
     );
}
 
export default DisplayEntries;