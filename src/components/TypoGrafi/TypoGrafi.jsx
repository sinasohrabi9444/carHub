import React from "react";
import "./Typografi.css";
import { TypeAnimation } from "react-type-animation";


export default function TypoGrafi({data}) {
  return (
    <div className="typo ">
      <TypeAnimation
        sequence={data}
        wrapper="span"
        speed={50}
        style={{ fontSize: "2em", display: "inline-block" }}
        repeat={Infinity}
      />
    </div>
  );
}
