import * as React from 'react';

export const CatererIcon = ({
  height = 'auto',
  width = '20',
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 19 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path d="M0.00423908 19.3294H18.9958V0.337885H0.00423908V19.3294Z" fill="url(#pattern0)" />
    <defs>
      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image0_1432_89888" transform="scale(0.015625)" />
      </pattern>
      <image
        id="image0_1432_89888"
        width="64"
        height="64"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);
