import * as React from "react";

function SvgRightArrow(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 22 16" fill="none" {...props}>
      <path
        d="M15 15l6-7-6-7M21 8H1"
        stroke={props.stroke ? props.stroke : "#9C69E2"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgRightArrow;
