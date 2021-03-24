import React, { cloneElement } from "react";

//componente funcional
export default (props) => {
  return (
    <div>
      {
        props.children.map((child, i) => {
          return cloneElement(child, { ...props, key: i });
        })
      }
    </div>
  );
};