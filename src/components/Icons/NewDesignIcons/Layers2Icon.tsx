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

const Layers2Icon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.99996 2.02805C7.88879 2.02805 7.77957 2.05732 7.68329 2.1129L7.68129 2.11406L2.0624 5.33335L5.58811 7.35338C5.64302 7.3761 5.69521 7.40586 5.7432 7.44223L7.6833 8.5538C7.77957 8.60939 7.88879 8.63865 7.99996 8.63865C8.11113 8.63865 8.22035 8.60939 8.31663 8.5538L8.31864 8.55264L10.2567 7.44223C10.3047 7.40586 10.3569 7.3761 10.4118 7.35338L13.9375 5.33335L8.31663 2.11291C8.22035 2.05732 8.11113 2.02805 7.99996 2.02805ZM10.6862 8.8097L9.01663 9.76624C9.01629 9.76643 9.01596 9.76662 9.01562 9.76681C8.70676 9.9449 8.3565 10.0387 7.99996 10.0387C7.64342 10.0387 7.29316 9.9449 6.9843 9.76681C6.98396 9.76662 6.98363 9.76643 6.98329 9.76624L5.31376 8.8097L2.06247 10.6667L7.6833 13.8871C7.77957 13.9427 7.88879 13.972 7.99996 13.972C8.11113 13.972 8.22035 13.9427 8.31663 13.8871L8.31864 13.886L13.9375 10.6667L10.6862 8.8097ZM3.90457 8.00231L1.32149 6.52235C1.32094 6.52204 1.32038 6.52172 1.31983 6.52141C1.11024 6.40224 0.935898 6.22974 0.814505 6.02142C0.692791 5.81254 0.628662 5.57511 0.628662 5.33335C0.628662 5.0916 0.692791 4.85417 0.814505 4.64529C0.935898 4.43696 1.11024 4.26446 1.31982 4.1453L6.98329 0.900467C6.98367 0.900251 6.98404 0.900036 6.98441 0.899821C7.29325 0.721778 7.64347 0.628052 7.99996 0.628052C8.35646 0.628052 8.70668 0.721778 9.01551 0.899821C9.01588 0.900036 9.01626 0.900251 9.01663 0.900467L14.6784 4.14435C14.679 4.14467 14.6795 4.14498 14.6801 4.1453C14.8897 4.26446 15.064 4.43696 15.1854 4.64529C15.3071 4.85417 15.3713 5.0916 15.3713 5.33335C15.3713 5.57511 15.3071 5.81253 15.1854 6.02142C15.064 6.22975 14.8897 6.40224 14.6801 6.52141C14.6795 6.52172 14.679 6.52204 14.6784 6.52235L12.0954 8.00231L14.6784 9.47768C14.6788 9.47792 14.6793 9.47815 14.6797 9.47839C14.8894 9.59756 15.0639 9.77015 15.1854 9.97862C15.3071 10.1875 15.3713 10.4249 15.3713 10.6667C15.3713 10.9084 15.3071 11.1459 15.1854 11.3547C15.064 11.5631 14.8897 11.7356 14.6801 11.8547C14.6795 11.8551 14.679 11.8554 14.6784 11.8557L9.01663 15.0996C9.0162 15.0998 9.01578 15.1001 9.01536 15.1003C8.70656 15.2783 8.3564 15.372 7.99996 15.372C7.64352 15.372 7.29336 15.2783 6.98457 15.1003C6.98414 15.1001 6.98372 15.0998 6.98329 15.0996L1.32149 11.8557C1.32094 11.8554 1.32038 11.8551 1.31982 11.8547C1.11024 11.7356 0.935897 11.5631 0.814505 11.3547C0.692791 11.1459 0.628662 10.9084 0.628662 10.6667C0.628662 10.4249 0.692791 10.1875 0.814505 9.97862C0.935987 9.77014 1.1105 9.59754 1.32029 9.47837C1.32069 9.47814 1.32109 9.47791 1.32149 9.47768L3.90457 8.00231Z"
      fill="currentColor"
    />
  </svg>
);
export default Layers2Icon;