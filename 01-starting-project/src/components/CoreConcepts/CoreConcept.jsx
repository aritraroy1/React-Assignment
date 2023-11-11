import componentsImg from '../../assets/components.png';
import jsxImg from '../../assets/jsx-ui.png';
import propsImg from '../../assets/config.png';
import stateImg from '../../assets/state-mgmt.png'
import "./CoreConcept.css";

export default function CoreConcept({ image, title, description }) {

    return (
        <li>
            <img src={image}></img>
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );

}