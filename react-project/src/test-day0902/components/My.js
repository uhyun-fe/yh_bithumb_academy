// rcredux (class 형태)
// rfcredux (const component 형태)

import React from "react";
import { connect } from "react-redux";

export const My = (props) => {
   return <div></div>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(My);
