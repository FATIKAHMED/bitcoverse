import "./choseUs.css";
import img3 from "../../assets/1.gif";
import img2 from "../../assets/2.gif";
import img1 from "../../assets/3.gif";

function ChoseUs() {
    return (
        <div className="chose-us">
            <div className="container">
                <div className="top">
                    <h1>Why Choose Us</h1>
                    <p className="text-small">Lorem Ipsum is simply dummy text of the printing typesetting industry. & Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
                <div className="bottom">
                    <Reason link={img1} text="Our Vision"/>
                    <Reason link={img2} text="Our Mission"/>
                    <Reason link={img3} text="Our Execution"/>
                </div>
            </div>
        </div>
    )
}

function Reason({link, text}) {
    return (
        <div className="reason">
            <img src={link} alt="reson"/>
            <h3>{text}</h3>
            <p className="text-small">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type & scrambled it to make a type specimen book.</p>
        </div>
    )
}

export default ChoseUs;