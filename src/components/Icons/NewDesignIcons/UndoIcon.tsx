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

const UndoIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 3.96667C2.3866 3.96667 2.7 4.28008 2.7 4.66667V7.09492L3.53262 6.34556C4.7601 5.24465 6.35044 4.63502 7.99929 4.63334C9.77624 4.63334 11.4811 5.33923 12.7376 6.59573C13.9941 7.85222 14.7 9.55639 14.7 11.3333C14.7 11.7199 14.3866 12.0333 14 12.0333C13.6134 12.0333 13.3 11.7199 13.3 11.3333C13.3 9.92769 12.7416 8.57962 11.7477 7.58568C10.7538 6.59182 9.40588 6.03344 8.00036 6.03334C6.69635 6.03476 5.43863 6.51686 4.46778 7.38743C4.46765 7.38755 4.46791 7.38731 4.46778 7.38743L3.82417 7.96667H6C6.3866 7.96667 6.7 8.28008 6.7 8.66667C6.7 9.05327 6.3866 9.36667 6 9.36667H2C1.6134 9.36667 1.3 9.05327 1.3 8.66667V4.66667C1.3 4.28008 1.6134 3.96667 2 3.96667Z"
      fill="currentColor"
    />
  </svg>
);
export default UndoIcon;
