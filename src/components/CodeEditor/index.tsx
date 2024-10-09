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
import { FC, useMemo } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";

import { overridePropsParse } from "../../global/utils";
import { CodeEditorProps } from "./CodeEditor.types";
import InputLabel from "../InputLabel";
import Box from "../Box";
import Tooltip from "../Tooltip";
import CircleHelpIcon from "../../icons/CircleHelpIcon";
import { css, jsx, useTheme } from "@emotion/react";
import { codeEditorStyles } from "./CodeEditor.variants";

const CodeMirrorWrapper: FC<CodeEditorProps> = ({
  value,
  label = "",
  tooltip = "",
  mode = "json",
  onChange,
  editorHeight = 250,
  sx,
  helpTools,
  className,
  horizontal = false,
}) => {
  const theme = useTheme();

  const overrideThemes = useMemo(() => {
    if (sx) {
      return css({ ...overridePropsParse(sx, theme) });
    }

    return {};
  }, [sx, theme]);

  const baseTheme = codeEditorStyles(theme);

  const extraStyles = css({
    gridTemplateColumns: horizontal ? "auto 1fr" : "1fr",
    "& .editorContainer": {
      maxHeight: editorHeight,
    },
    "& .editor": {
      "&.w-tc-editor": {
        minHeight: editorHeight || "initial",
      },
    },
  });

  return (
    <div
      css={[baseTheme, extraStyles, overrideThemes]}
      className={`codeEditor inputItem ${className}`}
    >
      <InputLabel className={"inputLabel"}>
        <span>{label}</span>
        {tooltip !== "" && (
          <Box className={"tooltipContainer"}>
            <Tooltip tooltip={tooltip} placement="top">
              <CircleHelpIcon />
            </Tooltip>
          </Box>
        )}
      </InputLabel>
      <Box className={"editorWrapper"}>
        {helpTools && <Box className={"actionsContainer"}>{helpTools}</Box>}
        <Box className={"editorContainer"}>
          <CodeEditor
            value={value}
            language={mode}
            onChange={(evn) => {
              onChange(evn.target.value);
            }}
            id={"code_wrapper"}
            padding={15}
            className={"editor"}
          />
        </Box>
      </Box>
    </div>
  );
};

export default CodeMirrorWrapper;
