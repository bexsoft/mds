import * as React from "react";
import React__default, {
  ReactNode,
  FC,
  HTMLAttributes,
  MouseEventHandler,
} from "react";
import { CSSObject } from "@emotion/serialize";
import { Theme, EmotionCache } from "@emotion/react";

type OverrideTheme = CSSObject | ((theme: Theme) => CSSObject) | undefined;

interface AccordionProps {
  expanded: boolean;
  onTitleClick: () => void;
  id: string;
  title: ReactNode;
  children: ReactNode;
  disabled?: boolean;
  contentBackgroundColor?: boolean;
  sx?: OverrideTheme;
}

/** @jsx jsx */

declare const Accordion: FC<AccordionProps>;

type BadgeColors =
  | "none"
  | "info"
  | "success"
  | "warning"
  | "danger"
  | "purple"
  | "rose"
  | "scooter"
  | "disabled";
type BadgeStyles = "minimal" | "subtle" | "bold";
type BadgeIcons = boolean | "dot" | ReactNode;
type BadgeSizes = "normal" | "small";
interface BadgeMainProps {
  label: string;
  id: string;
}
interface BadgeConstructProps {
  color?: BadgeColors;
  badgeStyle?: BadgeStyles;
  icon?: BadgeIcons;
  size?: BadgeSizes;
  isNumber?: boolean;
  sx?: OverrideTheme;
}
type BadgeProps = BadgeMainProps & BadgeConstructProps;

/** @jsx jsx */

declare const Badge: FC<
  BadgeProps & React__default.HTMLAttributes<HTMLSpanElement>
>;

interface BoxProps extends React__default.HTMLAttributes<HTMLDivElement> {
  sx?: OverrideTheme;
  children?: React__default.ReactNode;
  withBorders?: boolean;
  customBorderPadding?: number | string;
  customBorderRadius?: number | string;
}

declare const Box: React.ForwardRefExoticComponent<
  BoxProps & React.RefAttributes<HTMLAttributes<HTMLDivElement>>
>;

interface ButtonGroupProps
  extends React__default.HTMLAttributes<HTMLDivElement> {
  children: React__default.ReactNode;
  isLoading?: boolean;
  sx?: OverrideTheme;
}

/** @jsx jsx */

declare const ButtonGroup: FC<ButtonGroupProps>;

type ButtonVariant =
  | "primary"
  | "secondary"
  | "destructive"
  | "primary-lighter"
  | "secondary-lighter"
  | "destructive-lighter"
  | "primary-ghost"
  | "secondary-ghost"
  | "destructive-ghost";
interface ButtonProps {
  id: string;
  name?: string;
  label?: string;
  variant?: ButtonVariant;
  icon?: ReactNode;
  iconLocation?: "start" | "end";
  secondaryIcon?: ReactNode;
  fullWidth?: boolean;
  collapseOnSmall?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode | string;
  compact?: boolean;
  inButtonGroup?: boolean;
  sx?: OverrideTheme;
  isLoading?: boolean;
}

/** @jsx jsx */

declare const Button: FC<
  ButtonProps & React__default.ButtonHTMLAttributes<HTMLButtonElement>
>;

interface CodeEditorProps {
  value: string;
  label?: string;
  mode?: string;
  tooltip?: string;
  editorHeight?: string | number;
  onChange: (value: string) => any;
  className?: string;
  helpTools?: React__default.ReactNode;
  sx?: OverrideTheme;
  horizontal?: boolean;
}

/** @jsx jsx */

declare const CodeMirrorWrapper: FC<CodeEditorProps>;

interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  tooltip?: string;
  overrideLabelClasses?: string;
  sx?: OverrideTheme;
}

/** @jsx jsx */

declare const Checkbox: FC<
  CheckboxProps & React__default.InputHTMLAttributes<HTMLInputElement>
>;

interface ExpandMenuProps {
  id: string;
  name?: string;
  label?: string;
  variant?: ButtonVariant;
  icon?: ReactNode;
  iconLocation?: "start" | "end";
  children?: ReactNode | string;
  dropMenuPosition?: "start" | "end" | "middle";
  compact?: boolean;
  dropArrow?: boolean;
  inButtonGroup?: boolean;
  forInputOptions?: boolean;
  sx?: OverrideTheme;
}

declare const ExpandMenu: FC<
  ExpandMenuProps & React__default.ButtonHTMLAttributes<HTMLButtonElement>
>;

interface GridCommonProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  sx?: OverrideTheme;
}
type ConditionalProps =
  | {
      container?: boolean;
      item?: never;
      wrap?: "nowrap" | "wrap-reverse" | "wrap";
      direction?: "column-reverse" | "column" | "row-reverse" | "row";
      columnSpacing?: number;
      rowSpacing?: number;
      xs?: never;
      sm?: never;
      md?: never;
      lg?: never;
      xl?: never;
    }
  | {
      container?: never;
      item?: boolean;
      wrap?: never;
      direction?: never;
      columnSpacing?: never;
      rowSpacing?: never;
      xs?: "auto" | "hidden" | number | boolean;
      sm?: "auto" | "hidden" | number | boolean;
      md?: "auto" | "hidden" | number | boolean;
      lg?: "auto" | "hidden" | number | boolean;
      xl?: "auto" | "hidden" | number | boolean;
    };
type GridProps = GridCommonProps & ConditionalProps;

/** @jsx jsx */

declare const Grid: FC<GridProps>;

type InputLabelOrientation = "horizontal" | "vertical";
type InputLabelSizeMode = "small" | "large";
interface InputLabelProps extends HTMLAttributes<HTMLLabelElement> {
  children?: ReactNode;
  sx?: OverrideTheme;
  noMinWidth?: boolean;
  htmlFor?: string;
  orientation?: InputLabelOrientation;
  inputSizeMode?: InputLabelSizeMode;
}

/** @jsx jsx */

declare const Index$2: FC<InputLabelProps>;

type LinkButtonVariant = "primary" | "neutral" | "destructive";
interface LinkButtonProps
  extends React__default.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  label?: any;
  variant?: LinkButtonVariant;
  sx?: OverrideTheme;
}

/** @jsx jsx */

declare const LinkButton: FC<LinkButtonProps>;

interface MDSCacheProviderTypes {
  cache: EmotionCache;
  children: React__default.ReactNode;
}

declare const Index$1: FC<MDSCacheProviderTypes>;

interface ModalBoxProps {
  onClose: () => void;
  open: boolean;
  title: React__default.ReactNode;
  children: React__default.ReactNode;
  widthLimit?: boolean;
  titleIcon?: React__default.ReactNode;
  backgroundOverlay?: boolean;
  customMaxWidth?: number | string;
  sx?: OverrideTheme;
}

/** @jsx jsx */

declare const ModalBox: FC<ModalBoxProps>;

type ProgressState = "progress" | "success" | "error" | "paused";
interface ProgressBarProps {
  variant?: "determinate" | "indeterminate";
  notificationLabel?: string;
  value?: number;
  maxValue?: number;
  progressLabel?: boolean;
  sx?: OverrideTheme;
  state?: ProgressState;
  barHeight?: number;
  transparentBG?: boolean;
}

/** @jsx jsx */

declare const ProgressBar: FC<ProgressBarProps>;

interface ThemeHandlerProps {
  darkMode?: boolean;
  customTheme?: Theme;
  children: any;
}

declare const ThemeHandler: FC<ThemeHandlerProps>;

type TooltipPlacement = "bottom" | "left" | "right" | "top";
interface TooltipProps {
  children: React__default.ReactElement;
  tooltip: React__default.ReactNode;
  errorProps?: any;
  placement?: TooltipPlacement;
}

/** @jsx jsx */

declare const Index: FC<TooltipProps>;

export {
  Accordion,
  Badge,
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  CodeMirrorWrapper as CodeEditor,
  ExpandMenu,
  Grid,
  Index$2 as InputLabel,
  LinkButton,
  Index$1 as MDSCacheProvider,
  ModalBox,
  ProgressBar,
  ThemeHandler,
  Index as Tooltip,
};
