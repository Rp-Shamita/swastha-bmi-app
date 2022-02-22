import { useState } from "react";

const Bmi = () => {

    const [height, setHeight] = useState('');
    const [weight,setWeight] = useState('');
    var [bmi,setBmi] = useState();
    var [bmistate, setBmistate] = useState('');
    var [type, setType] = useState('choose metric type');
    var [range, setRange] = useState();
    const [flag, setFlag] = useState(false);
    var x, y;

    const handleSubmit = (e) => {
        e.preventDefault();
        setFlag(true);
        const w = weight;
        if(type==="cm"){
            const h = height/100;
            const b = (w/(h*h)).toFixed(2);
            bmi=b;
            setBmi("The bmi is:- "+bmi);
            x = (18*h*h).toFixed(2);
            y = (25*h*h).toFixed(2);
            setRange("Normal weight range is: "+x+" to "+y);
        }
        else if(type==="feet"){
            const h = height/3.2808;
            const b = (w/(h*h)).toFixed(2);
            bmi=b;
            setBmi("The bmi is:-"+bmi);
            x = (18*h*h).toFixed(2);
            y = (25*h*h).toFixed(2);
            setRange("Normal weight range is: "+x+" to "+y);
        }
        if(bmi<18){
            bmistate="Oops! Underweight! Check out your normal range";
            setBmistate(bmistate);
        }
        else if(bmi>=18 && bmi<25){
            setBmistate("Normal range, You doing good!");
        }
        else if(bmi>=25 && bmi<30){
            setBmistate("Overweight! Check out your normal range...");
        }
        else{
            setBmistate("oops!Obese!! Check out your normal range...");
        }
    }

    return ( 
        <div className="bmi">
            <h1>Know and control your Heart Health numbers!!</h1>
            <h3>Enter the following details:- </h3>
            <div className="box-cont">
            <form>
                <label>Enter height:- </label>
                <input type="radio" value="cm" id="cm" onChange={() => setType("cm")} name="type" />
                <label for="cm">cm</label>
                <input type="radio" value="feet" id="feet" onChange={() => setType("feet")} name="type" />
                <label for="feet">feet</label>
                <input type="number" required value={height} placeholder={type} onChange={(e) => setHeight(e.target.value)} disabled={type==="choose metric type" && true}/><br/>
                <label>Enter the weight:- </label>
                <input type="number" required value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="in kg"  disabled={type==="choose metric type" && true} /><br/>
                <button className="enter" onClick={handleSubmit} disabled={(type==="choose metric type" || height==='' || weight==='') && true}>Enter</button>
            </form>
            </div>
            { flag && <div className="bmilabel">
            <label style={{fontWeight: "bold", fontSize: "24px", color: "green"}}>{bmi}</label><br/>
            <label>{bmistate}</label><br/>
            <label>{range}</label><br/>
            </div>}
        </div>
     );
}
 
export default Bmi;