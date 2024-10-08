// This file is part of MinIO Design System
// Copyright (c) 2023 MinIO, Inc.
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

import React, { FC, SVGProps } from "react";

import LogoBase from "../LogoBase/LogoBase";
import { LogoBaseProps } from "../LogoBase/LogoBase.types";

const Observe: FC<SVGProps<any> & LogoBaseProps> = ({ inverse, onClick }) => {
  return (
    <LogoBase viewBox="0 0 161.2 51" inverse={inverse} onClick={onClick}>
      <g>
        <path
          className={"minioApplicationName"}
          d="M23.8,37.3c0,2.8-0.5,5.2-1.5,7.2c-1,2-2.4,3.6-4.1,4.7c-1.8,1.1-3.8,1.7-6,1.7c-2.3,0-4.3-0.6-6-1.7
		s-3.1-2.7-4.1-4.7c-1-2-1.5-4.4-1.5-7.2s0.5-5.2,1.5-7.2c1-2,2.4-3.6,4.1-4.7c1.8-1.1,3.8-1.7,6-1.7c2.3,0,4.3,0.6,6,1.7
		c1.8,1.1,3.1,2.7,4.1,4.7C23.3,32.1,23.8,34.5,23.8,37.3z M20.7,37.3c0-2.3-0.4-4.2-1.1-5.8c-0.8-1.6-1.8-2.8-3.1-3.6
		c-1.3-0.8-2.7-1.2-4.3-1.2S9,27.1,7.7,27.9c-1.3,0.8-2.3,2-3.1,3.6c-0.8,1.6-1.1,3.5-1.1,5.8s0.4,4.2,1.1,5.8
		c0.8,1.6,1.8,2.8,3.1,3.6c1.3,0.8,2.7,1.2,4.3,1.2s3.1-0.4,4.3-1.2c1.3-0.8,2.3-2,3.1-3.6C20.3,41.5,20.7,39.6,20.7,37.3z"
        />
        <path
          className={"minioApplicationName"}
          d="M29.1,50.5V24.1h9.2c1.8,0,3.4,0.3,4.6,0.9c1.2,0.6,2.1,1.5,2.7,2.5c0.6,1.1,0.9,2.2,0.9,3.5
		c0,1.1-0.2,2.1-0.6,2.8c-0.4,0.7-0.9,1.3-1.6,1.8c-0.7,0.4-1.4,0.7-2.1,1v0.3c0.8,0.1,1.6,0.3,2.4,0.9c0.8,0.5,1.5,1.3,2.1,2.2
		c0.6,1,0.8,2.1,0.8,3.5c0,1.3-0.3,2.5-0.9,3.6c-0.6,1.1-1.6,1.9-2.9,2.5c-1.3,0.6-3,0.9-5.1,0.9L29.1,50.5L29.1,50.5z M32.3,35.7
		h5.9c1,0,1.8-0.2,2.6-0.6c0.8-0.4,1.4-0.9,1.9-1.6c0.5-0.7,0.7-1.5,0.7-2.4c0-1.2-0.4-2.2-1.2-3c-0.8-0.8-2.1-1.2-3.8-1.2h-6V35.7z
		 M32.3,47.7h6.4c2.1,0,3.6-0.4,4.5-1.2c0.9-0.8,1.3-1.8,1.3-3c0-0.9-0.2-1.7-0.7-2.5c-0.5-0.8-1.1-1.4-2-1.8
		c-0.8-0.5-1.8-0.7-3-0.7h-6.5C32.3,38.5,32.3,47.7,32.3,47.7z"
        />
        <path
          className={"minioApplicationName"}
          d="M67.3,30.7c-0.2-1.3-0.8-2.3-1.9-3c-1.1-0.7-2.5-1.1-4.1-1.1c-1.2,0-2.2,0.2-3.1,0.6c-0.9,0.4-1.6,0.9-2,1.6
		c-0.5,0.7-0.7,1.4-0.7,2.3c0,0.7,0.2,1.3,0.5,1.8c0.3,0.5,0.8,0.9,1.3,1.3c0.5,0.3,1.1,0.6,1.7,0.8c0.6,0.2,1.1,0.4,1.6,0.5
		l2.7,0.7c0.7,0.2,1.5,0.4,2.3,0.7c0.8,0.3,1.7,0.8,2.4,1.3c0.8,0.5,1.4,1.2,1.9,2.1c0.5,0.9,0.8,1.9,0.8,3.1c0,1.4-0.4,2.7-1.1,3.9
		c-0.7,1.2-1.8,2.1-3.3,2.8c-1.4,0.7-3.2,1-5.2,1c-1.9,0-3.5-0.3-4.9-0.9c-1.4-0.6-2.5-1.5-3.3-2.6c-0.8-1.1-1.2-2.4-1.3-3.8H55
		c0.1,1,0.4,1.8,1,2.5c0.6,0.7,1.3,1.1,2.2,1.4c0.9,0.3,1.9,0.5,2.9,0.5c1.2,0,2.3-0.2,3.3-0.6c1-0.4,1.7-1,2.3-1.7
		c0.6-0.7,0.9-1.6,0.9-2.5c0-0.9-0.2-1.6-0.7-2.1c-0.5-0.6-1.1-1-1.9-1.3s-1.7-0.6-2.6-0.9L59.1,38c-2.1-0.6-3.7-1.4-4.9-2.5
		c-1.2-1.1-1.8-2.5-1.8-4.3c0-1.5,0.4-2.8,1.2-3.9c0.8-1.1,1.9-2,3.3-2.6c1.4-0.6,2.9-0.9,4.6-0.9c1.7,0,3.2,0.3,4.5,0.9
		c1.3,0.6,2.4,1.4,3.2,2.5c0.8,1.1,1.2,2.2,1.2,3.6L67.3,30.7L67.3,30.7z"
        />
        <path
          className={"minioApplicationName"}
          d="M76,50.5V24.1h16v2.8H79.2v8.9h11.9v2.8H79.2v9h13v2.8H76z"
        />
        <path
          className={"minioApplicationName"}
          d="M97.8,50.5V24.1h8.9c2.1,0,3.8,0.4,5.1,1.1c1.3,0.7,2.3,1.7,2.9,2.9c0.6,1.2,1,2.6,1,4.2s-0.3,2.9-1,4.1
		c-0.6,1.2-1.6,2.2-2.9,2.8c-1.3,0.7-3,1-5.1,1h-7.2v-2.9h7.1c1.4,0,2.6-0.2,3.4-0.6c0.9-0.4,1.5-1,1.9-1.8c0.4-0.8,0.6-1.7,0.6-2.7
		c0-1.1-0.2-2-0.6-2.8c-0.4-0.8-1-1.4-1.9-1.8c-0.9-0.4-2-0.7-3.4-0.7H101v23.6L97.8,50.5L97.8,50.5z M110.2,38.6l6.5,11.9H113
		l-6.4-11.9H110.2z"
        />
        <path
          className={"minioApplicationName"}
          d="M121.5,24.1l7.9,22.3h0.3l7.9-22.3h3.4l-9.7,26.5h-3.3l-9.7-26.5H121.5z"
        />
        <path
          className={"minioApplicationName"}
          d="M145,50.5V24.1h16v2.8h-12.8v8.9h11.9v2.8h-11.9v9h13v2.8H145z"
        />
        <rect
          x="22.2"
          y="0.2"
          className={"minioSection"}
          width="3.8"
          height="11.2"
        />
        <path
          className={"minioSection"}
          d="M17.6,0.4L9.8,5.1c-0.1,0.1-0.2,0.1-0.4,0L1.6,0.4C1.5,0.3,1.3,0.2,1.1,0.2h0C0.5,0.2,0,0.7,0,1.3v10.2h3.8
		V6.6c0-0.3,0.3-0.5,0.6-0.3L8.8,9c0.4,0.3,1,0.3,1.4,0l4.6-2.7c0.3-0.1,0.6,0,0.6,0.3v4.9h3.8V1.3c0-0.6-0.5-1.1-1.1-1.1h0
		C17.9,0.2,17.7,0.3,17.6,0.4L17.6,0.4z"
        />
        <path
          className={"minioSection"}
          d="M45.2,0.2h-3.9v5.2c0,0.3-0.3,0.5-0.6,0.3L30.6,0.4c-0.2-0.1-0.3-0.1-0.5-0.1h0c-0.6,0-1.1,0.5-1.1,1.1v10.2
		h3.9V6.4c0-0.3,0.3-0.5,0.6-0.3l10.1,5.4c0.2,0.1,0.3,0.1,0.5,0.1l0,0c0.6,0,1.1-0.5,1.1-1.1L45.2,0.2L45.2,0.2L45.2,0.2z"
        />
        <path
          className={"minioSection"}
          d="M48.3,11.5V0.2h1.8v11.2L48.3,11.5L48.3,11.5z"
        />
        <path
          className={"minioSection"}
          d="M60.3,11.7c-4.7,0-8.1-2.3-8.1-5.9c0-3.6,3.4-5.9,8.1-5.9c4.7,0,8.1,2.3,8.1,5.9S65.2,11.7,60.3,11.7z
		 M60.3,1.5c-3.5,0-6.2,1.5-6.2,4.4c0,2.8,2.7,4.4,6.2,4.4c3.5,0,6.3-1.5,6.3-4.4C66.6,3,63.9,1.5,60.3,1.5L60.3,1.5z"
        />
      </g>
    </LogoBase>
  );
};

export default Observe;
