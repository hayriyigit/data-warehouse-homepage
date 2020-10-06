import * as React from "react";

function SvgFacebook(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 50 50" fill="none" {...props}>
      <circle opacity={0.1} cx={25} cy={25} r={25} fill="#212353" />
      <path
        d="M26.37 35.488V25.243h2.834l.376-3.53h-3.21l.005-1.768c0-.92.087-1.414 1.413-1.414h1.772V15h-2.835c-3.405 0-4.603 1.713-4.603 4.593v2.12H20v3.53h2.122v10.245h4.248z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgFacebook;
