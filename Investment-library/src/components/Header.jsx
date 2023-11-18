import investmentCalcImg from '../assets/investment-calculator-logo.png';

export default function Header() {

    return (
        <>
            <section id="header">
                <img src={investmentCalcImg} alt="Investment Image" />
                <h1>React Investment Calculator</h1>
            </section>
        </>);

}