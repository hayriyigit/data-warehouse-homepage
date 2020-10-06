import * as React from "react";

function SvgMessage(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 60 60" fill="none" {...props}>
      <circle opacity={0.2} cx={30} cy={30} r={30} fill="#9C69E2" />
      <path
        d="M15 26c0-5.523 4.477-10 10-10h10c5.523 0 10 4.477 10 10v4c0 5.523-4.477 10-10 10H15V26z"
        fill="#9C69E2"
      />
      <circle cx={24} cy={28} r={2} fill="#fff" />
      <circle cx={30} cy={28} r={2} fill="#fff" />
      <circle cx={36} cy={28} r={2} fill="#fff" />
      <path
        d="M25 39H15v2.468c0 1.554 1.696 2.514 3.029 1.715L25 39z"
        fill="#9C69E2"
      />
    </svg>
  );
}

export default SvgMessage;
