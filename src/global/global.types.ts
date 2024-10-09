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
import { CSSObject } from "@emotion/serialize";
import { Theme } from "@emotion/react";

export interface ThemeColorItem {
  [key: string]: ColorVariant;
}

export interface ColorVariant {
  lightMode: string;
  darkMode: string;
}

export interface ButtonThemeProps {
  border: string;
  text: string;
  background: string;
  iconColor: string;
  shadow?: string;
}

export interface ButtonThemeStatesProps {
  enabled: ButtonThemeProps;
  disabled: ButtonThemeProps;
  hover: ButtonThemeProps;
  pressed: ButtonThemeProps;
}

export interface LoginPageThemeProps {
  formBG: string;
  formBorder?: string;
  formShadow?: string;
  bgFilter: string;
  promoBG: string;
  promoHeader: string;
  promoText: string;
  footerElements: string;
  footerDivider: string;
}

export interface PageHeaderThemeProps {
  color: string;
}

export interface TooltipThemeProps {
  background: string;
  color: string;
}

export interface CommonInputThemeProps {
  labelColor: string;
}

export interface CheckBoxThemeProps {
  checkBoxBorder: string;
  checkBoxBackground: string;
  checkBoxHoverBorder: string;
  checkBoxHoverBackground: string;
  checkBoxFocusBorder: string;
  checkBoxFocusBackground: string;
  checkBoxFocusShadow: string;
  checkBoxActiveCheckboxColor: string;
  checkBoxActiveBorder: string;
  checkBoxActiveBackground: string;
  checkBoxActiveHoverBackground: string;
  checkBoxActiveHoverBorder: string;
  checkBoxActiveHoverCheckboxColor: string;
  checkBoxFocusActiveBorder: string;
  checkBoxFocusActiveBackground: string;
  checkBoxFocusActiveHoverBackground: string;
  checkBoxFocusActiveCheckboxColor: string;
  disabledBorder: string;
  disabledBackground: string;
  disabledColor: string;
}

export interface RadioThemeProps {
  radioBorder: string;
  radioBackground: string;
  radioHoverBorder: string;
  radioActiveBorder: string;
  radioActiveBackground: string;
  radioActiveCheck: string;
  radioHoverBackground: string;
  radioHoverActiveBorder: string;
  radioHoverActiveBackground: string;
  radioHoverActiveCheck: string;
  radioFocusBorder: string;
  radioFocusBackground: string;
  radioFocusCheck: string;
  radioFocusActiveBorder: string;
  radioFocusActiveBackground: string;
  radioFocusActiveCheck: string;
  radioFocusShadow: string;
  radioDisabledBorder: string;
  radioDisabledBackground: string;
  radioDisabledCheck: string;
  labelColor: string;
  subLabelColor: string;
  descriptionColor: string;
}

export interface IconButtonThemeProps {
  buttonBG: string;
  activeBG: string;
  hoverBG: string;
  disabledBG: string;
  color: string;
  disabledColor?: string;
}

export interface ActionCustomButton {
  border: string;
  background: string;
  iconColor: string;
  disabledBorder: string;
  disabledBackground: string;
  disabledIconColor: string;
  hoverBorder: string;
  hoverBackground: string;
  hoverIconColor: string;
  activeBorder: string;
  activeBackground: string;
  activeIconColor: string;
}

export interface DataTableThemeProps {
  border: string;
  disabledBorder: string;
  disabledBG: string;
  selected: string;
  itemDisabled: string;
  hoverColor: string;
  titleColor: string;
  itemColor: string;
  actionButton?: ActionCustomButton;
}

export interface BackLinkThemeProps {
  color: string;
  arrow: string;
  hover: string;
}

export interface InputBoxThemeProps {
  border: string;
  hoverBorder: string;
  color: string;
  backgroundColor: string;
  placeholderColor: string;
  error: string;
  disabledBorder: string;
  disabledBackground: string;
  disabledText: string;
  disabledPlaceholder: string;
}

export interface BreadcrumbsThemeProps {
  elementsColor: string;
  selectedColor: string;
  hoverColor: string;
  hoverBG: string;
}

export interface ActionsListThemeProps {
  titleColor: string;
  containerBorderColor: string;
  backgroundColor: string;
  optionsTextColor: string;
  optionsBorder: string;
  optionsHoverTextColor: string;
  disabledOptionsTextColor: string;
}

export interface ScreenTitleThemeProps {
  subtitleColor: string;
  titleColor: string;
}

export interface IconThemeColorProps {
  accept: string;
  delete: string;
  default: string;
}

export interface ModalBoxThemeProps {
  overlayColor: string;
  containerColor: string;
  closeColor: string;
  closeHoverColor: string;
  closeHoverBG: string;
  titleColor: string;
  border?: string;
  iconColor: IconThemeColorProps;
}

export interface SwitchThemeProps {
  onLabelColor: string;
  offLabelColor: string;
  switchBackground: string;
  onBackgroundColor: string;
  bulletBorderColor: string;
  bulletBGColor: string;
  disabledBackground: string;
  disabledBulletBorderColor: string;
  disabledBulletBGColor: string;
  disabledOnBackground: string;
}

export interface DropdownSelectorThemeProps {
  backgroundColor: string;
  optionTextColor: string;
  selectedTextColor: string;
  selectedBGColor: string;
  hoverText: string;
  hoverBG: string;
  disabledText: string;
  border?: string;
  dangerText: string;
  dangerHoverBG: string;
  dangerHoverText: string;
}

export interface ReadBoxThemeProps {
  borderColor: string;
  backgroundColor: string;
  textColor: string;
}

export interface SignalColorsThemeProps {
  main: string;
  danger: string;
  warning: string;
  good: string;
  info: string;
  disabled: string;
  dark: string;
  clear: string;
  selectBlue?: string;
}

export interface MenuThemeProps {
  vertical?: {
    background: string;
    textColor: string;
    iconBorderColor: string;
    iconBGColor: string;
    hoverSelectedIconBorder: string;
    hoverSelectedBackground: string;
    hoverSelectedColor: string;
    sectionDividerColor: string;
    notificationColor: string;
    dropArrowBackground: string;
    dropArrowColor: string;
    menuCollapseColor: string;
    sectionLabelColor: string;
  };
  horizontal?: {
    menuHeaderBackground: string;
    barBackground: string;
    textColor: string;
    iconBorderColor: string;
    iconBGColor: string;
    hoverSelectedIconBorder: string;
    hoverSelectedBackground: string;
    hoverSelectedColor: string;
    sectionDividerColor: string;
    notificationColor: string;
    dropArrowBackground: string;
    dropArrowColor: string;
    dropBackground: string;
    dropHoverSelectedColor: string;
    noOptionsBar: string;
  };
}

interface TabButtonProps {
  labelColor: string;
  backgroundColor: string;
  hoverBackground: string;
  hoverLabelColor: string;
  selectedBackground: string;
  selectedLabelColor: string;
  disabledBackgroundColor: string;
  disabledColor: string;
}

export interface TabThemeProps {
  vertical?: {
    backgroundColor: string;
    buttons: TabButtonProps;
    borders: string;
  };
  horizontal?: {
    backgroundColor: string;
    selectedIndicatorColor: string;
    buttons: TabButtonProps;
    bottomBorder?: string;
  };
}

export interface CodeEditorThemeProps {
  backgroundColor: string;
  textColor: string;
  helpToolsBarBG: string;
  comment: string;
  entityTag: string;
  entity: string;
  sublimelinterGutterMark: string;
  constant: string;
  string: string;
  keyword: string;
  markupBold: string;
  codeEditorRegexp: string;
}

export interface TagVariantProps {
  background: string;
  label: string;
  deleteColor: string;
}

export interface TagThemeProps {
  primary: TagVariantProps;
  secondary: TagVariantProps;
  destructive: TagVariantProps;
}

interface SnackBarColorElements {
  backgroundColor: string;
  labelColor: string;
}

export interface SnackBarThemeProps {
  default: SnackBarColorElements;
  success: SnackBarColorElements;
  warning: SnackBarColorElements;
  error: SnackBarColorElements;
}

export interface InformativeColorElements {
  backgroundColor: string;
  borderColor: string;
  textColor: string;
}

export interface InformativeMessageThemeProps {
  default: InformativeColorElements;
  success: InformativeColorElements;
  warning: InformativeColorElements;
  error: InformativeColorElements;
}

export interface NotificationCountElements {
  backgroundColor: string;
  textColor: string;
}

export interface NotificationCountStyleProps {
  none: NotificationCountElements;
  info: NotificationCountElements;
  success: NotificationCountElements;
  warning: NotificationCountElements;
  danger: NotificationCountElements;
}

export interface WizardStepColorProps {
  stepLabelColor: string;
  selectedStepBG: string;
  selectedStepLabelColor: string;
  disabledLabelColor: string;
  borderColor?: string;
  buttonHoverBG?: string;
}

export interface WizardColorProps {
  stepsBackground: string;
  vertical: WizardStepColorProps;
  modal: WizardStepColorProps;
}

export interface SliderColorProps {
  railBG: string;
  bulletBG: string;
  disabledRail: string;
  disabledBullet: string;
}

export interface BoxThemeProps {
  border: string;
  backgroundColor: string;
  shadow: string;
}

export interface ValuePairThemeProps {
  labelColor: string;
  textColor: string;
  linkColor: string;
}

export interface ButtonGroupThemeProps {
  border: string;
  labelColor: string;
  background: string;
  hoverBackground: string;
  hoverLabelColor: string;
  activeBackground: string;
  activeLabelColor: string;
  disabledLabelColor: string;
  disabledBackground: string;
  secondaryLabelColor: string;
  secondaryBackground: string;
  selectedBackground: string;
  selectedLabelColor: string;
}

export interface DropdownOptionsThemeProps {
  hoverOptionBG: string;
  activeOptionBG: string;
  optionBG: string;
  optionLabel: string;
  dangerLabel: string;
  disabledLabel: string;
}

export interface BoxedIconThemeProps {
  bgColor: string;
  iconColor: string;
}

export interface PillElementThemeProps {
  bgColor: string;
  labelColor: string;
  borderColor: string;
}

export interface PillThemeProps {
  current: PillElementThemeProps;
  secondary: PillElementThemeProps;
  default: PillElementThemeProps;
}

export interface BadgeElementThemeProps {
  minimalColor: string;
  subtleBG: string;
  subtleLabel: string;
  boldBG: string;
  boldLabel: string;
}

export interface BadgeThemeProps {
  none: BadgeElementThemeProps;
  info: BadgeElementThemeProps;
  success: BadgeElementThemeProps;
  warning: BadgeElementThemeProps;
  danger: BadgeElementThemeProps;
  purple: BadgeElementThemeProps;
  rose: BadgeElementThemeProps;
  scooter: BadgeElementThemeProps;
  disabled: BadgeElementThemeProps;
}

export interface NotificationAlertThemeProps {
  highContrastBG: string;
  highContrastBorder: string;
  minimalContrastBG: string;
  minimalContrastBorder: string;
  iconColor: string;
  titleColor: string;
  contentColor: string;
  actionColor: string;
}

export interface NotificationAlertProps {
  neutral: NotificationAlertThemeProps;
  information: NotificationAlertThemeProps;
  success: NotificationAlertThemeProps;
  warning: NotificationAlertThemeProps;
  danger: NotificationAlertThemeProps;
}

export interface LinkButtonThemeProps {
  destructive: string;
  neutral: string;
  primary: string;
  disabled: string;
}

export interface ThemeDefinitionProps {
  bgColor: string;
  fontColor: string;
  borderColor: string;
  bulletColor: string;
  logoColor: string;
  logoLabelColor: string;
  logoLabelInverse: string;
  loaderColor: string;
  linkColor?: string;
  secondaryLinkColor?: string;
  boxBackground: string;
  mutedText: string;
  secondaryText: string;
  colors: { [key: string]: string };
  paddingSizes: { [key: string]: number };
  borderRadius: { [key: string]: number };
  boxShadows: { [key: string]: string };
  box?: BoxThemeProps;
  signalColors?: SignalColorsThemeProps;
  buttons?: {
    primary?: ButtonThemeStatesProps;
    secondary?: ButtonThemeStatesProps;
    destructive?: ButtonThemeStatesProps;
    "primary-lighter"?: ButtonThemeStatesProps;
    "secondary-lighter"?: ButtonThemeStatesProps;
    "destructive-lighter"?: ButtonThemeStatesProps;
    "primary-ghost"?: ButtonThemeStatesProps;
    "secondary-ghost"?: ButtonThemeStatesProps;
    "destructive-ghost"?: ButtonThemeStatesProps;
  };
  login?: LoginPageThemeProps;
  pageHeader?: PageHeaderThemeProps;
  tooltip?: TooltipThemeProps;
  commonInput?: CommonInputThemeProps;
  checkbox?: CheckBoxThemeProps;
  radioGroup?: RadioThemeProps;
  iconButton?: IconButtonThemeProps;
  dataTable?: DataTableThemeProps;
  backLink?: BackLinkThemeProps;
  inputBox?: InputBoxThemeProps;
  breadcrumbs?: BreadcrumbsThemeProps;
  actionsList?: ActionsListThemeProps;
  screenTitle?: ScreenTitleThemeProps;
  modalBox?: ModalBoxThemeProps;
  switchButton?: SwitchThemeProps;
  dropdownSelector?: DropdownSelectorThemeProps;
  readBox?: ReadBoxThemeProps;
  menu?: MenuThemeProps;
  tabs?: TabThemeProps;
  codeEditor?: CodeEditorThemeProps;
  tag?: TagThemeProps;
  snackbar?: SnackBarThemeProps;
  informativeMessage?: InformativeMessageThemeProps;
  notificationCount?: NotificationCountStyleProps;
  wizard?: WizardColorProps;
  slider?: SliderColorProps;
  valuePair?: ValuePairThemeProps;
  buttonGroup?: ButtonGroupThemeProps;
  dropdownOptions?: DropdownOptionsThemeProps;
  boxedIcon?: BoxedIconThemeProps;
  pill?: PillThemeProps;
  badge?: BadgeThemeProps;
  notificationAlert: NotificationAlertProps;
  linkButton: LinkButtonThemeProps;
}

export interface ThemeDefinition {
  colors: ColorThemeProps;
  shadows: ShadowsThemeProps;
  paddingSizes: PaddingThemeProps;
  borderRadius: BorderRadiusThemeProps;
}

export interface PaddingThemeProps {
  sizeXXXS: number;
  sizeXXS: number;
  sizeXS: number;
  sizeSM: number;
  size: number;
  sizeMD: number;
  sizeLG: number;
  sizeXL: number;
  sizeXXL: number;
}

export interface BorderRadiusThemeProps {
  borderRadiusXS: number;
  borderRadiusSM: number;
  borderRadius: number;
  borderRadiusLG: number;
  borderRadiusXLG: number;
}

export interface ShadowsThemeProps {
  "boxShadow-01": string;
  "boxShadow-02": string;
  "boxShadow-03": string;
  "boxShadow-04": string;
  "focusStyle-Light": string;
  "focusStyle-Dark": string;
  "contentShadow-Light": string;
}

export interface ColorThemeProps {
  "Color/Base/Royal/0": string;
  "Color/Base/Royal/1": string;
  "Color/Base/Royal/2": string;
  "Color/Base/Royal/3": string;
  "Color/Base/Royal/4": string;
  "Color/Base/Royal/5": string;
  "Color/Base/Royal/6": string;
  "Color/Base/Royal/7": string;
  "Color/Base/Royal/8": string;
  "Color/Base/Royal/9": string;
  "Color/Base/Royal/10": string;
  "Color/Base/Java/0": string;
  "Color/Base/Java/1": string;
  "Color/Base/Java/2": string;
  "Color/Base/Java/3": string;
  "Color/Base/Java/4": string;
  "Color/Base/Java/5": string;
  "Color/Base/Java/6": string;
  "Color/Base/Java/7": string;
  "Color/Base/Java/8": string;
  "Color/Base/Java/9": string;
  "Color/Base/Java/10": string;
  "Color/Base/Orange/0": string;
  "Color/Base/Orange/1": string;
  "Color/Base/Orange/2": string;
  "Color/Base/Orange/3": string;
  "Color/Base/Orange/4": string;
  "Color/Base/Orange/5": string;
  "Color/Base/Orange/6": string;
  "Color/Base/Orange/7": string;
  "Color/Base/Orange/8": string;
  "Color/Base/Orange/9": string;
  "Color/Base/Orange/10": string;
  "Color/Base/Sunset/0": string;
  "Color/Base/Sunset/1": string;
  "Color/Base/Sunset/2": string;
  "Color/Base/Sunset/3": string;
  "Color/Base/Sunset/4": string;
  "Color/Base/Sunset/5": string;
  "Color/Base/Sunset/6": string;
  "Color/Base/Sunset/7": string;
  "Color/Base/Sunset/8": string;
  "Color/Base/Sunset/9": string;
  "Color/Base/Sunset/10": string;
  "Color/Neutral/Text/colorText": string;
  "Color/Base/Black": string;
  "Color/Base/White": string;
  "Color/Neutral/Text/colorTextSecondary": string;
  "Color/Neutral/Text/colorTextTertiary": string;
  "Color/Neutral/Text/colorTextQuaternary": string;
  "Color/Neutral/Text/colorTextLightSolid": string;
  "Color/Neutral/Text/colorTextHeading": string;
  "Color/Neutral/Text/colorTextLabel": string;
  "Color/Neutral/Text/colorTextDescription": string;
  "Color/Neutral/Text/colorTextDisabled": string;
  "Color/Neutral/Text/colorTextPlaceholder": string;
  "Color/Neutral/Icon/colorIcon": string;
  "Color/Neutral/Icon/colorIconHover": string;
  "Color/Neutral/colorWhite": string;
  "Color/Neutral/colorBgBase": string;
  "Color/Neutral/transparent": string;
  "Color/Neutral/Bg/colorBgContainer": string;
  "Color/Neutral/Bg/colorBgOverlay": string;
  "Color/Neutral/Bg/colorBgShell": string;
  "Color/Neutral/colorBlack": string;
  "Color/Neutral/Bg/colorBgSections": string;
  "Color/Neutral/Border/colorBorderMinimal": string;
  "Color/Neutral/Border/colorBorderSubtle": string;
  "Color/Neutral/Border/colorBorderBold": string;
  "Color/Base/Shark/0": string;
  "Color/Base/Shark/1": string;
  "Color/Base/Shark/2": string;
  "Color/Base/Shark/3": string;
  "Color/Base/Shark/4": string;
  "Color/Base/Shark/5": string;
  "Color/Base/Shark/6": string;
  "Color/Base/Shark/7": string;
  "Color/Base/Shark/8": string;
  "Color/Base/Shark/9": string;
  "Color/Base/Shark/10": string;
  "Color/Neutral/Bg/colorBgElevated": string;
  "Color/Brand/Primary/colorPrimary": string;
  "Color/Brand/Primary/colorPrimaryBg": string;
  "Color/Brand/Primary/colorPrimaryBgHover": string;
  "Color/Brand/Link/colorLink": string;
  "Color/Documentation": string;
  "Color/Brand/Link/colorLinkHover": string;
  "Color/Brand/Primary/colorPrimaryHover": string;
  "Color/Brand/Primary/colorPrimaryBorder": string;
  "Color/Brand/Primary/colorPrimaryBorderHover": string;
  "Color/Brand/Primary/colorPrimaryText": string;
  "Color/Brand/Primary/colorPrimaryTextHover": string;
  "Color/Brand/Link/colorLinkVisited": string;
  "Color/Brand/Primary/colorPrimaryActive": string;
  "Color/Brand/Warning/colorPrimary": string;
  "Color/Brand/Warning/colorPrimaryActive": string;
  "Color/Brand/Warning/colorPrimaryHover": string;
  "Color/Brand/Warning/colorPrimaryBg": string;
  "Color/Brand/Warning/colorPrimaryBgHover": string;
  "Color/Brand/Warning/colorPrimaryBorder": string;
  "Color/Brand/Warning/colorPrimaryBorderHover": string;
  "Color/Brand/Warning/colorPrimaryText": string;
  "Color/Brand/Warning/colorPrimaryTextHover": string;
  "Color/Brand/Success/colorPrimary": string;
  "Color/Brand/Success/colorPrimaryActive": string;
  "Color/Brand/Success/colorPrimaryHover": string;
  "Color/Brand/Success/colorPrimaryBg": string;
  "Color/Brand/Success/colorPrimaryBgHover": string;
  "Color/Brand/Success/colorPrimaryBorder": string;
  "Color/Brand/Success/colorPrimaryBorderHover": string;
  "Color/Brand/Success/colorPrimaryText": string;
  "Color/Brand/Success/colorPrimaryTextHover": string;
  "Color/Brand/Error/colorPrimary": string;
  "Color/Brand/Error/colorPrimaryActive": string;
  "Color/Brand/Error/colorPrimaryHover": string;
  "Color/Brand/Error/colorPrimaryBg": string;
  "Color/Brand/Error/colorPrimaryBgHover": string;
  "Color/Brand/Error/colorPrimaryBorder": string;
  "Color/Brand/Error/colorPrimaryBorderHover": string;
  "Color/Brand/Error/colorPrimaryText": string;
  "Color/Brand/Error/colorPrimaryTextHover": string;
  "Color/Brand/Control/colorBgActive": string;
  "Color/Brand/Control/colorBgHover": string;
  "Color/Brand/Info/colorPrimary": string;
  "Color/Brand/Info/colorPrimaryActive": string;
  "Color/Brand/Info/colorPrimaryHover": string;
  "Color/Brand/Info/colorPrimaryBg": string;
  "Color/Brand/Info/colorPrimaryBgHover": string;
  "Color/Brand/Info/colorPrimaryBorder": string;
  "Color/Brand/Info/colorPrimaryBorderHover": string;
  "Color/Brand/Info/colorPrimaryText": string;
  "Color/Brand/Info/colorPrimaryTextHover": string;
  "Color/Brand/Neutral/colorPrimary": string;
  "Color/Brand/Neutral/colorPrimaryActive": string;
  "Color/Brand/Neutral/colorPrimaryHover": string;
  "Color/Brand/Neutral/colorPrimaryBg": string;
  "Color/Brand/Neutral/colorPrimaryBgHover": string;
  "Color/Brand/Neutral/colorPrimaryBorder": string;
  "Color/Brand/Neutral/colorPrimaryBorderHover": string;
  "Color/Brand/Neutral/colorPrimaryText": string;
  "Color/Brand/Neutral/colorPrimaryTextHover": string;
  "Color/Neutral/Bg/colorBgDisabled": string;
  "Color/Brand/_minio/Raspberry": string;
  "Color/Brand/_minio/Midnight": string;
  "Color/Brand/_minio/Nautical": string;
  "Color/Brand/_minio/Meridian": string;
  "Color/Brand/_minio/Glaicer": string;
  "Color/Neutral/Border/colorBorderStrong": string;
  "Color/Neutral/Bg/colorBgContrast": string;
  "Color/Base/Purple/0": string;
  "Color/Base/Purple/1": string;
  "Color/Base/Purple/2": string;
  "Color/Base/Purple/3": string;
  "Color/Base/Purple/4": string;
  "Color/Base/Purple/5": string;
  "Color/Base/Purple/6": string;
  "Color/Base/Purple/7": string;
  "Color/Base/Purple/8": string;
  "Color/Base/Purple/9": string;
  "Color/Base/Purple/10": string;
  "Color/Base/Scooter/0": string;
  "Color/Base/Scooter/1": string;
  "Color/Base/Scooter/2": string;
  "Color/Base/Scooter/3": string;
  "Color/Base/Scooter/4": string;
  "Color/Base/Scooter/5": string;
  "Color/Base/Scooter/6": string;
  "Color/Base/Scooter/7": string;
  "Color/Base/Scooter/8": string;
  "Color/Base/Scooter/9": string;
  "Color/Base/Scooter/10": string;
  "Color/Base/Rose/0": string;
  "Color/Base/Rose/1": string;
  "Color/Base/Rose/2": string;
  "Color/Base/Rose/3": string;
  "Color/Base/Rose/4": string;
  "Color/Base/Rose/5": string;
  "Color/Base/Rose/6": string;
  "Color/Base/Rose/7": string;
  "Color/Base/Rose/8": string;
  "Color/Base/Rose/9": string;
  "Color/Base/Rose/10": string;
  "Color/Dataviz/1": string;
  "Color/Dataviz/2": string;
  "Color/Dataviz/3": string;
  "Color/Dataviz/4": string;
  "Color/Dataviz/5": string;
  "Color/Dataviz/6": string;
  "Color/Dataviz/7": string;
  "Color/Dataviz/8": string;
  "Color/Dataviz/9": string;
  "Color/Dataviz/10": string;
  "Color/Dataviz/11": string;
  "Color/Dataviz/12": string;
  "Color/Dataviz/13": string;
  "Color/Dataviz/14": string;
  "Color/Dataviz/15": string;
  "Color/Dataviz/none": string;
  "Color/Neutral/Icon/colorIconDisabled": string;
  "Color/Neutral/Text/colorTextContrast": string;
  "Color/Brand/Covers/colorManager": string;
  "Color/Brand/Covers/colorSourceFile": string;
  "Color/Brand/Covers/colorPayground": string;
  "Color/Brand/Covers/colorArchive": string;
  "Color/Brand/Covers/colorLibrary": string;
  "Color/Code/1": string;
  "Color/Code/2": string;
  "Color/Code/3": string;
  "Color/Code/4": string;
  "Color/Code/5": string;
  "Color/Code/6": string;
  "Color/Code/7": string;
  "Color/Code/8": string;
  "Color/Code/9": string;
  "Color/Base/Gray/1": string;
  "Color/Neutral/Bg/colorBgFields": string;
  "Color/Brand/_gradient/Primary/colorTop": string;
  "Color/Brand/_gradient/Primary/colorBottom": string;
  "Color/Brand/_gradient/Detructive/colorTop": string;
  "Color/Brand/_gradient/Detructive/colorBottom": string;
  "Color/Brand/_gradient/Primary/colorTopHover": string;
  "Color/Brand/_gradient/Primary/colorBottomHover": string;
  "Color/Brand/_gradient/Detructive/colorTopHover": string;
  "Color/Brand/_gradient/Detructive/colorBottomHover": string;
}

export interface SelectOption {
  label: string;
  value: string;
  icon?: React.ReactNode;
  indicator?: React.ReactNode;
  extraValue?: any;
  disabled?: boolean;
  subLabel?: string;
  description?: string;
  danger?: boolean;
}

export interface IBytesCalc {
  total: number;
  unit: string;
}

// Components Styling Override type

export type OverrideTheme =
  | CSSObject
  | ((theme: Theme) => CSSObject)
  | undefined;
