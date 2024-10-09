import { OverrideTheme } from "../../global/global.types";
import React from "react";
export type LinkButtonVariant = "primary" | "neutral" | "destructive";
export interface LinkButtonStyle {
  default: string;
  hover: string;
  active: string;
  disabled: string;
}
export interface LinkButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  label?: any;
  variant?: LinkButtonVariant;
  sx?: OverrideTheme;
}
export type LinkButtonThemeVariant = Record<LinkButtonVariant, LinkButtonStyle>;
