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

const BoxSelectIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.8956 1.89555C2.27692 1.51423 2.79411 1.3 3.33338 1.3C3.71998 1.3 4.03338 1.6134 4.03338 2C4.03338 2.3866 3.71998 2.7 3.33338 2.7C3.16541 2.7 3.00432 2.76673 2.88555 2.8855C2.76677 3.00428 2.70005 3.16537 2.70005 3.33334C2.70005 3.71994 2.38665 4.03334 2.00005 4.03334C1.61345 4.03334 1.30005 3.71994 1.30005 3.33334C1.30005 2.79406 1.51427 2.27688 1.8956 1.89555ZM5.30005 2C5.30005 1.6134 5.61345 1.3 6.00005 1.3H6.66672C7.05331 1.3 7.36672 1.6134 7.36672 2C7.36672 2.3866 7.05331 2.7 6.66672 2.7H6.00005C5.61345 2.7 5.30005 2.3866 5.30005 2ZM8.63338 2C8.63338 1.6134 8.94678 1.3 9.33338 1.3H10C10.3866 1.3 10.7 1.6134 10.7 2C10.7 2.3866 10.3866 2.7 10 2.7H9.33338C8.94678 2.7 8.63338 2.3866 8.63338 2ZM11.9667 2C11.9667 1.6134 12.2801 1.3 12.6667 1.3C13.206 1.3 13.7232 1.51423 14.1045 1.89555C14.4858 2.27688 14.7 2.79406 14.7 3.33334C14.7 3.71994 14.3866 4.03334 14 4.03334C13.6135 4.03334 13.3 3.71994 13.3 3.33334C13.3 3.16537 13.2333 3.00428 13.1145 2.8855C12.9958 2.76673 12.8347 2.7 12.6667 2.7C12.2801 2.7 11.9667 2.3866 11.9667 2ZM2.00005 5.3C2.38665 5.3 2.70005 5.6134 2.70005 6V6.66667C2.70005 7.05327 2.38665 7.36667 2.00005 7.36667C1.61345 7.36667 1.30005 7.05327 1.30005 6.66667V6C1.30005 5.6134 1.61345 5.3 2.00005 5.3ZM14 5.3C14.3866 5.3 14.7 5.6134 14.7 6V6.66667C14.7 7.05327 14.3866 7.36667 14 7.36667C13.6135 7.36667 13.3 7.05327 13.3 6.66667V6C13.3 5.6134 13.6135 5.3 14 5.3ZM2.00005 8.63334C2.38665 8.63334 2.70005 8.94674 2.70005 9.33334V10C2.70005 10.3866 2.38665 10.7 2.00005 10.7C1.61345 10.7 1.30005 10.3866 1.30005 10V9.33334C1.30005 8.94674 1.61345 8.63334 2.00005 8.63334ZM14 8.63334C14.3866 8.63334 14.7 8.94674 14.7 9.33334V10C14.7 10.3866 14.3866 10.7 14 10.7C13.6135 10.7 13.3 10.3866 13.3 10V9.33334C13.3 8.94674 13.6135 8.63334 14 8.63334ZM2.00005 11.9667C2.38665 11.9667 2.70005 12.2801 2.70005 12.6667C2.70005 12.8346 2.76677 12.9957 2.88555 13.1145C3.00432 13.2333 3.16541 13.3 3.33338 13.3C3.71998 13.3 4.03338 13.6134 4.03338 14C4.03338 14.3866 3.71998 14.7 3.33338 14.7C2.79411 14.7 2.27692 14.4858 1.8956 14.1045C1.51427 13.7231 1.30005 13.2059 1.30005 12.6667C1.30005 12.2801 1.61345 11.9667 2.00005 11.9667ZM14 11.9667C14.3866 11.9667 14.7 12.2801 14.7 12.6667C14.7 13.2059 14.4858 13.7231 14.1045 14.1045C13.7232 14.4858 13.206 14.7 12.6667 14.7C12.2801 14.7 11.9667 14.3866 11.9667 14C11.9667 13.6134 12.2801 13.3 12.6667 13.3C12.8347 13.3 12.9958 13.2333 13.1145 13.1145C13.2333 12.9957 13.3 12.8346 13.3 12.6667C13.3 12.2801 13.6135 11.9667 14 11.9667ZM5.30005 14C5.30005 13.6134 5.61345 13.3 6.00005 13.3H6.66672C7.05331 13.3 7.36672 13.6134 7.36672 14C7.36672 14.3866 7.05331 14.7 6.66672 14.7H6.00005C5.61345 14.7 5.30005 14.3866 5.30005 14ZM8.63338 14C8.63338 13.6134 8.94678 13.3 9.33338 13.3H10C10.3866 13.3 10.7 13.6134 10.7 14C10.7 14.3866 10.3866 14.7 10 14.7H9.33338C8.94678 14.7 8.63338 14.3866 8.63338 14Z"
      fill="currentColor"
    />
  </svg>
);
export default BoxSelectIcon;