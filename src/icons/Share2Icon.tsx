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

const Share2Icon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2.0333C11.2821 2.0333 10.7 2.61533 10.7 3.3333C10.7 3.55858 10.7574 3.77047 10.8582 3.9552C10.865 3.96562 10.8716 3.97626 10.878 3.98715C10.8843 3.99794 10.8902 4.00884 10.8959 4.01983C11.1254 4.38817 11.5341 4.6333 12 4.6333C12.718 4.6333 13.3 4.05127 13.3 3.3333C13.3 2.61533 12.718 2.0333 12 2.0333ZM10.1 5.25161C10.5879 5.73485 11.2591 6.0333 12 6.0333C13.4912 6.0333 14.7 4.82447 14.7 3.3333C14.7 1.84213 13.4912 0.633301 12 0.633301C10.5089 0.633301 9.30005 1.84213 9.30005 3.3333C9.30005 3.57875 9.3328 3.81655 9.39417 4.04257L5.90007 6.08166C5.41221 5.59842 4.74098 5.29997 4.00005 5.29997C2.50888 5.29997 1.30005 6.5088 1.30005 7.99997C1.30005 9.49114 2.50888 10.7 4.00005 10.7C4.74113 10.7 5.41247 10.4014 5.90036 9.918L9.39498 11.9544C9.33309 12.1813 9.30005 12.4201 9.30005 12.6666C9.30005 14.1578 10.5089 15.3666 12 15.3666C13.4912 15.3666 14.7 14.1578 14.7 12.6666C14.7 11.1755 13.4912 9.96663 12 9.96663C11.2602 9.96663 10.5899 10.2642 10.1022 10.7462L6.60603 8.70885C6.66733 8.48295 6.70005 8.24528 6.70005 7.99997C6.70005 7.75451 6.6673 7.51671 6.60592 7.29069L10.1 5.25161ZM5.1042 7.31344C5.10986 7.32443 5.11583 7.33532 5.12213 7.34612C5.12849 7.357 5.13508 7.36765 5.14192 7.37806C5.24275 7.56279 5.30005 7.77469 5.30005 7.99997C5.30005 8.22524 5.24275 8.43714 5.14192 8.62187C5.13501 8.6324 5.12833 8.64318 5.12191 8.6542C5.11569 8.66488 5.10978 8.67565 5.10418 8.68652C4.87467 9.05484 4.46599 9.29997 4.00005 9.29997C3.28208 9.29997 2.70005 8.71794 2.70005 7.99997C2.70005 7.282 3.28208 6.69997 4.00005 6.69997C4.466 6.69997 4.87469 6.9451 5.1042 7.31344ZM10.8386 12.082C10.8552 12.06 10.8706 12.0368 10.8849 12.0124C10.8985 11.9891 10.9106 11.9653 10.9212 11.9411C11.1547 11.5946 11.5507 11.3666 12 11.3666C12.718 11.3666 13.3 11.9487 13.3 12.6666C13.3 13.3846 12.718 13.9666 12 13.9666C11.2821 13.9666 10.7 13.3846 10.7 12.6666C10.7 12.4563 10.75 12.2577 10.8386 12.082Z"
      fill="currentColor"
    />
  </svg>
);
export default Share2Icon;