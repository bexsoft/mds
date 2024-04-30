import React, { FC, MouseEventHandler, ReactNode, SVGProps, HTMLAttributes } from "react";
import { CSSObject, DefaultTheme } from "styled-components";
import { SortDirectionType } from "react-virtualized";
import { DateTime } from "luxon";
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
    checkBoxColor: string;
    disabledBorder: string;
    disabledColor: string;
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
interface _TabButtonProps1 {
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
        buttons: _TabButtonProps1;
        borders: string;
    };
    horizontal?: {
        backgroundColor: string;
        selectedIndicatorColor: string;
        buttons: _TabButtonProps1;
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
    outlineColor?: string;
    label: string;
    deleteColor: string;
}
export interface TagThemeProps {
    default: TagVariantProps;
    secondary: TagVariantProps;
    warn: TagVariantProps;
    alert: TagVariantProps;
    ok: TagVariantProps;
    grey: TagVariantProps;
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
export interface BadgeColorElements {
    backgroundColor: string;
    textColor: string;
}
export interface BadgeStyleProps {
    alert: BadgeColorElements;
    default: BadgeColorElements;
    secondary: BadgeColorElements;
    warn: BadgeColorElements;
    ok: BadgeColorElements;
    grey: BadgeColorElements;
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
    colors: {
        [key: string]: string;
    };
    box?: BoxThemeProps;
    signalColors?: SignalColorsThemeProps;
    buttons?: {
        regular?: ButtonThemeStatesProps;
        callAction?: ButtonThemeStatesProps;
        secondary?: ButtonThemeStatesProps;
        text?: ButtonThemeStatesProps;
        subAction?: ButtonThemeStatesProps;
    };
    roundedButtons?: {
        regular?: ButtonThemeStatesProps;
    };
    login?: LoginPageThemeProps;
    pageHeader?: PageHeaderThemeProps;
    tooltip?: TooltipThemeProps;
    commonInput?: CommonInputThemeProps;
    checkbox?: CheckBoxThemeProps;
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
    badge?: BadgeStyleProps;
    wizard?: WizardColorProps;
    slider?: SliderColorProps;
    valuePair?: ValuePairThemeProps;
    buttonGroup?: ButtonGroupThemeProps;
    dropdownOptions?: DropdownOptionsThemeProps;
    boxedIcon?: BoxedIconThemeProps;
    pill?: PillThemeProps;
}
export interface SelectOption {
    label: string;
    value: string;
    icon?: React.ReactNode;
    indicator?: React.ReactNode;
    extraValue?: any;
    disabled?: boolean;
}
export interface IBytesCalc {
    total: number;
    unit: string;
}
export type OverrideTheme = CSSObject | ((theme: DefaultTheme) => CSSObject) | undefined;
export const themeColors: ThemeColorItem;
export const breakPoints: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
};
export const calculateBytes: (x: string | number, showDecimals?: boolean, roundFloor?: boolean) => IBytesCalc;
interface ThemeHandlerProps {
    darkMode?: boolean;
    customTheme?: ThemeDefinitionProps;
    children: any;
}
export const lightColors: {
    white: string;
    sectionOneBG: string;
    defaultFontColor: string;
    bulletColor: string;
    borderColor: string;
    boxBackground: string;
    mainGrey: string;
    disabledGrey: string;
    hoverGrey: string;
    pressedGrey: string;
    actionDisabledGrey: string;
    mainBlue: string;
    hoverBlue: string;
    pressedBlue: string;
    mainRed: string;
    hoverRed: string;
    lightRed: string;
    divisorColor: string;
    disabledBGGrey: string;
    disabledInnerGrey: string;
    logoLabel: string;
    logoLabelInverse: string;
    promoBlue: string;
    footerDivider: string;
    promoBG: string;
    loaderColor: string;
    headerBG: string;
    headerBorder: string;
    headerColor: string;
    tooltipBG: string;
    tooltipColor: string;
    labelColor: string;
    mainGreen: string;
    checkBoxBorder: string;
    iconButtonBG: string;
    iconButtonActive: string;
    iconButtonHover: string;
    iconButtonDisabled: string;
    iconButtonColor: string;
    backLinkColor: string;
    backLinkArrow: string;
    backLinkHover: string;
    commonLinkColor: string;
    breadcrumbsBackground: string;
    breadcrumbsBackBorder: string;
    breadcrumbsText: string;
    actionsListBorder: string;
    disabledActionsColor: string;
    optionTextColor: string;
    modalCloseColor: string;
    modalCloseHoverBG: string;
    modalOverlayBG: string;
    bulletBGColor: string;
    placeholder: string;
    readBoxTextColor: string;
    secondAction: string;
    secondActionHover: string;
    secondActionActive: string;
    mainOrange: string;
    menuBackground: string;
    menuDropArrowColor: string;
    menuDropArrowBackground: string;
    menuSelectedOption: string;
    menuCommonColor: string;
    menuColorDivider: string;
    menuCollapseColor: string;
    menuIconBG: string;
    menuIconBorder: string;
    tabBorder: string;
    codeEditorComment: string;
    codeEditorEntityTag: string;
    codeEditorEntity: string;
    codeEditorSublimelinterGutterMark: string;
    codeEditorConstant: string;
    codeEditorString: string;
    codeEditorKeyword: string;
    codeEditorMarkupBold: string;
    codeEditorRegexp: string;
    linkColor: string;
    mutedText: string;
    disabledOnSwitchBG: string;
    sliderDisabledBG: string;
};
export const darkColors: {
    dark: string;
    sectionOneBG: string;
    defaultFontColor: string;
    bulletColor: string;
    borderColor: string;
    boxBackground: string;
    mainGrey: string;
    disabledGrey: string;
    hoverGrey: string;
    borderPressedGrey: string;
    pressedGrey: string;
    mainWhite: string;
    disabledWhite: string;
    hoverWhite: string;
    pressedWhite: string;
    mainRed: string;
    hoverRed: string;
    divisorColor: string;
    disabledBGGrey: string;
    disabledInnerGrey: string;
    logoLabel: string;
    logoLabelInverse: string;
    footerDivider: string;
    footerColor: string;
    promoBG: string;
    loaderColor: string;
    headerBG: string;
    headerBorder: string;
    headerColor: string;
    tooltipBG: string;
    tooltipColor: string;
    labelColor: string;
    mainGreen: string;
    checkBoxBorder: string;
    iconButtonBG: string;
    iconButtonActive: string;
    iconButtonHover: string;
    iconButtonDisabled: string;
    iconButtonColor: string;
    backLinkColor: string;
    backLinkArrow: string;
    backLinkHover: string;
    modalCloseColor: string;
    modalCloseHoverBG: string;
    modalOverlayBG: string;
    bulletBGColor: string;
    disabledSwitchBG: string;
    disabledOnSwitchBG: string;
    disabledBulletBG: string;
    placeholder: string;
    readBoxTextColor: string;
    secondAction: string;
    secondActionHover: string;
    secondActionActive: string;
    mainOrange: string;
    menuBackground: string;
    menuDropArrowColor: string;
    menuDropArrowBackground: string;
    menuSelectedOption: string;
    menuCommonColor: string;
    menuColorDivider: string;
    menuCollapseColor: string;
    menuIconBG: string;
    menuIconBorder: string;
    menuHoverSelectedBorderIcon: string;
    menuHoverSelectedBG: string;
    codeEditorComment: string;
    codeEditorEntityTag: string;
    codeEditorEntity: string;
    codeEditorSublimelinterGutterMark: string;
    codeEditorConstant: string;
    codeEditorString: string;
    codeEditorKeyword: string;
    codeEditorMarkupBold: string;
    codeEditorRegexp: string;
    linkColor: string;
    mutedText: string;
    disabledSliderBullet: string;
};
export const lightV2: {
    white: string;
    fontColor: string;
    mainBackgroundColor: string;
    menuSelectionColor: string;
    switchBG: string;
    secondaryBlue: string;
    green: string;
    lightGreen: string;
    orange: string;
    lightOrange: string;
    danger: string;
    lightRed: string;
    borderColor: string;
    disabledGrey: string;
    disabledGreyText: string;
    disabledBlue: string;
    disabledBlueText: string;
    disabledBlueRegular: string;
    disabledSecondary: string;
    disabledSecondaryText: string;
    blueBorderActionButton: string;
    redBorder: string;
    disabledRed: string;
    disabledRedText: string;
    mutedText: string;
    headerLabelText: string;
    plainIconButtonBorder: string;
    plainIconButtonBG: string;
    plainIconButtonColor: string;
    linkColor: string;
    modalCloseColor: string;
    modalBorderColor: string;
    modalOverlayBG: string;
    modalTitleColor: string;
    buttonDisabledBG: string;
    buttonDisabledLabel: string;
    defaultButtonPressed: string;
    bgColorBgShell: string;
    colorTextLabel: string;
    colorBorderSubtle: string;
    colorBgHover: string;
    errorColorPrimaryText: string;
    colorBorder: string;
    colorText: string;
    colorBgDisabled: string;
    colorTextDisabled: string;
};
export const lightTheme: ThemeDefinitionProps;
export const darkTheme: ThemeDefinitionProps;
export const ThemeHandler: FC<ThemeHandlerProps>;
export const GlobalStyles: import("react").NamedExoticComponent<import("styled-components").ExecutionProps & object>;
export interface ButtonProps {
    id: string;
    name?: string;
    label?: string;
    variant?: "regular" | "callAction" | "secondary" | "text" | "subAction";
    icon?: ReactNode;
    iconLocation?: "start" | "end";
    fullWidth?: boolean;
    disabled?: boolean;
    collapseOnSmall?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    children?: ReactNode | string;
    compact?: boolean;
    sx?: OverrideTheme;
}
export interface ConstructProps {
    parentChildren: ReactNode | string | undefined;
}
export const Button: FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>>;
export interface ApplicationLogoProps {
    applicationName: "console" | "operator" | "directpv" | "kes" | "subnet" | "subnetops" | "cloud" | "releases" | "vmbroker" | "eureka" | "kms" | "loadbalancer" | "index" | "cache" | "monitor" | "observe" | "missioncontrol" | "globalconsole" | "minio" | "enterprise";
    subVariant?: "simple" | "AGPL" | "standard" | "enterprise" | "new" | "enterpriseos" | "enterpriseosvertical";
    inverse?: boolean;
    onClick?: React.MouseEventHandler<any> | undefined;
}
export const ThemedLogo: FC<SVGProps<any>>;
export const ApplicationLogo: FC<ApplicationLogoProps>;
interface GridCommonProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    sx?: OverrideTheme;
}
type ConditionalProps = {
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
} | {
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
export type GridProps = GridCommonProps & ConditionalProps;
export const Grid: FC<GridProps>;
interface LoginWrapperProps {
    logoProps: ApplicationLogoProps;
    form: ReactNode;
    formFooter?: ReactNode;
    promoHeader?: ReactNode;
    promoInfo?: ReactNode;
    backgroundAnimation?: boolean;
}
export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
    sx?: OverrideTheme;
    children?: React.ReactNode;
    withBorders?: boolean;
    customBorderPadding?: number | string;
    useBackground?: boolean;
}
export const Box: React.ForwardRefExoticComponent<BoxProps & React.RefAttributes<React.HTMLAttributes<HTMLDivElement>>>;
export const LoginWrapper: FC<LoginWrapperProps>;
export const Loader: FC<SVGProps<any>>;
export interface PageHeaderMainProps {
    label: React.ReactNode;
    middleComponent?: React.ReactNode;
    actions?: React.ReactNode;
}
export interface PageHeaderConstruct {
    sx?: OverrideTheme;
}
export type PageHeaderProps = PageHeaderMainProps & PageHeaderConstruct;
export const PageHeader: FC<PageHeaderProps & HTMLAttributes<HTMLDivElement>>;
export interface TooltipProps {
    children: React.ReactElement;
    tooltip: React.ReactNode;
    errorProps?: any;
    placement?: "bottom" | "left" | "right" | "top";
}
export interface TooltipBuild {
    placement: "bottom" | "left" | "right" | "top";
}
export interface TooltipConstructProps {
    placement: "bottom" | "left" | "right" | "top";
    content: React.ReactNode;
    anchorEl: (EventTarget & HTMLSpanElement) | null;
}
export const Tooltip: FC<TooltipProps>;
export type CommonHelpTipPlacement = "bottom" | "left" | "right" | "top";
export interface HelpTipProps {
    children: any;
    content: React.ReactNode;
    errorProps?: any;
    placement?: CommonHelpTipPlacement;
}
export interface HelpTipBuild {
    placement: CommonHelpTipPlacement;
}
export interface HelpTipConstructProps {
    placement: CommonHelpTipPlacement;
    content: React.ReactNode;
    anchorEl: (EventTarget & HTMLSpanElement) | null;
}
interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
    label?: string;
    tooltip?: string;
    overrideLabelClasses?: string;
    sx?: OverrideTheme;
    helpTip?: React.ReactNode;
    helpTipPlacement?: CommonHelpTipPlacement;
}
export interface InputLabelProps extends HTMLAttributes<HTMLLabelElement> {
    children?: ReactNode;
    sx?: OverrideTheme;
    noMinWidth?: boolean;
    htmlFor?: string;
    helpTip?: ReactNode;
    helpTipPlacement?: CommonHelpTipPlacement;
    orientation?: "horizontal" | "vertical";
}
export const EditorThemeSwitchIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const DisabledIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const FormatDrivesIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const SpeedtestIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const StorageIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const VersionIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const LambdaBalloonIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const HelpIconFilled: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const ShareIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const EditIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const JSONIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const WarnIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const CircleIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const ObjectBrowserFolderIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const RedoIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const ChangeAccessPolicyIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const ServersIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const ClosePanelIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const MinIOTierIconXs: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const DashboardIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const ClustersIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const MirroringIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const ToolsIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const ArrowIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const ServiceAccountIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const OnlineRegistrationBackIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const ConfigurationsListIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const WatchIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const ServiceAccountCredentialsIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const HealIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const S3TierIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const ArrowRightIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const PreviewIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const BucketQuotaIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const SelectMultipleIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const EditYamlIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const ReportedUsageIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const PrometheusIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const ConfirmModalIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const NextArrowIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const PermissionIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const GoogleTierIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const AccountIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const AddAccessRuleIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const UptimeIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const EnabledIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const ObjectPreviewIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const TenantsOutlineIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const DrivesIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const CreateNewPathIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const HelpIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const ReportedUsageFullIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const AddNewTagIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const OnlineRegistrationIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const DiagnosticsIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const ObjectBrowser1Icon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const MinIOTierIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const WarpIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const CopyIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const OpenListIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const MultipleBucketsIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const AddMembersToGroupIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const OfflineRegistrationBackIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const PrometheusErrorIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const LifecycleConfigIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const DriveFormatErrorsIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const VerifiedIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const CallHomeFeatureIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const TraceIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const AddIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const GoogleTierIconXs: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const LambdaNotificationsIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const BackSettingsIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const LicenseIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const RemoveIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const TiersNotAvailableIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const PerformanceFeatureIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const AddFolderIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const S3TierIconXs: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const IAMPoliciesIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const UsersIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const EgressIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const BucketEncryptionIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const DocumentationIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const DiagnosticsFeatureIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const PasswordKeyIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const TrashIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const EventSubscriptionIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const ComputerLineIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const AllBucketsIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const LambdaIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const GroupsIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const DownloadStatIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const UploadFolderIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const TiersIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const NewAccountIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const CreateGroupIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const CollapseIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const ConfirmDeleteIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const OfflineRegistrationIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const TenantsIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const UploadFile: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const CreateIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const NewPoolIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const SyncIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const LogoutIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const AzureTierIconXs: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const TotalObjectsIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const CreateUserIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const BucketsIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const UploadStatIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const BucketReplicationIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const ObjectManagerIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const ObjectBrowserIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const RecoverIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const AzureTierIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const CalendarIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const ServiceAccountsIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const LogsIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const HardBucketQuotaIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const ConsoleIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const ChangePasswordIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const LockIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const BackCaretIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const VersionsIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const NewPathIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const ObjectInfoIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const MetadataIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const LegalHoldIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const RetentionIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const TagsIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const AlertCloseIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const OpenSourceIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const ArrowRightLink: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const LicenseDocIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const SelectAllIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const BackIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const DeleteNonCurrentIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const EditTenantIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const SuccessIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const NetworkGetIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const NetworkPutIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const RemoveAllIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const CancelledIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const EditTagIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const LinkIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const AlertIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const InfoIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const ConsoleAgpl: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const ConsoleStandard: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const ConsoleEnterprise: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const AGPLV3LightLogo: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const AGPLV3Logo: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const EnterpriseLightLogo: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const StandardLightLogo: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const AGPLV3DarkLogo: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const LDAPIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const OIDCIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const StarIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const ExtraFeaturesIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const CollapseCaret: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const ExpandCaret: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const CertificateIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const TierOnlineIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const TierOfflineIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const WarnFilledIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const BoxArrowUp: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const BoxArrowDown: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const UserFilledIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const LockFilledIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const FilterIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const FolderIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const ViewColumnIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const ArrowDropUp: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const ArrowDropDown: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const CloudIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const DisableIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const FormatDriveIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const ReportIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const VisibilityOnIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const VisibilityOffIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const AccessRuleIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const TimeIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const CollapseMenuIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const AudioIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const AudioIconMute: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const ChatIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const SendMessageIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const CancelledAudioIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const ThumbsUpIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const ThumbsDownIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const AttachFileIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const CheckCircleIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const CodeIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const CompressIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const FindReplaceIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const FirstAidIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const LockOpenIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const LoginIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const PendingItemsIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const PublicIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const KeyIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const WebhookIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const ExpandIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const NextCaretIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const PrevCaretIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const DarkModeIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const LightModeIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const AutoModeIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const ShuffleIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const LanguageIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const EventBusyIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const ExpandLeftCaret: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const CacheIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const CatalogMetricsIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const CatalogIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const CountObjectsIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const DBIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const EnvironmentVariablesIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const FirewallIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const ImagesIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const IngestIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const KeyManagementIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const NetworkingIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const ObjectsIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const ObservabilityOverviewIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const ObservabilityIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const PodPlacementIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const PoliciesIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const QueryEditorIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const ResourcesIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const SettingsInMenuIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const SystemIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const ExpandOptionsIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const HelpTip: FC<HelpTipProps>;
export const InputLabel: FC<InputLabelProps>;
export const Checkbox: FC<CheckboxProps & React.InputHTMLAttributes<HTMLInputElement>>;
export interface IconBase {
    label?: string;
    size?: "small" | "medium" | "large" | string;
    sx?: OverrideTheme;
    children: React.ReactNode;
}
export type IconButtonProps = IconBase & React.ButtonHTMLAttributes<HTMLButtonElement>;
export const IconButton: FC<IconButtonProps>;
export const actionsTypes: readonly ["view", "edit", "delete", "description", "share", "cloud", "console", "download", "disable", "format", "preview"];
export type PredefinedActionTypes = (typeof actionsTypes)[number];
export interface ItemActions {
    tooltip?: string;
    type: PredefinedActionTypes | React.ReactNode;
    sendOnlyId?: boolean;
    isDisabled?: boolean | ((itemValue: any) => boolean);
    showLoader?: boolean | ((itemValue: any) => boolean);
    onClick?(valueToSend: any): any;
}
export interface IColumns {
    label: string;
    elementKey?: string;
    renderFunction?: (input: any) => any;
    renderFullObject?: boolean;
    globalClass?: any;
    rowClass?: any;
    width?: number;
    headerTextAlign?: string;
    contentTextAlign?: string;
    enableSort?: boolean;
}
export interface IInfiniteScrollConfig {
    loadMoreRecords: (indexElements: {
        startIndex: number;
        stopIndex: number;
    }) => Promise<any>;
    recordsCount: number;
}
export interface ITableSortInfo {
    sortBy: string;
    sortDirection: SortDirectionType;
}
export interface ISortConfig {
    onSortClick: (val: ITableSortInfo) => any;
    currentSort: string;
    currentDirection: "ASC" | "DESC" | undefined;
}
export interface DataTableProps {
    itemActions?: ItemActions[] | null;
    columns: IColumns[];
    onSelect?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    idField?: string;
    isLoading?: boolean;
    loadingMessage?: React.ReactNode;
    records: any[];
    entityName?: string;
    selectedItems?: string[];
    customEmptyMessage?: string;
    customPaperHeight?: string;
    noBackground?: boolean;
    columnsSelector?: boolean;
    textSelectable?: boolean;
    columnsShown?: string[];
    onColumnChange?: (column: string) => any;
    autoScrollToBottom?: boolean;
    infiniteScrollConfig?: IInfiniteScrollConfig;
    disabled?: boolean;
    onSelectAll?: () => void;
    rowStyle?: ({ index, }: {
        index: number;
    }) => "deleted" | "" | React.CSSProperties;
    parentClassName?: string;
    sx?: OverrideTheme;
    rowHeight?: number;
    sortEnabled?: boolean | string[] | ISortConfig;
    sortCallBack?: (info: ITableSortInfo) => void;
}
export interface DataTableWrapperProps extends HTMLAttributes<HTMLDivElement> {
    disabled?: boolean;
    customPaperHeight?: string | number;
    noBackground?: boolean;
    sx?: OverrideTheme;
    rowHeight: number;
}
export interface IActionButton {
    tooltip?: string;
    type: PredefinedActionTypes | React.ReactNode;
    onClick?: (id: string) => any;
    valueToSend: any;
    selected: boolean;
    sendOnlyId?: boolean;
    idField: string;
    disabled: boolean;
}
export interface ColumnSelectorProps {
    open: boolean;
    closeTriggerAction: () => void;
    onSelect: (column: string) => void;
    columns: IColumns[];
    selectedOptionIDs: string[];
    sx?: OverrideTheme;
    anchorEl?: (EventTarget & HTMLElement) | null;
}
export interface ColumnSelectorConstructProps {
    sx?: OverrideTheme;
}
export const DownloadIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const DataTable: FC<DataTableProps>;
export interface BackLinkProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    sx?: OverrideTheme;
    label?: string;
}
export const BackLink: FC<BackLinkProps>;
export interface HelpBoxProps {
    icon?: React.ReactNode;
    title: string;
    help: string | React.ReactNode | React.ReactNode[];
}
export interface ScreenTitleProps {
    icon: React.ReactNode;
    subTitle?: React.ReactNode;
    title: string;
    actions: React.ReactNode;
    titleOptions?: ScreenTitleOptions[];
    sx?: OverrideTheme;
}
export interface ScreenTitleContainerProps {
    subTitle?: React.ReactNode;
    titleOptions?: ScreenTitleOptions[];
    sx?: OverrideTheme;
    bottomBorder?: boolean;
}
export interface ScreenTitleOptions {
    title: string;
    value: string;
}
export interface IBoxedIconProps {
    children: React.ReactNode;
    sx?: OverrideTheme;
}
export const BoxedIcon: FC<IBoxedIconProps>;
export const ScreenTitle: FC<ScreenTitleProps & HTMLAttributes<HTMLDivElement>>;
export const HelpBox: FC<HelpBoxProps & HTMLAttributes<HTMLDivElement>>;
export interface SectionTitleProps {
    separator?: boolean;
    actions?: React.ReactNode;
    icon?: React.ReactNode;
    children: React.ReactNode;
    sx?: OverrideTheme;
}
export const SectionTitle: FC<SectionTitleProps & HTMLAttributes<HTMLDivElement>>;
export interface FormLayoutProps {
    sx?: OverrideTheme;
    children?: React.ReactNode;
    title?: string;
    icon?: React.ReactNode;
    helpBox?: React.ReactNode;
    withBorders?: boolean;
    containerPadding?: boolean;
}
export const FormLayout: FC<FormLayoutProps>;
export interface PageLayoutProps {
    variant?: "constrained" | "full";
    children: React.ReactNode;
    className?: string;
    sx?: OverrideTheme;
}
export const PageLayout: FC<PageLayoutProps & HTMLAttributes<HTMLDivElement>>;
interface MainContainerProps {
    menu?: React.ReactElement;
    children: React.ReactElement;
    horizontal?: boolean;
    mobileModeAuto?: boolean;
    sx?: OverrideTheme;
}
export const MainContainer: FC<MainContainerProps>;
export interface InputBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    fullWidth?: boolean;
    label?: string;
    tooltip?: string;
    sx?: OverrideTheme;
    index?: number;
    overlayId?: "index";
    overlayIcon?: React.ReactNode;
    overlayAction?: () => void;
    overlayObject?: React.ReactNode;
    noLabelMinWidth?: boolean;
    startIcon?: React.ReactNode;
    required?: boolean;
    className?: string;
    helper?: string;
    state?: "normal" | "error" | "success" | "warning";
    helpTip?: React.ReactNode;
    helpTipPlacement?: CommonHelpTipPlacement;
    sizeMode?: "small" | "large";
    orientation?: "horizontal" | "vertical";
    disableErrorUntilFocus?: boolean;
}
export interface InputContainerProps {
    children?: React.ReactNode;
    sx?: OverrideTheme;
    startIcon?: React.ReactNode;
    className?: string;
    sizeMode?: "small" | "large";
}
export interface ExtraInputProps {
    originType?: string;
}
export const EyeOffIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const EyeIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const ErrorAlertIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const WarningAlertIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const SuccessAlertIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const InputBox: FC<InputBoxProps>;
export interface BreadcrumbsProps {
    sx?: OverrideTheme;
    options: BreadcrumbsOption[];
    goBackFunction?: () => void;
    displayLastItems?: false | number;
    onClickOption?: (to?: string) => void;
    children?: React.ReactNode;
    markCurrentItem?: boolean;
}
export interface BreadcrumbsOption {
    label: string;
    to?: string;
    onClick?: (to?: string) => void;
}
export interface BreadcrumbsContainerProps {
    sx?: OverrideTheme;
}
export interface BreadcrumbsOptionProps {
    id: string;
    name?: string;
    label?: string;
    icon?: ReactNode;
    iconLocation?: "start" | "end";
    disabled?: boolean;
    current?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    children?: ReactNode | string;
    sx?: OverrideTheme;
}
export interface ExpandMenuProps {
    id: string;
    name?: string;
    label?: string;
    variant?: "regular" | "callAction" | "secondary" | "text" | "subAction";
    icon?: ReactNode;
    iconLocation?: "start" | "end";
    children?: ReactNode | string;
    dropMenuPosition?: "start" | "end";
    compact?: boolean;
    sx?: OverrideTheme;
}
export interface ExpandMenuOptionProps {
    id: string;
    variant?: "regular" | "secondary";
    icon?: ReactNode;
    sx?: OverrideTheme;
    children: ReactNode;
}
export interface ExpandDropBaseProps {
    selectedOption?: string;
    hideTriggerAction: () => void;
    open: boolean;
    anchorEl?: (EventTarget & HTMLElement) | null;
    anchorOrigin?: "start" | "end";
    children: React.ReactNode;
}
export interface DropdownMainProps {
    sx?: OverrideTheme;
}
export type ExpandDropdownProps = DropdownMainProps & ExpandDropBaseProps;
export const ExpandMenu: FC<ExpandMenuProps & React.ButtonHTMLAttributes<HTMLButtonElement>>;
export const ExpandMenuOption: FC<ExpandMenuOptionProps & React.ButtonHTMLAttributes<HTMLButtonElement>>;
export const BreadcrumbButton: FC<BreadcrumbsOptionProps & React.ButtonHTMLAttributes<HTMLButtonElement>>;
export const Breadcrumbs: FC<BreadcrumbsProps>;
export interface ActionItem {
    action: () => void;
    label: string;
    disabled: boolean;
    icon: React.ReactNode;
    tooltip: string;
}
export interface ActionsListProps {
    sx?: OverrideTheme;
    items: ActionItem[];
    title: React.ReactNode;
}
export interface ActionsListPanelProps {
    sx?: OverrideTheme;
}
export interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    icon: React.ReactNode;
}
export const ActionsList: FC<ActionsListProps>;
export interface SimpleHeaderProps {
    label: React.ReactNode;
    icon?: React.ReactNode;
    sx?: OverrideTheme;
}
export interface SimpleHeaderContainerProps {
    sx?: OverrideTheme;
}
export const SimpleHeader: FC<SimpleHeaderProps & HTMLAttributes<HTMLDivElement>>;
export interface ModalBoxProps {
    onClose: () => void;
    open: boolean;
    title: React.ReactNode;
    children: React.ReactNode;
    widthLimit?: boolean;
    titleIcon?: React.ReactNode;
    backgroundOverlay?: boolean;
    iconColor?: "accept" | "delete" | "default";
    customMaxWidth?: number | string;
    sx?: OverrideTheme;
}
export interface ModalBoxContainerProps {
    backgroundOverlay?: boolean;
    widthLimit?: boolean;
    iconColor?: "accept" | "delete" | "default";
    customMaxWidth?: number | string;
    sx?: OverrideTheme;
}
export const ModalBox: FC<ModalBoxProps>;
export interface MainSwitchProps {
    id: string;
    label?: string;
    tooltip?: string;
    sx?: OverrideTheme;
    className?: string;
    switchOnly?: boolean;
    indicatorLabels?: string[];
    description?: string;
    helpTip?: React.ReactNode;
    helpTipPlacement?: CommonHelpTipPlacement;
}
export interface IndicatorProps {
    active: boolean;
    children: React.ReactNode;
}
export interface SwitchContainerProps {
    sx?: OverrideTheme;
}
export type SwitchProps = MainSwitchProps & React.InputHTMLAttributes<HTMLInputElement>;
export const Switch: FC<SwitchProps & React.InputHTMLAttributes<HTMLInputElement>>;
export interface SelectProps {
    options: SelectOption[];
    value?: string;
    id: string;
    name?: string;
    required?: boolean;
    className?: string;
    disabled?: boolean;
    label?: string;
    tooltip?: string;
    noLabelMinWidth?: boolean;
    fixedLabel?: string;
    placeholder?: string;
    onChange: (newValue: string, extraValue?: any) => void;
    sx?: OverrideTheme;
    helpTip?: React.ReactNode;
    helpTipPlacement?: CommonHelpTipPlacement;
    sizeMode?: "small" | "large";
    orientation?: "horizontal" | "vertical";
    state?: "normal" | "error" | "success" | "warning";
    readOnly?: boolean;
    helper?: string;
}
export interface DropdownSelectorProps {
    id: string;
    options: SelectOption[];
    selectedOption?: string;
    onSelect: (value: string, extraValue?: any, label?: string, selectedIndex?: number) => void;
    hideTriggerAction: () => void;
    open: boolean;
    anchorEl?: (EventTarget & HTMLElement) | null;
    anchorOrigin?: "start" | "end";
    useAnchorWidth?: boolean;
    forSelectInput?: boolean;
}
export interface DropDownBlockProps {
    useAnchorWidth: boolean;
    forSelectInput: boolean;
    sx: OverrideTheme;
}
export interface DropdownItemProps {
    icon?: React.ReactNode;
    label: string;
    indicator?: React.ReactNode;
}
export const DropdownSelector: FC<DropdownSelectorProps>;
export const CaretIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const CaretFilledIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const Select: FC<SelectProps>;
export interface RadioGroupProps {
    label?: string;
    tooltip?: string;
    selectorOptions: SelectOption[];
    currentValue: string;
    id: string;
    name: string;
    disableOptions?: boolean;
    displayInColumn?: boolean;
    className?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>, extraValue?: any) => void;
    sx?: OverrideTheme;
    helpTip?: React.ReactNode;
    helpTipPlacement?: CommonHelpTipPlacement;
}
export interface OptionsContainerProps {
    inColumn: boolean;
}
export const RadioGroup: FC<RadioGroupProps>;
export interface ReadBoxProps {
    label?: string;
    children: React.ReactNode;
    multiLine?: boolean;
    actionButton?: React.ReactNode;
    sx?: OverrideTheme;
    helpTip?: React.ReactNode;
    helpTipPlacement?: CommonHelpTipPlacement;
}
export interface ReadBoxBaseProps {
    label?: string;
    sx?: OverrideTheme;
    multiLine?: boolean;
}
export const ReadBox: FC<ReadBoxProps>;
export interface CommentBoxProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    id: string;
    fullWidth?: boolean;
    label?: string;
    tooltip?: string;
    sx?: OverrideTheme;
    index?: number;
    noLabelMinWidth?: boolean;
    required?: boolean;
    className?: string;
    error?: string;
    helpTip?: React.ReactNode;
    helpTipPlacement?: CommonHelpTipPlacement;
}
export interface CommentContainerProps {
    children?: React.ReactNode;
    sx?: OverrideTheme;
    error?: boolean;
    startIcon?: React.ReactNode;
    className?: string;
}
export interface ExtraCommentProps {
    originType?: string;
}
export const CommentBox: FC<CommentBoxProps>;
export interface MenuProps {
    options?: MenuItemProps[];
    sx?: OverrideTheme;
    applicationLogo: ApplicationLogoProps;
    callPathAction: (path: string) => void;
    horizontal?: boolean;
    isOpen: boolean;
    collapseAction: () => void;
    displayGroupTitles?: boolean;
    signOutAction?: () => void;
    currentPath?: string;
    middleComponent?: React.ReactNode;
    endComponent?: React.ReactNode;
    mobileModeAuto?: boolean;
}
export interface MenuItemProps {
    group?: string;
    path?: string;
    name: string;
    id?: string;
    icon: React.ReactNode;
    onClick?: (path: string) => void;
    children?: MenuItemProps[];
    badge?: boolean;
    currentPath?: string;
    visibleTooltip?: boolean;
    isVisible?: boolean;
}
export interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
    label: string;
    divider?: boolean;
}
export interface MainHeaderProps {
    divider?: boolean;
}
export interface MenuConstructProps {
    sx?: OverrideTheme;
}
export interface SubItemsBoxProps {
    anchorEl: (EventTarget & HTMLElement) | null;
    hideTriggerAction: () => void;
    children: React.ReactNode;
    open: boolean;
}
export const Menu: FC<MenuProps>;
export interface ExpandOptionsButtonProps {
    label: string;
    open: boolean;
    sx?: OverrideTheme;
}
export interface ConstructExpandOptionsProps {
    sx?: OverrideTheme;
}
export const ExpandOptionsButton: FC<ExpandOptionsButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>>;
export interface TabProps {
    label: string;
    icon?: React.ReactNode;
    disabled?: boolean;
    to?: string;
    id: string;
}
export interface TabItemProps {
    tabConfig: TabProps;
    content?: React.ReactNode;
}
export interface TabsProps {
    horizontal?: boolean;
    options: TabItemProps[];
    currentTabOrPath: string;
    useRouteTabs?: boolean;
    routes?: React.ReactElement | null;
    onTabClick: (selectedItem: string) => void;
    optionsInitialComponent?: React.ReactNode;
    optionsEndComponent?: React.ReactNode;
    horizontalBarBackground?: boolean;
    sx?: OverrideTheme;
}
export interface TabsContainerProps {
    horizontal: boolean;
    horizontalBarBackground: boolean;
    sx?: OverrideTheme;
}
export interface TabButtonProps {
    id: string;
    horizontal?: boolean;
    label: string;
    onClick: () => void;
    disabled: boolean;
    icon?: React.ReactNode;
    selected?: boolean;
}
export interface TabButtonConstructProps {
    horizontal: boolean;
}
export interface TabPanelProps {
    id: string;
    selectedTab?: string;
    useRouteTabs: boolean;
    children: React.ReactNode;
}
export const Tabs: FC<TabsProps & HTMLAttributes<HTMLDivElement>>;
export interface CodeEditorProps {
    value: string;
    label?: string;
    mode?: string;
    tooltip?: string;
    editorHeight?: string | number;
    onChange: (value: string) => any;
    className?: string;
    helpTools?: React.ReactNode;
    sx?: OverrideTheme;
    helpTip?: React.ReactNode;
    helpTipPlacement?: CommonHelpTipPlacement;
}
export interface CodeEditorBaseProps {
    editorHeight: string | number;
    sx?: OverrideTheme;
    className?: string;
}
export const CodeEditor: FC<CodeEditorProps>;
export interface TagMainProps {
    label: string;
    onDelete?: (item: string) => void;
    id: string;
    icon?: React.ReactNode;
}
export interface TagConstructProps {
    color?: "default" | "secondary" | "warn" | "alert" | "ok" | "grey";
    sx?: OverrideTheme;
    variant?: "regular" | "outlined";
    square?: boolean;
}
export type TagProps = TagMainProps & TagConstructProps;
export const Tag: FC<TagProps & React.HTMLAttributes<HTMLSpanElement>>;
export interface CommonActionLinkProps {
    isLoading?: boolean;
    label?: any;
}
export interface BaseActionLinkProps {
    sx?: OverrideTheme;
}
export type ActionLinkProps = CommonActionLinkProps & BaseActionLinkProps;
export const ActionLink: FC<ActionLinkProps & React.ButtonHTMLAttributes<HTMLButtonElement>>;
export interface ValuePairMain {
    label?: ReactNode;
    value?: ReactNode;
}
export interface ValuePairCommon {
    direction?: "column" | "row";
    sx?: OverrideTheme;
}
export type ValuePairProps = ValuePairMain & ValuePairCommon;
export const ValuePair: FC<ValuePairProps>;
export interface MainProgressProps {
    variant?: "determinate" | "indeterminate";
    notificationLabel?: string;
    value?: number;
    maxValue?: number;
    progressLabel?: boolean;
}
export interface CommonProgressBar {
    sx?: OverrideTheme;
    color?: "blue" | "red" | "green" | "orange" | "grey";
    barHeight?: number;
    transparentBG?: boolean;
}
export type ProgressBarProps = MainProgressProps & CommonProgressBar;
export const ProgressBar: FC<ProgressBarProps>;
export interface FileSelectorProps {
    label: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>, fileName: string, data?: string) => void;
    returnEncodedData?: boolean;
    id: string;
    name: string;
    disabled?: boolean;
    tooltip?: string;
    required?: boolean;
    error?: string;
    accept?: string;
    value: string;
    className?: string;
    noLabelMinWidth?: boolean;
    sx?: OverrideTheme;
    helpTip?: React.ReactNode;
    helpTipPlacement?: CommonHelpTipPlacement;
}
export interface FileSelectorConstructorProps {
    children?: React.ReactNode;
    sx?: OverrideTheme;
    error?: boolean;
    startIcon?: React.ReactNode;
    className?: string;
}
export const FileSelector: FC<FileSelectorProps>;
export interface SizeChartMain {
    label: boolean;
    width?: string;
    height?: string;
}
export interface SizeChartConstructProps {
    usedBytes: number;
    totalBytes: number;
    chartLabel?: string;
    sx?: OverrideTheme;
}
export type SizeChartProps = SizeChartMain & SizeChartConstructProps;
export const SizeChart: FC<SizeChartProps>;
export interface SnackbarMainProps {
    autoHideDuration?: number;
    message?: ReactNode;
    onClose: () => void;
    closeButton?: boolean;
    mode?: "inline" | "portal";
}
export interface SnackbarConstructProps {
    open: boolean;
    condensed?: boolean;
    variant?: "default" | "success" | "warning" | "error";
    sx?: OverrideTheme;
}
export interface SnackbarButtonProps {
    variant: "default" | "success" | "warning" | "error";
    condensed: boolean;
}
export type SnackbarProps = SnackbarMainProps & SnackbarConstructProps;
export const Snackbar: FC<SnackbarProps>;
export interface AccordionProps {
    expanded: boolean;
    onTitleClick: () => void;
    id: string;
    title: ReactNode;
    children: ReactNode;
    disabled?: boolean;
    sx?: OverrideTheme;
}
export interface AccordionMainProps {
    sx?: OverrideTheme;
}
export interface AccordionContentProps {
    expanded: boolean;
}
export const Accordion: FC<AccordionProps>;
export interface AutocompleteProps {
    options: SelectOption[];
    value?: string;
    id: string;
    name?: string;
    required?: boolean;
    className?: string;
    disabled?: boolean;
    displayDropArrow?: boolean;
    label?: string;
    tooltip?: string;
    noLabelMinWidth?: boolean;
    placeholder?: string;
    onChange: (newValue: string, extraValue?: any) => void;
    sx?: OverrideTheme;
    helpTip?: React.ReactNode;
    helpTipPlacement?: CommonHelpTipPlacement;
}
export const Autocomplete: FC<AutocompleteProps>;
export interface BadgeMain {
    invisible?: boolean;
    max?: number;
    showZero?: boolean;
    badgeContent?: number;
}
export interface BadgeConstruct {
    horizontalPosition?: "left" | "right";
    verticalPosition?: "bottom" | "top";
    sx?: OverrideTheme;
    color?: "default" | "secondary" | "warn" | "alert" | "ok" | "grey";
    shape?: "circular" | "rectangular";
    dotOnly?: boolean;
}
export type BadgeProps = BadgeMain & BadgeConstruct;
export const Badge: FC<HTMLAttributes<HTMLSpanElement> & BadgeProps>;
export interface WizardButton {
    label?: string;
    type?: "next" | "back" | "to" | "custom";
    action?: (nextFunction: (to: string | number) => void) => void;
    enabled?: boolean;
    toPage?: number;
    componentRender?: React.ReactNode;
}
export interface WizardElement {
    label: string;
    componentRender: any;
    buttons: WizardButton[];
    advancedOnly?: boolean;
    loadingStep?: boolean;
}
export interface WizardPage {
    page: WizardElement;
    pageChange: (to: string | number) => void;
    loadingStep?: boolean;
}
export interface WizardMain {
    loadingStep?: boolean;
    wizardSteps: WizardElement[];
    linearMode?: boolean;
}
export interface WizardConstruct {
    sx?: OverrideTheme;
    forModal?: boolean;
    actionButtonsPortalID?: HTMLElement;
}
export type WizardProps = WizardMain & WizardConstruct;
export type WizardPageProps = WizardPage & WizardConstruct;
export const Wizard: ({ wizardSteps, loadingStep, forModal, linearMode, actionButtonsPortalID, sx, }: WizardProps) => React.JSX.Element | null;
export interface InformativeMessageMain {
    title: React.ReactNode;
    message: React.ReactNode;
}
export interface InformativeConstructProps {
    variant?: "default" | "success" | "warning" | "error";
    sx?: OverrideTheme;
}
export type InformativeMessageProps = InformativeMessageMain & InformativeConstructProps;
export const InformativeMessage: FC<InformativeMessageProps>;
export interface DateTimeInputMain {
    pickerStartComponent?: React.ReactNode;
    className?: string;
    label?: string;
    required?: boolean;
    tooltip?: string;
    disabled?: boolean;
    openPickerIcon?: "arrow" | React.ReactNode;
    displayFormat?: string;
    helpTip?: React.ReactNode;
    helpTipPlacement?: CommonHelpTipPlacement;
    noLabelMinWidth?: boolean;
    pickerSx?: OverrideTheme;
}
export interface DateTimeConstruct {
    id: string;
    sx?: OverrideTheme;
    mode?: "all" | "date";
    value: DateTime | null;
    onChange: (value: DateTime | null) => void;
    minDate?: DateTime;
    maxDate?: DateTime;
    usePortal?: boolean;
}
export interface DateTimeSelectorMain {
    open?: boolean;
    anchorEl?: (EventTarget & HTMLElement) | null;
    onClose?: () => void;
}
export interface TimeSelectorProps {
    value: DateTime | null;
    onChange: (value: DateTime | null) => void;
    completeCallback?: () => void;
    timeFormat?: "12h" | "24h";
    secondsSelector: boolean;
}
export interface DateSelectorProps {
    minDate?: DateTime;
    maxDate?: DateTime;
    value: DateTime | null;
    onChange: (value: DateTime | null) => void;
}
export interface StylesOverrideProps {
    isPortal: boolean;
    mode: "all" | "date";
    coords: CSSObject;
    sx?: OverrideTheme;
}
export type DateTimeInputProps = DateTimeInputMain & DateTimeConstruct & TimeSelectorProps;
export type DateTimeSelectorProps = DateTimeSelectorMain & DateTimeConstruct & TimeSelectorProps;
export const DateTimeSelector: FC<DateTimeSelectorProps>;
export const DateTimeInput: FC<DateTimeInputProps>;
export interface LinkProps {
    sx?: OverrideTheme;
}
export const Link: FC<LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>>;
export const RoundedButton: FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>>;
export interface SliderProps {
    id: string;
    label?: string;
    noLabelMinWidth?: boolean;
    error?: string;
    tooltip?: string;
    sx?: OverrideTheme;
    helpTip?: React.ReactNode;
    helpTipPlacement?: CommonHelpTipPlacement;
    displayValue?: boolean;
    displayValueFunction?: (value: any) => React.ReactNode;
}
export interface SliderContainerProps {
    children?: React.ReactNode;
    sx?: OverrideTheme;
    error?: boolean;
    className?: string;
}
export const Slider: FC<SliderProps & React.InputHTMLAttributes<HTMLInputElement>>;
export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    displayLabels?: boolean;
    sx?: OverrideTheme;
}
export const ButtonGroup: FC<ButtonGroupProps>;
export interface FormActionsTrayProps extends React.HTMLAttributes<HTMLDivElement> {
    marginTop?: number;
    separator?: boolean;
    sx?: OverrideTheme;
}
export const FormActionsTray: FC<FormActionsTrayProps>;
export interface PillProps {
    type: "current" | "secondary" | "default";
    sx?: OverrideTheme;
}
export const Pill: FC<PillProps & React.HTMLAttributes<HTMLSpanElement>>;
export interface SearchBoxProps {
    id: string;
    placeholder?: string;
    sx?: OverrideTheme;
    icon?: React.ReactNode;
}
export const SearchBox: FC<SearchBoxProps & React.InputHTMLAttributes<HTMLInputElement>>;
export const InspectMenuIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const AuditLogsMenuIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const HealthMenuIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const MenuExpandedIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const TraceMenuIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const GroupsMenuIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const MenuCollapsedIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const MetricsMenuIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const IdentityMenuIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const LogsMenuIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const MonitoringMenuIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const SupportMenuIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const PerformanceMenuIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const DiagnosticsMenuIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const AccessMenuIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const RegisterMenuIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const DrivesMenuIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const AccountsMenuIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const ProfileMenuIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const CallHomeMenuIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const BucketsMenuIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const UsersMenuIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const KeysMenuIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const StatusMenuIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const SecretsMenuIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const PoliciesMenuIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const IdentitiesMenuIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const FileConfigIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const FilePdfIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const FileFontIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const FileLinkIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const FileImageIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const FileWorldIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const FileBookIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const FileMissingIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const FileCodeIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const FilePptIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const FileDbIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const FileTxtIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const FileVideoIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const FileLockIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const FileXlsIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const FileZipIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const FolderBrowserIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const FileCloudIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const FileMusicIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const FileNonType: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const ListFilterIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const PanelLeftOpenIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const BucketIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const HistoryIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const RefreshIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const PenLineIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const UploadIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const TagIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const EllipsisVerticalIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const ArrowLeftIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const SquareStackIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const RefreshCCWDotIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const CheckIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const XIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const CircleHelpIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const SettingsIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const LogOutIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const SearchIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const ChevronLeftIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const ChevronRightIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const EllipsisIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
export const DeleteIcon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
interface TableComponentsExtraProps {
    sx?: OverrideTheme;
}
export const Table: FC<TableComponentsExtraProps & React.TableHTMLAttributes<HTMLTableElement>>;
export const TableBody: FC<TableComponentsExtraProps & React.HTMLAttributes<HTMLTableSectionElement>>;
export const TableCell: FC<TableComponentsExtraProps & React.TdHTMLAttributes<HTMLTableDataCellElement>>;
export const TableHead: FC<TableComponentsExtraProps & React.HTMLAttributes<HTMLTableSectionElement>>;
export const TableHeadCell: FC<TableComponentsExtraProps & React.ThHTMLAttributes<HTMLTableHeaderCellElement>>;
export const TableRow: FC<TableComponentsExtraProps & React.HTMLAttributes<HTMLTableRowElement>>;

//# sourceMappingURL=mds.d.ts.map
