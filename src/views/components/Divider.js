import React from "react";

function Divider(props){
    return (
      <div className="container">
        <div className="border" />
        <span className="content">
          {props.value.text}
        </span>
        <div className="border" />
      </div>
    );
  };


export default Divider;