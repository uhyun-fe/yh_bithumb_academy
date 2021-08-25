import React, { Component } from "react";

export class MyColor extends Component {
   render() {
      const { kind, desc } = this.props;
      const my_style: object = { color: "#333333", fontSize: "24pt", fontWeight: "bold" };
      return <div style={my_style}>MyColor.tsx</div>;
   }
}

export default MyColor;
