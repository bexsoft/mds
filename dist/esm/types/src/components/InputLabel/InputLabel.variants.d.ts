import { InputLabelOrientation, InputLabelSizeMode } from "./InputLabel.types";
import { Theme } from "@emotion/react";
export declare const customLabelStyles: (
  theme: Theme,
  inputSizeMode: InputLabelSizeMode,
  orientation: InputLabelOrientation,
) => {
  fontFamily: string;
  color: string;
  textAlign: "left";
  alignItems: "flex-start";
  display: string;
  userSelect: string;
  whiteSpace: string;
  "& > span": {
    display: string;
    alignItems: string;
    lineHeight: string | (string & {});
    minWidth: number;
    "&.noMinWidthLabel": {
      minWidth: string;
    };
  };
};
