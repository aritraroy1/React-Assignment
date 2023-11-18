import { formatter } from "../util/investment";

export default function InvestmentResults({ annualData }) {

    return (
        <>
            <table id="result">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest(Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                <tbody>
                    {annualData.map((yearWiseInvestmentData) => (
                        <tr key={yearWiseInvestmentData.year}>
                            <td>{yearWiseInvestmentData.year}</td>
                            <td>{formatter.format(yearWiseInvestmentData.valueEndOfYear)}</td>
                            <td>{formatter.format(yearWiseInvestmentData.interest)}</td>
                            <td>{formatter.format(yearWiseInvestmentData.totalInterest)}</td>
                            <td>{formatter.format(yearWiseInvestmentData.investedCapital)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}