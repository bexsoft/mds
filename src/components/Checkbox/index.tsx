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

/** @jsx jsx */
import React, { FC, useMemo } from "react";

import { CheckboxProps } from "./Checkbox.types";
import { css, jsx, useTheme } from "@emotion/react";
import { checkboxStyles } from "./Checkbox.variants";
import { overridePropsParse } from "../../global/utils";
import CheckIcon from "../../icons/CheckIcon";
import Tooltip from "../Tooltip";
import CircleHelpIcon from "../../icons/CircleHelpIcon";
import FieldContainer from "../../global/FieldContainer";
import InputLabel from "../InputLabel";

const Checkbox: FC<
  CheckboxProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({
  tooltip,
  label,
  id,
  overrideLabelClasses,
  sx,
  className,
  checked,
  disabled,
  ...props
}) => {
  const theme = useTheme();

  const overrideThemes = useMemo(() => {
    if (sx) {
      return css({ ...overridePropsParse(sx, theme) });
    }

    return {};
  }, [sx, theme]);

  const checkboxTheme = checkboxStyles(theme);

  return (
    <FieldContainer
      className={`inputItem ${className ? className : ""}`}
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexBasis: "initial",
        flexWrap: "nowrap",
      }}
    >
      <label
        css={[checkboxTheme, overrideThemes]}
        onClick={(e) => e.stopPropagation()}
      >
        <input
          type={"checkbox"}
          id={id}
          checked={checked}
          disabled={disabled}
          {...props}
        />
        <span className={"checkbox"}>
          <CheckIcon className={`${disabled ? "disabled" : ""} icon-overlay`} />
        </span>
      </label>
      {label !== "" && (
        <InputLabel
          htmlFor={id}
          noMinWidth
          className={`${overrideLabelClasses || ""}`}
          sx={{
            marginLeft: 10,
          }}
        >
          {label}
          {tooltip && tooltip !== "" && (
            <div className={"tooltipContainer"}>
              <Tooltip tooltip={tooltip} placement="top">
                <CircleHelpIcon />
              </Tooltip>
            </div>
          )}
        </InputLabel>
      )}
    </FieldContainer>
  );
};

export default Checkbox;
