import { Link } from "react-router-dom";

const Content = () => {
    return ( 
        <div className="Content">
            <h1>Want to know if you are healthy now?</h1>
            <p className="para">NEVER LATE THAN EVER! Click on the button below and know if you are healthy or not. Make the change today!</p>
            <Link to="/bmi"><button className="b1">Click here to know your BMI</button></Link>
        </div>
     );
}
 
export default Content;