const Row = (props) => {
    return (
        <tbody>
            <tr>
                <td>{props.data.year}</td>
                <td>{props.data.currentSaving}</td>
                <td>{props.data.yearlyInterest}</td>
                <td>{props.data.totalInterest}</td>
                <td>{props.data.yearlyContribution}</td>
            </tr>
        </tbody>
    );
};

export default Row;
