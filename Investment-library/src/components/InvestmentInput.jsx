export default function InvestmentInput({ onChange, investmentData }) {

    return (
        <section id="user-input">
            <div className="input-group">
                <label htmlFor="initialInvestment">Initial Investment
                    <input
                        type="number"
                        value={investmentData.initialInvestment}
                        name="initialInvestment"
                        id="initialInvestment"
                        onChange={onChange}
                    />
                </label>
                <label htmlFor="annualInvestment">Annual Investment
                    <input
                        type="number"
                        value={investmentData.annualInvestment}
                        name="annualInvestment"
                        id="annualInvestment"
                        onChange={onChange}
                    />
                </label>
            </div>
            <br></br>
            <div className="input-group">
                <label htmlFor="expectedReturn">Expected Return
                    <input
                        type="number"
                        value={investmentData.expectedReturn}
                        name="expectedReturn"
                        id="expectedReturn"
                        onChange={onChange}
                    />
                </label>
                <label htmlFor="duration">Duration
                    <input
                        type="number"
                        value={investmentData.duration}
                        name="duration"
                        id="duration"
                        onChange={onChange}
                    />
                </label>
            </div>
        </section>
    );
}