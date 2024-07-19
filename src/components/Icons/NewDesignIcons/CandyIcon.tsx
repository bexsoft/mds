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

const CandyIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.0248 0.704963C11.2204 0.608981 11.4494 0.609484 11.6445 0.706321L12.5612 1.16134C12.7395 1.25104 12.9361 1.29849 13.1357 1.3H14C14.3866 1.3 14.7 1.6134 14.7 2V2.86667C14.7 3.07349 14.745 3.26376 14.8301 3.42236C14.8336 3.42889 14.837 3.43548 14.8403 3.44212L15.2936 4.35545C15.3905 4.55055 15.391 4.77961 15.295 4.97513C15.199 5.17065 15.0175 5.31036 14.8039 5.35307L12.4074 5.83238C12.5967 6.3087 12.6927 6.81711 12.6902 7.32996C12.6875 7.85865 12.58 8.38155 12.374 8.86845C12.1685 9.35423 11.8689 9.79455 11.4925 10.1641L10.164 11.4925C9.79452 11.8689 9.3542 12.1685 8.86842 12.3741C8.38152 12.5801 7.85861 12.6875 7.32993 12.6902C6.81708 12.6928 6.30867 12.5967 5.83235 12.4074L5.35304 14.8039C5.31032 15.0175 5.17062 15.1991 4.9751 15.295C4.77958 15.391 4.55052 15.3905 4.35542 15.2937L3.44208 14.8403L3.4387 14.8387C3.26041 14.749 3.06387 14.7015 2.86431 14.7H1.99997C1.61337 14.7 1.29997 14.3866 1.29997 14V13.1357C1.29846 12.9361 1.25102 12.7396 1.16131 12.5613L1.15961 12.5579L0.706289 11.6445C0.609451 11.4494 0.608949 11.2204 0.70493 11.0249C0.800912 10.8293 0.982438 10.6896 1.19602 10.6469L3.59256 10.1676C3.40325 9.6913 3.30719 9.18289 3.30978 8.67003C3.31245 8.14135 3.4199 7.61845 3.62591 7.13155C3.83145 6.6458 4.13101 6.2055 4.50736 5.83599L5.83596 4.50739C6.20547 4.13104 6.64576 3.83148 7.13152 3.62595C7.61841 3.41993 8.14132 3.31248 8.67 3.30981C9.18285 3.30722 9.69127 3.40328 10.1676 3.59259L10.6469 1.19605C10.6896 0.982471 10.8293 0.800944 11.0248 0.704963ZM11.6008 4.56597C11.5738 4.53738 11.5465 4.50916 11.5186 4.48134C11.4908 4.45351 11.4626 4.42612 11.434 4.39916L11.8405 2.36657L11.932 2.41199C11.9326 2.41229 11.9333 2.4126 11.9339 2.41291C12.3049 2.59921 12.7139 2.69745 13.129 2.69999L13.3 2.7V2.86667C13.3 3.26946 13.3867 3.68852 13.5908 4.07367L13.6334 4.15945L11.6008 4.56597ZM8.6333 4.71039C8.30459 4.71758 7.9801 4.78706 7.67706 4.91528C7.56997 4.96059 7.46628 5.01293 7.36663 5.07187V11.2896C7.69534 11.2824 8.01984 11.2129 8.32288 11.0847C8.42996 11.0394 8.53365 10.9871 8.6333 10.9281V4.71039ZM10.0333 9.64338V5.08353C10.2131 5.19201 10.3795 5.32211 10.5287 5.47128C10.7717 5.71428 10.9641 6.00304 11.0948 6.32086C11.2255 6.63867 11.2919 6.97925 11.2902 7.32289C11.2884 7.66654 11.2186 8.00643 11.0847 8.32291C10.9508 8.63939 10.7555 8.92619 10.51 9.16672L10.0333 9.64338ZM5.96663 10.9165V6.35662L5.48994 6.83331C5.2445 7.07384 5.04916 7.36061 4.91525 7.67709C4.78134 7.99357 4.7115 8.33346 4.70976 8.6771C4.70803 9.02075 4.77443 9.36132 4.90514 9.67914C5.03584 9.99696 5.22826 10.2857 5.47125 10.5287C5.62042 10.6779 5.78684 10.808 5.96663 10.9165ZM4.39913 11.434L2.36654 11.8405L2.41195 11.9321C2.41226 11.9327 2.41257 11.9333 2.41288 11.9339C2.59918 12.3049 2.69742 12.7139 2.69995 13.1291L2.69998 13.1333L2.69997 13.3H2.8709C3.2861 13.3025 3.69512 13.4008 4.06615 13.5871C4.06673 13.5874 4.06732 13.5877 4.0679 13.588L4.15942 13.6334L4.56594 11.6008C4.53734 11.5739 4.50913 11.5465 4.4813 11.5187C4.45348 11.4908 4.42608 11.4626 4.39913 11.434Z"
      fill="currentColor"
    />
  </svg>
);
export default CandyIcon;