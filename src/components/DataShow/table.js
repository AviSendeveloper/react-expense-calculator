import Row from "./row";

const Table = (props) => {
    return (
        <div>
            <table className="result">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Total Savings</th>
                        <th>Interest (Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>

                {props.data.map(row => <Row key={row.year} data={row}/>)}
            </table>
        </div>
    );
};

export default Table;
