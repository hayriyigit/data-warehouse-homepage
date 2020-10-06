import * as React from "react";

function SvgLeftArrow(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 42 16" fill="none" {...props}>
      <path
        d="M7 1L1 8l6 7M1 8h40"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgLeftArrow;
