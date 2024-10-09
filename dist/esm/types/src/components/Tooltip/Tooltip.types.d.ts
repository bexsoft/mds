import React from "react";
export type TooltipPlacement = "bottom" | "left" | "right" | "top";
export interface TooltipProps {
  children: React.ReactElement;
  tooltip: React.ReactNode;
  errorProps?: any;
  placement?: TooltipPlacement;
}
export interface TooltipBuild {
  placement: TooltipPlacement;
}
export interface TooltipConstructProps {
  placement: TooltipPlacement;
  content: React.ReactNode;
  anchorEl: (EventTarget & HTMLSpanElement) | null;
}
