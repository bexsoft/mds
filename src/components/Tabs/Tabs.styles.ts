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

import { css, Theme } from "@emotion/react";

export const horizontalTabStyles = (theme: Theme) =>
  css({
    flexDirection: "column",
    border: "none",
    backgroundColor: theme.colors["Color/Neutral/Bg/colorBgContainer"],
    width: "100%",
    alignItems: "flex-start",
    "& .optionsContainer": {
      borderBottom: `1px solid ${theme.colors["Color/Neutral/Border/colorBorderSubtle"]}`,
      width: "100%",
      "& .optionsList": {
        position: "relative",
        flexDirection: "row",
        width: "100%",
        gap: 16,
        borderRight: 0,
        top: 1,
      },
    },
    "& .tabsPanels": {
      border: "none",
      padding: `16px 0px`,
    },
  });

export const tabsContainerStyles = (theme: Theme) =>
  css({
    display: "flex",
    flexDirection: "row",
    height: "100%",
    "& .optionsContainer": {
      display: "flex",
      backgroundColor: theme.colors["Color/Neutral/Bg/colorBgContainer"],
      width: "auto",
      alignItems: "flex-start",
      gap: 10,
      "& .optionsList": {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        width: "auto",
        gap: 0,
        borderRight: `${theme.colors["Color/Neutral/Border/colorBorderSubtle"]} 1px solid`,
      },
    },
    "& .tabsPanels": {
      flexGrow: 1,
      width: "100%",
      padding: `0px 24px`,
      borderLeft: "none",
    },
  });

export const tabButtonHorizontalStyles = (theme: Theme) =>
  css({
    height: 34,
    width: "auto",
    color: theme.colors["Color/Neutral/Text/colorTextLabel"],
    borderBottom: `transparent 1px solid`,
    borderRadius: 0,
    "&:hover": {
      backgroundColor: theme.colors["Color/Brand/Control/colorBgHover"],
      color: theme.colors["Color/Neutral/Text/colorTextLabel"],
    },
    "&:disabled": {
      color: theme.colors["Color/Neutral/Text/colorTextDisabled"],
      "&:hover": {
        backgroundColor: "initial",
      },
    },
    "&.selected": {
      color: theme.colors["Color/Brand/Primary/colorPrimaryText"],
      borderColor: theme.colors["Color/Brand/Primary/colorPrimaryBorder"],
      backgroundColor: "initial",
      "&:after": {
        display: "block",
      },
    },
  });

export const tabButtonBaseStyles = (theme: Theme) =>
  css({
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
    height: 28,
    width: 255,
    borderRadius: theme.borderRadius.borderRadiusSM,
    padding: "4px 8px",
    border: "none",
    fontSize: 14,
    fontWeight: 600,
    lineHeight: "20px",
    backgroundColor: "transparent",
    color: theme.colors["Color/Neutral/Text/colorTextHeading"],
    left: 1,
    position: "relative" as const,
    "&:hover": {
      cursor: "pointer",
      backgroundColor: theme.colors["Color/Brand/Control/colorBgHover"],
      color: theme.colors["Color/Neutral/Text/colorTextHeading"],
      left: 1,
    },
    "&:disabled": {
      cursor: "not-allowed",
      backgroundColor: "transparent",
      color: theme.colors["Color/Neutral/Text/colorTextDisabled"],
      "& svg": {
        color: theme.colors["Color/Neutral/Text/colorTextDisabled"],
      },
    },
    "& svg": {
      width: 18,
      height: 18,
      color: theme.colors["Color/Neutral/Icon/colorIcon"],
    },
    "&.selected": {
      fontWeight: 600,
      backgroundColor: theme.colors["Color/Brand/Control/colorBgActive"],
      color: theme.colors["Color/Brand/Primary/colorPrimaryText"],
      "& svg": {
        color: theme.colors["Color/Brand/Primary/colorPrimaryText"],
      },
    },
  });
