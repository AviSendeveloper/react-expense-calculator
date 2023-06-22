import { useState } from "react";
import Form from "./components/form";
import Table from "./components/DataShow/table";
import Header from "./components/header";
import logo from "./assets/investment-calculator-logo.png";
import "./index.css";

const App = () => {
    const [resultData, setResultData] = useState(null);

    const calculationHandler = (formData) => {
        let yearlyData = [];
        let currentSaving = formData.currentSaving;
        const yearlyContribution = formData.yearlyContribution;
        const expectedReturn = formData.expectedReturn / 100;
        const duration = formData.duration;
    
        let totalInterest = 0
        for (let i = 0; i < duration; i++) {
            const yearlyInterest = currentSaving * expectedReturn;
            totalInterest += yearlyInterest;
            currentSaving += yearlyInterest + yearlyContribution;
            
            yearlyData.push({
                year: i + 1,
                currentSaving: currentSaving,
                yearlyInterest: yearlyInterest,
                totalInterest: totalInterest,
                yearlyContribution: yearlyContribution
            });
        }
        console.log('yearlyData: ', yearlyData);

        setResultData(yearlyData);
    };

    return (
        <div>
            <Header logo={logo} />

            <Form onClickCalculation={calculationHandler} />

            {resultData === null && "No Data found"}
            {(resultData !== null && resultData.length > 0) && <Table data={resultData}/>}
        </div>
    );
};

export default App;
