import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "../ExpensesFilter/ExpenseFilter";

function Expenses(props) {

    const [selectedYear, setSelectedYear] = useState('');
    const expensesFilterHandler = (year) => {

        console.log("Selected Year==" + year);
        setSelectedYear(year);


    }

    return (
        <Card className="expenses">
            <ExpensesFilter onFilterExpense={expensesFilterHandler} />
            <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date} />
            <ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date} />
            <ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date} />
            <ExpenseItem title={props.expenses[3].title} amount={props.expenses[3].amount} date={props.expenses[3].date} />
        </Card>
    );

}

export default Expenses