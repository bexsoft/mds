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

const UsersRoundIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.66663 2.70005C5.21228 2.70005 4.0333 3.87903 4.0333 5.33338C4.0333 6.78773 5.21228 7.96672 6.66663 7.96672C8.12098 7.96672 9.29997 6.78773 9.29997 5.33338C9.29997 3.87903 8.12098 2.70005 6.66663 2.70005ZM9.15829 8.50526C10.0971 7.76677 10.7 6.62048 10.7 5.33338C10.7 3.10583 8.89418 1.30005 6.66663 1.30005C4.43909 1.30005 2.6333 3.10583 2.6333 5.33338C2.6333 6.62048 3.23619 7.76677 4.17497 8.50526C3.52059 8.80198 2.91828 9.21598 2.40042 9.73384C1.26895 10.8653 0.633301 12.3999 0.633301 14C0.633301 14.3866 0.946701 14.7 1.3333 14.7C1.7199 14.7 2.0333 14.3866 2.0333 14C2.0333 12.7712 2.52145 11.5927 3.39037 10.7238C4.25929 9.85487 5.4378 9.36672 6.66663 9.36672C7.89547 9.36672 9.07398 9.85487 9.94289 10.7238C10.8118 11.5927 11.3 12.7712 11.3 14C11.3 14.3866 11.6134 14.7 12 14.7C12.3866 14.7 12.7 14.3866 12.7 14C12.7 12.3999 12.0643 10.8653 10.9328 9.73384C10.415 9.21598 9.81268 8.80198 9.15829 8.50526ZM11.0979 2.10962C11.2951 1.77711 11.7245 1.66743 12.0571 1.86465C12.6273 2.20285 13.1053 2.67641 13.4489 3.2434C13.7925 3.8104 13.9911 4.45335 14.027 5.11535C14.0628 5.77736 13.935 6.438 13.6547 7.03882C13.4953 7.38054 13.2894 7.69691 13.0439 7.97943C14.2877 9.20231 15.3666 11.1885 15.3666 13.3334C15.3666 13.72 15.0532 14.0334 14.6666 14.0334C14.28 14.0334 13.9666 13.72 13.9666 13.3334C13.9666 11.3382 12.7635 9.44771 11.58 8.56005C11.4037 8.42786 11.3 8.22042 11.3 8.00011C11.2999 7.7798 11.4036 7.57233 11.5799 7.44012C11.9261 7.18035 12.203 6.83924 12.386 6.44697C12.569 6.05469 12.6524 5.62336 12.629 5.19115C12.6056 4.75893 12.476 4.33915 12.2516 3.96896C12.0273 3.59878 11.7152 3.2896 11.3429 3.06878C11.0104 2.87157 10.9007 2.44214 11.0979 2.10962Z"
      fill="currentColor"
    />
  </svg>
);
export default UsersRoundIcon;