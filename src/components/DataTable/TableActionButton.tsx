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

import React from "react";
import {
  actionsTypes,
  IActionButton,
  PredefinedActionTypes,
} from "./DataTable.types";
import EyeIcon from "../../icons/EyeIcon";
import PencilIcon from "../../icons/PencilIcon";
import TrashIcon from "../../icons/TrashIcon";
import ShieldEllipsisIcon from "../../icons/ShieldEllipsisIcon";
import ShareIcon from "../../icons/ShareIcon";
import CloudIcon from "../../icons/CloudIcon";
import SquareTerminalIcon from "../../icons/SquareTerminalIcon";
import DownloadIcon from "../../icons/DownloadIcon";
import CircleMinusIcon from "../../icons/CircleMinusIcon";
import EraserIcon from "../../icons/EraserIcon";
import Tooltip from "../Tooltip";

export const isPredefinedAction = (val: any): val is PredefinedActionTypes =>
  actionsTypes.includes(val);

const defineIcon = (type: PredefinedActionTypes) => {
  switch (type) {
    case "view":
      return <EyeIcon />;
    case "edit":
      return <PencilIcon />;
    case "delete":
      return <TrashIcon />;
    case "description":
      return <ShieldEllipsisIcon />;
    case "share":
      return <ShareIcon />;
    case "cloud":
      return <CloudIcon />;
    case "console":
      return <SquareTerminalIcon />;
    case "download":
      return <DownloadIcon />;
    case "disable":
      return <CircleMinusIcon />;
    case "format":
      return <EraserIcon />;
    case "preview":
      return <EyeIcon />;
  }

  return null;
};

const TableActionButton = <T,>({
  type,
  onClick,
  valueToSend,
  disabled = false,
  tooltip,
}: IActionButton<T>) => {
  const icon = isPredefinedAction(type) ? defineIcon(type) : type;
  let buttonElement = (
    <button
      type={"button"}
      aria-label={typeof type === "string" ? type : ""}
      disabled={disabled}
      onClick={
        onClick
          ? (e) => {
              e.stopPropagation();
              if (!disabled) {
                onClick(valueToSend);
              } else {
                e.preventDefault();
              }
            }
          : () => null
      }
    >
      {icon}
    </button>
  );

  if (tooltip && tooltip !== "") {
    buttonElement = <Tooltip tooltip={tooltip}>{buttonElement}</Tooltip>;
  }

  if (onClick) {
    return buttonElement;
  }

  return null;
};

export default TableActionButton;
