// This file is part of MinIO Design System
// Copyright (c) 2024 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import * as React from "react";
import { SVGProps } from "react";

const UsbIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    className={`min-icon`}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.495 1.50497C14.6824 1.69245 14.7479 1.96977 14.6641 2.22131L13.9974 4.22131C13.9207 4.45146 13.7303 4.62548 13.4941 4.68122C13.258 4.73696 13.0099 4.66647 12.8383 4.49492L12.6667 4.32323L7.91228 9.07761L9.8314 9.84525L11.3704 8.30628C11.2434 8.04529 11.2882 7.72174 11.505 7.50497L12.1717 6.8383C12.445 6.56494 12.8883 6.56494 13.1616 6.8383L13.8283 7.50497C14.1017 7.77834 14.1017 8.22155 13.8283 8.49492L13.1616 9.16159C12.9449 9.37835 12.6213 9.42323 12.3603 9.29623L10.495 11.1616C10.297 11.3596 10 11.4205 9.74002 11.3165L6.83524 10.1546L5.17259 11.8173C5.16531 11.8249 5.15785 11.8324 5.15021 11.8397L3.99189 12.998C4.01895 13.1053 4.03332 13.2176 4.03332 13.3333C4.03332 14.0881 3.42144 14.6999 2.66665 14.6999C1.91187 14.6999 1.29999 14.0881 1.29999 13.3333C1.29999 12.5785 1.91187 11.9666 2.66665 11.9666C2.78234 11.9666 2.89466 11.981 3.00194 12.008L3.8453 11.1647L2.68339 8.25992C2.58005 8.00158 2.63953 7.70656 2.8349 7.50844L5.33459 4.97354C5.31195 4.87488 5.29999 4.77214 5.29999 4.66661C5.29999 3.91182 5.91187 3.29995 6.66665 3.29995C7.42144 3.29995 8.03332 3.91182 8.03332 4.66661C8.03332 5.4214 7.42144 6.03328 6.66665 6.03328C6.54102 6.03328 6.41934 6.01633 6.30379 5.98458L4.15338 8.16528L4.92233 10.0877L6.16029 8.8497C6.16757 8.84208 6.17501 8.83463 6.18261 8.82738L11.6767 3.33328L11.505 3.16159C11.3335 2.99004 11.263 2.7419 11.3187 2.50579C11.3745 2.26967 11.5485 2.07925 11.7786 2.00253L13.7786 1.33587C14.0302 1.25202 14.3075 1.31749 14.495 1.50497ZM6.6786 4.63548C6.68825 4.63919 6.69575 4.64726 6.69867 4.65729C6.69216 4.64991 6.68547 4.64264 6.6786 4.63548Z"
      fill="currentColor"
    />
  </svg>
);
export default UsbIcon;