import React, { Component } from "react";

export class MyColor extends Component {
   render() {
      const { kind, desc } = this.props;
      const my_style = { color: "#333333", fontSize: "22pt", fontWeight: "bold" };
      const p_style = { color: "#fe9601", fontSize: "20pt" };
      return (
         <div style={my_style}>
            <h1>MyColor.tsx</h1>
            <p style={p_style}>
               {kind} / {desc}
            </p>
         </div>
      );
   }
}

export default MyColor;
