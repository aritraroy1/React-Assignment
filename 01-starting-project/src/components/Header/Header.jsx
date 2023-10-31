import reactImage from '../../assets/react-core-concepts.png';
import "./Header.css";

export default function Header() {

    const reactDescription = ["Fundamemtal", "Core", "Crucial"];

    function getRandomInt(max) {

        return Math.floor(Math.random() * (max + 1));

    }
    return (
        < header >
            <img src={reactImage} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {reactDescription[getRandomInt(2)]} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header >
    );
}
