import * as React from "react";

function SvgLogo(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 49 35" fill="none" {...props}>
      <rect y={15} width={20} height={20} rx={10} fill="#9C69E2" />
      <rect x={29} width={20} height={35} rx={10} fill="#F063B8" />
    </svg>
  );
}

export default SvgLogo;
