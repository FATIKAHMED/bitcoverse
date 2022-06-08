import "./prices.css";
import bitcoin from "../../assets/bit.png";

function Prices() {
    return (
        <div className="prices">
            <div className="container">
                <Price />
                <Price />
                <Price />
                <Price />
                <Price />
            </div>
        </div>
    )
}

function Price() {
    return (
        <div className="price">
            <img src={bitcoin} alt="a"/>
            <p>Bitcoin (BC) #325.19 75.1%</p>
        </div>
    )
}

export default Prices;