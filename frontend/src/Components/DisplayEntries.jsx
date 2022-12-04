const DisplayEntries = () => {
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