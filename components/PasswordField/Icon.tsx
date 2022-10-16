// import * as React from "react";

// type Props = {
//   onClick: () => void;
//   onMouseOver: () => void;
//   onMouseOut: () => void;
//   className: string;
//   color: string;
// };

// const SvgComponent = (props: Props) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     xmlSpace="preserve"
//     width={460}
//     height={460}
//     {...props}
//     onClick={props.onClick}
//     onMouseOver={props.onMouseOver}
//     onMouseOut={props.onMouseOut}
//     // className={props.className}
//   >
//     <rect width="100%" height="100%" fill="none" />
//     <g className="currentLayer">
//       <title>{"Layer 1"}</title>
//       <g className="selected" fill="#a4ffaf">
//         <path d="M425.934-.826H171.662c-18.122 0-32.864 14.743-32.864 32.864v77.134h30V32.038a2.868 2.868 0 0 1 2.864-2.864h254.272a2.868 2.868 0 0 1 2.864 2.864V286.31a2.868 2.868 0 0 1-2.864 2.865h-74.729v30h74.729c18.121 0 32.864-14.743 32.864-32.865V32.038c-.001-18.121-14.743-32.864-32.864-32.864z" />
//         <path d="M288.339 139.172H34.068c-18.122 0-32.865 14.743-32.865 32.865v254.272c.001 18.122 14.743 32.865 32.865 32.865H288.34c18.122 0 32.865-14.743 32.865-32.864V172.037c.001-18.122-14.744-32.865-32.866-32.865zm.002 290.002H34.068a2.868 2.868 0 0 1-2.865-2.864V172.037a2.868 2.868 0 0 1 2.865-2.865H288.34a2.868 2.868 0 0 1 2.865 2.865V426.31h.001a2.868 2.868 0 0 1-2.865 2.864z" />
//       </g>
//     </g>
//   </svg>
// );

// export default SvgComponent;

import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={460}
    height={460}
    {...props}
  >
    <rect width="100%" height="100%" fill="none" />
    <g className="currentLayer">
      <title>{"Layer 1"}</title>
      <g className="selected" fill="#a4ffaf">
        <path d="M425.934-.826H171.662c-18.122 0-32.864 14.743-32.864 32.864v77.134h30V32.038a2.868 2.868 0 0 1 2.864-2.864h254.272a2.868 2.868 0 0 1 2.864 2.864V286.31a2.868 2.868 0 0 1-2.864 2.865h-74.729v30h74.729c18.121 0 32.864-14.743 32.864-32.865V32.038c-.001-18.121-14.743-32.864-32.864-32.864z" />
        <path d="M288.339 139.172H34.068c-18.122 0-32.865 14.743-32.865 32.865v254.272c.001 18.122 14.743 32.865 32.865 32.865H288.34c18.122 0 32.865-14.743 32.865-32.864V172.037c.001-18.122-14.744-32.865-32.866-32.865zm.002 290.002H34.068a2.868 2.868 0 0 1-2.865-2.864V172.037a2.868 2.868 0 0 1 2.865-2.865H288.34a2.868 2.868 0 0 1 2.865 2.865V426.31h.001a2.868 2.868 0 0 1-2.865 2.864z" />
      </g>
    </g>
  </svg>
);

export default SvgComponent;

