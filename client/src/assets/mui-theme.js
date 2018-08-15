import * as colors from 'material-ui/styles/colors';

const default_palette = {
    primary1Color: '#4db6ac',
    primary2Color: '#263238',
    secondaryMinus1Color: '#009688',
    primaryPlus1Color: '#b4c7d5',
    primary3Color: colors.teal300,
    accent1Color: colors.orangeA200,
    accent2Color: colors.orangeA400,
    accent3Color: colors.orangeA100,
    textColor: colors.grey900,
    secondaryTextColor: colors.grey600,
    alternateTextColor: colors.white,
    canvasColor: colors.white,
    borderColor: colors.grey300,
    disabledColor: colors.grey400,
    pickerHeaderColor: colors.teal500,
    clockCircleColor: colors.grey100,
    shadowColor: colors.black,
    primary1ColorFaded: colors.teal50,
    primary1ColorSmallFaded: colors.teal100,
    accent1ColorFaded: colors.pink50,
    accent1ColorSmallFaded: colors.pink100,
    successColor: colors.green600,
    errorColor: colors.red600,
    navColor: '#78A0B2'
};

export const mui_default = {
    fontFamily: 'Lato',
    palette: default_palette,
    textField: {
        floatingLabelColor: default_palette.secondaryTextColor,
        errorColor: default_palette.errorColor,
        labelColor: default_palette.textColor,
        focusColor: default_palette.secondaryMinus1Color
    },
    checkbox: {
        labelColor: default_palette.textColor
    },
    flashColors: {
        success: default_palette.successColor,
        danger: default_palette.errorColor
    },
    tabs: {
        backgroundColor: default_palette.canvasColor,
        selectedTextColor: default_palette.textColor,
        textColor: default_palette.secondaryTextColor
    },
    spacing: {
        iconSize: 24,
        desktopGutter: 24,
        desktopGutterMore: 32,
        desktopGutterLess: 16,
        desktopGutterMini: 12,
        desktopGutterTiny: 4,
        desktopKeylineIncrement: 64,
        desktopDropDownMenuItemHeight: 32,
        desktopDropDownMenuFontSize: 15,
        desktopDrawerMenuItemHeight: 48,
        desktopSubheaderHeight: 48,
        desktopToolbarHeight: 56
    },
    menuItem: {
        selectedTextColor: default_palette.textColor
    },
    toggle: {
        thumbOnColor: default_palette.secondaryMinus1Color,
        thumbOffColor: default_palette.borderColor,
        trackOffColor: default_palette.disabledColor
    }
};
