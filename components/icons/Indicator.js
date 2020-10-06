import * as React from "react";

function SvgIndicator(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 55 10" fill="none" {...props}>
      <circle cx={5} cy={5} r={5} fill="#F063B8" />
      <circle cx={22.5} cy={5.5} r={2.5} fill="#fff" />
      <circle cx={37.5} cy={5.5} r={2.5} fill="#fff" />
      <circle cx={52.5} cy={5.5} r={2.5} fill="#fff" />
    </svg>
  );
}

export default SvgIndicator;
