
import { useState } from 'react';
import Header from './components/Header';
import InvestmentInput from './components/InvestmentInput';
import { calculateInvestmentResults } from './util/investment';
import InvestmentResults from './components/InvestmentResults';

const INITIAL_INVESMENT = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0
}

function App() {

  const [investment, setInvestment] = useState(INITIAL_INVESMENT);
  let annualData = calculateInvestmentResults(investment);

  function recalculateInvestment(event) {
    setInvestment(prevInvestment => {
      return {
        ...prevInvestment,
        [event.target.name]: Number(event.target.value)
      };
    })

  }

  return (
    <>
      <Header />
      <InvestmentInput
        onChange={recalculateInvestment}
        investmentData={investment}
      />
      <InvestmentResults
        annualData={annualData}
      />
    </>
  )
}

export default App
