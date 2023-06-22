import React, { useState } from "react";

const From = (props) => {
    const [userInput, setUserInput] = useState({
        currentSaving: "",
        yearlyContribution: "",
        expectedReturn: "",
        duration: "",
    });

    const inputChangeHandler = (value, type) => {
        if (type === "currentSaving") {
            setUserInput((prevState) => {
                return { ...prevState, currentSaving: value };
            });
        } else if (type === "yearlyContribution") {
            setUserInput((prevState) => {
                return { ...prevState, yearlyContribution: value };
            });
        } else if (type === "expectedReturn") {
            setUserInput((prevState) => {
                return { ...prevState, expectedReturn: value };
            });
        } else if (type === "duration") {
            setUserInput((prevState) => {
                return { ...prevState, duration: value };
            });
        }
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();

        const formData = {
            currentSaving: Number(userInput.currentSaving),
            yearlyContribution: Number(userInput.yearlyContribution),
            expectedReturn: Number(userInput.expectedReturn),
            duration: Number(userInput.duration),
        };

        // reset form data
        // resetForm();

        props.onClickCalculation(formData);
    };

    const resetForm = () => {
        setUserInput({
            currentSaving: "",
            yearlyContribution: "",
            expectedReturn: "",
            duration: "",
        });
    };

    return (
        <div>
            <form className="form" onSubmit={formSubmitHandler}>
                <div className="input-group">
                    <p>
                        <label htmlFor="current-savings">
                            Current Savings ($)
                        </label>
                        <input
                            type="number"
                            id="current-savings"
                            onChange={(event) => {
                                inputChangeHandler(
                                    event.target.value,
                                    "currentSaving"
                                );
                            }}
                            value={userInput.currentSaving}
                        />
                    </p>
                    <p>
                        <label htmlFor="yearly-contribution">
                            Yearly Savings ($)
                        </label>
                        <input
                            type="number"
                            id="yearly-contribution"
                            onChange={(event) => {
                                inputChangeHandler(
                                    event.target.value,
                                    "yearlyContribution"
                                );
                            }}
                            value={userInput.yearlyContribution}
                        />
                    </p>
                </div>
                <div className="input-group">
                    <p>
                        <label htmlFor="expected-return">
                            Expected Interest (%, per year)
                        </label>
                        <input
                            type="number"
                            id="expected-return"
                            onChange={(event) => {
                                inputChangeHandler(
                                    event.target.value,
                                    "expectedReturn"
                                );
                            }}
                            value={userInput.expectedReturn}
                        />
                    </p>
                    <p>
                        <label htmlFor="duration">
                            Investment Duration (years)
                        </label>
                        <input
                            type="number"
                            id="duration"
                            onChange={(event) => {
                                inputChangeHandler(
                                    event.target.value,
                                    "duration"
                                );
                            }}
                            value={userInput.duration}
                        />
                    </p>
                </div>
                <p className="actions">
                    <button
                        type="reset"
                        className="buttonAlt"
                        onClick={resetForm}>
                        Reset
                    </button>
                    <button type="submit" className="button">
                        Calculate
                    </button>
                </p>
            </form>
        </div>
    );
};

export default From;
