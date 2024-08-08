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

import React, { FC } from "react";
import styled, { CSSObject } from "styled-components";
import get from "lodash/get";
import CircleHelpIcon from "../Icons/NewDesignIcons/CircleHelpIcon";
import Tooltip from "../Tooltip/Tooltip";
import InputLabel from "../InputLabel/InputLabel";
import Box from "../Box/Box";
import { SliderContainerProps, SliderProps } from "./Slider.types";
import { lightColors } from "../../global/themes";
import { overridePropsParse } from "../../global/utils";
import { themeColors, themeShadows } from "../../global/themeColors";

const InputBase = styled.input(({ theme }) => {
  const thumb: CSSObject = {
    "-webkit-appearance": "none",
    boxSizing: "border-box",
    appearance: "none",
    backgroundColor: get(
      theme,
      "slider.bulletBG",
      themeColors["Color/Brand/Primary/colorPrimary"].lightMode,
    ),
    border: `4px solid ${get(theme, "slider.bulletBorder", themeColors["Color/Base/White"].lightMode)}`,
    height: 16,
    width: 16,
    borderRadius: "100%",
    boxShadow: themeShadows["boxShadow-02"],
  };

  return {
    "&[type='range']": {
      width: "100%",
      overflow: "hidden",
      "-webkit-appearance": "none",
      backgroundColor: "#9a905d",
      "&::-webkit-slider-runnable-track": {
        height: 10,
        "-webkit-appearance": "none",
        color: "#13bba4",
        marginTop: -1,
      },
      "&::-webkit-slider-thumb": {
        width: 10,
        "-webkit-appearance": "none",
        height: 10,
        cursor: "ew-resize",
        background: "#434343",
        color: "#43e5f7",
      },
      "&::-moz-range-progress": {
        backgroundColor: "#43e5f7",
      },
      "&::-moz-range-track": {
        backgroundColor: "#9a905d",
      },
    },
  };

  /*return {
            '&[type="range"]': {
              width: "100%",
              height: 8,
              zIndex: 500,
              margin: 0,
              cursor: "pointer",
              "-webkit-appearance" : "none",
              backgroundColor: get(theme, "slider.railBG", themeColors["Color/Brand/Neutral/colorPrimaryBg"].lightMode),
              borderRadius: 15,
              "&:focus": {
                outline: "none",
              },
              "&::-webkit-slider-thumb": {
                ...thumb,
                marginTop: -4,
              },
              "&::-moz-range-thumb": {
                ...thumb,
                backgroundColor: "#f09",
              },
              "&::-moz-range-progress": {
                backgroundColor: get(
                  theme,
                  "slider.progressColor",
                  themeColors["Color/Brand/Primary/colorPrimary"].lightMode,
                ),
                height: 8,
                borderRadius: 15,
              },
              "&::-moz-range-track": {
                backgroundColor: get(theme, "slider.railBG", themeColors["Color/Brand/Neutral/colorPrimaryBg"].lightMode),
                height: 8,
                borderRadius: 15,
              },
            },
            '&[type="range"]:disabled': {
              cursor: "not-allowed",
              "&::-webkit-slider-thumb": {
                backgroundColor: get(
                  theme,
                  "slider.disabledBullet",
                  lightColors.disabledGrey,
                ),
              },
              "&::-moz-range-thumb": {
                backgroundColor: get(
                  theme,
                  "slider.disabledBullet",
                  lightColors.disabledGrey,
                ),
              },
            },
          };*/
});

const SliderContainer = styled.div<SliderContainerProps>(
  ({ theme, error, sx }) => ({
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
    width: "100%",
    "& .errorText": {
      fontSize: 12,
      color: get(theme, "inputBox.error", "#C51B3F"),
      marginTop: 3,
    },
    "& .textBoxContainer": {
      width: "100%",
      flexGrow: 1,
      position: "relative",
      minWidth: 160,
    },
    "& .tooltipContainer": {
      marginLeft: 5,
      display: "flex",
      alignItems: "center",
      "& .min-icon": {
        width: 13,
      },
    },
    "& .inputLabel": {
      marginBottom: error ? 18 : 0,
    },
    "& .displayValue": {
      fontSize: 12,
      fontWeight: "bold",
    },
    ...overridePropsParse(sx, theme),
  }),
);

const BackBar = styled.div(({ theme }) => ({
  position: "absolute",
  width: "100%",
  height: 6,
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: get(theme, "slider.railBG", lightColors.borderColor),
  borderRadius: 15,
  display: "flex",
  alignItems: "center",
  zIndex: 90,
  "&.disabled": {
    backgroundColor: get(
      theme,
      "slider.disabledRail",
      lightColors.disabledBGGrey,
    ),
  },
}));

const Slider: FC<SliderProps & React.InputHTMLAttributes<HTMLInputElement>> = ({
  id,
  tooltip = "",
  noLabelMinWidth,
  label = "",
  required,
  className,
  error,
  sx,
  helpTip,
  helpTipPlacement,
  min = 0,
  max = 100,
  type,
  value,
  displayValue,
  displayValueFunction,
  step = 1,
  disabled = false,
  ...props
}) => {
  return (
    <SliderContainer
      error={!!error && error !== ""}
      sx={sx}
      className={`slider ${className}`}
    >
      {label !== "" && (
        <InputLabel
          htmlFor={id}
          noMinWidth={noLabelMinWidth}
          className={"inputLabel"}
          helpTip={helpTip}
          helpTipPlacement={helpTipPlacement}
        >
          {label}
          {required ? "*" : ""}
          {tooltip !== "" && (
            <Box className={"tooltipContainer"}>
              <Tooltip tooltip={tooltip} placement="top">
                <Box className={tooltip}>
                  <CircleHelpIcon />
                </Box>
              </Tooltip>
            </Box>
          )}
        </InputLabel>
      )}

      <Box className={"textBoxContainer"}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              position: "relative",
              height: 6,
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            <InputBase
              id={id}
              type={"range"}
              className={"rangeSelector"}
              min={min}
              max={max}
              step={step}
              disabled={disabled}
              {...props}
            />
            <BackBar className={`${disabled ? "disabled" : ""}`} />
          </Box>
          {!!displayValue ? (
            <span className={"displayValue"}>
              {displayValueFunction ? displayValueFunction(value || 0) : value}
            </span>
          ) : null}
        </Box>
        {error !== "" && <Box className={"errorText"}>{error}</Box>}
      </Box>
    </SliderContainer>
  );
};

export default Slider;
