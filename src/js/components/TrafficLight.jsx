import React from "react";
import {useState} from "react";

const TrafficLight = () => {
    const [ color, setColor] = useState("red");
    const [showPurple, setShowPurple] = useState(false);

    const rotateColor = () => {
        setColor(prevColor => {
          if (prevColor === "red") return "yellow";
          if (prevColor === "yellow") return "green";
          return "red";
        });
      };
    
    const añadirPurple = () => {
        setShowPurple(!showPurple);
        if (color === "purple") setColor("red"); 
      };
 
     return (
         <div className = "general-box">
            <div className = "traffic-light">
                 <div onClick={() => setColor("red")} className={"light red" + (color === "red" ? " brillo" : "" )}></div>
                 <div onClick={() => setColor("yellow")} className={"light yellow" + (color === "yellow" ? " brillo" : "" )}></div>
                 <div onClick={() => setColor("green")} className={"light green" + (color === "green" ? " brillo" : "" )}></div>

                {showPurple && (
            <div onClick={() => setColor("purple")} className={`light purple ${color === "purple" ? "brillo" : ""}`}></div>
        )}
                </div>
            <div className="palo"></div>
            <button onClick={rotateColor} className="rotate-button"> Cambiar color
                </button>
            <button onClick={añadirPurple} className="purple-button">
                {showPurple ? "Quitar púrpura" : "Añadir púrpura"}
                </button>
         </div>
     );
 };


 export default TrafficLight;