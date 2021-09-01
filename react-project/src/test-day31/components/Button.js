import React from "react";
import classNames from "classnames";

import "../css/Button.scss";

function Button({ children, size, color, outline, fullWidth }) {
   return <button className={classNames("Button", size, color, { outline, fullWidth })}>{children}</button>;
}

Button.defaultProps = {
   size: "medium",
   color: "blue",
};

export default Button;
